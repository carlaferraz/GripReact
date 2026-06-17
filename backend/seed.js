require("dotenv").config();
const bcrypt = require("bcryptjs");
const pool = require("./db");

const ADMIN_EMAIL = "admin@email.com";
const ADMIN_SENHA = "123456";

async function seed() {
  try {
    const senhaHash = await bcrypt.hash(ADMIN_SENHA, 10);

    await pool.query(
      `INSERT INTO usuarios (email, senha_hash)
       VALUES (?, ?)
       ON DUPLICATE KEY UPDATE senha_hash = VALUES(senha_hash)`,
      [ADMIN_EMAIL, senhaHash]
    );

    console.log(`Usuário de teste: ${ADMIN_EMAIL} / ${ADMIN_SENHA}`);
    process.exit(0);
  } catch (erro) {
    console.error("Erro no seed:", erro.message);
    process.exit(1);
  }
}

seed();
