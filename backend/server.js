require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const SECRET = process.env.JWT_SECRET || "segredo_jwt";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

function fileFilter(req, file, cb) {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Formato de imagem inválido."), false);
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ erro: "Token ausente." });
  }

  const token = authHeader.split(" ")[1];
  try {
    req.usuario = jwt.verify(token, SECRET);
    next();
  } catch {
    return res.status(401).json({ erro: "Token inválido." });
  }
}

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: "E-mail e senha são obrigatórios." });
  }

  try {
    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE email = ? LIMIT 1",
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({ erro: "Usuário inválido" });
    }

    const usuario = rows[0];
    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);

    if (!senhaValida) {
      return res.status(401).json({ erro: "Usuário inválido" });
    }

    const token = jwt.sign({ email: usuario.email }, SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (erro) {
    console.error(erro);
    res.status(503).json({
      erro: "Erro ao conectar com o banco de dados. Verifique o MySQL.",
    });
  }
});

app.post("/cadastros", async (req, res) => {
  const { nome, email, senha, idade, genero, aceiteTermos } = req.body;

  if (!nome?.trim() || !email?.trim()) {
    return res.status(400).json({ erro: "Nome e e-mail são obrigatórios." });
  }

  if (!senha || String(senha).length < 6) {
    return res.status(400).json({ erro: "Senha deve ter pelo menos 6 caracteres." });
  }

  if (!aceiteTermos) {
    return res.status(400).json({ erro: "É necessário aceitar os termos." });
  }

  let connection;

  try {
    connection = await pool.getConnection();

    const [existentes] = await connection.query(
      "SELECT id FROM usuarios WHERE email = ? LIMIT 1",
      [email.trim()]
    );

    if (existentes.length > 0) {
      return res.status(409).json({ erro: "Este e-mail já está cadastrado." });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    await connection.beginTransaction();

    const [resultado] = await connection.query(
      `INSERT INTO cadastros (nome, email, idade, genero, aceite_termos)
       VALUES (?, ?, ?, ?, ?)`,
      [
        nome.trim(),
        email.trim(),
        idade || "",
        genero || "",
        aceiteTermos ? 1 : 0,
      ]
    );

    await connection.query(
      "INSERT INTO usuarios (email, senha_hash) VALUES (?, ?)",
      [email.trim(), senhaHash]
    );

    await connection.commit();

    res.status(201).json({
      sucesso: true,
      id: resultado.insertId,
      mensagem: "Cadastro salvo com sucesso. Use seu e-mail e senha no login.",
    });
  } catch (erro) {
    if (connection) await connection.rollback();
    console.error(erro);
    res.status(503).json({
      erro: "Erro ao salvar cadastro. Verifique o MySQL.",
    });
  } finally {
    if (connection) connection.release();
  }
});

app.post(
  "/upload",
  authMiddleware,
  upload.single("imagem"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({ erro: "Nenhum arquivo recebido." });
    }

    const url = `http://localhost:3001/uploads/${req.file.filename}`;
    res.json({ url });
  }
);

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError || err.message) {
    return res.status(400).json({ erro: err.message });
  }
  res.status(500).json({ erro: "Erro interno." });
});

app.post("/contato", async (req, res) => {
  const { nome, email, assunto, mensagem, fofurice } = req.body;

  if (!nome || !email || !assunto || !mensagem || !fofurice) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
  }

  try {
    await pool.query(
      "INSERT INTO contatos (nome, email, assunto, mensagem, fofurice) VALUES (?, ?, ?, ?, ?)",
      [nome.trim(), email.trim(), assunto.trim(), mensagem.trim(), fofurice.trim()]
    );
    res.status(201).json({ sucesso: true });
  } catch (erro) {
    console.error(erro);
    res.status(503).json({ erro: "Erro ao salvar mensagem." });
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});