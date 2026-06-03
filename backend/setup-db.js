require("dotenv").config();
const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");

async function setup() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    multipleStatements: true,
  });

  const sql = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf8");
  await connection.query(sql);
  await connection.end();

  console.log("Banco gripreact e tabelas criados. Próximo passo: npm run seed");
}

setup().catch((erro) => {
  console.error("Erro ao configurar o banco:", erro.message);
  console.error("Confira o .env (usuário/senha) e se o MySQL está ligado.");
  process.exit(1);
});
