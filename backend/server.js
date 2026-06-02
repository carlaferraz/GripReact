const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const e = require("express");

const app = express();

app.use(cors());
app.use(express.json());

const SECRET = "segredo_jwt";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    }, 
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});

function fileFilter(req, file, cb) {
    const allowedTypes = ["image/jpeg", "image/png"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Tipo de arquivo não permitido"), false);
    }
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ erro: "Token não fornecido" });
    }
    const token = authHeader.split(" ")[1];
    try {
        req.usuario = jwt.verify(token, SECRET);
        next();
    } catch (erro) {
        return res.status(401).json({ erro: "Token inválido" });
    }
}

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/upload", authMiddleware, upload.single("imagem"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ erro: "Nenhum arquivo enviado" });
    }
    const url = `http://localhost:3001/uploads/${req.file.filename}`;
    res.json({ url });
});

app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError || err.message) {
        return res.status(400).json({ erro: err.message });
    }
    res.status(500).json({ erro: "Erro interno" });
});

const usuarioFake = {
    email: "admin@email.com",
    senha: "123456"
};

app.post("/login", (req, res) => {
    const { email, senha } = req.body;
    if (
        email !== usuarioFake.email ||
        senha !== usuarioFake.senha
    )  {
        return res.status(401).json({
            erro: "Usuario invalido"
        });
    }
    const token = jwt.sign(
        {email},
        SECRET,
        {expiresIn: "1h"}
    );
    res.json({token});
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});

