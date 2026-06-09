require("dotenv").config();
const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");

async function runSql(connection, filename) {
  const sql = fs.readFileSync(path.join(__dirname, filename), "utf8");
  await connection.query(sql);
}

async function migrate() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "gripreact",
    multipleStatements: true,
  });

  await runSql(connection, "migrate-ra3.sql");
  await runSql(connection, "migrate-auth.sql");
  await runSql(connection, "migrate-persist.sql");

  try {
    await connection.query(
      "ALTER TABLE usuarios ADD COLUMN foto_url VARCHAR(500) NULL"
    );
  } catch (erro) {
    if (erro.code !== "ER_DUP_FIELDNAME") throw erro;
  }

  try {
    await connection.query(
      "ALTER TABLE usuarios ADD COLUMN role VARCHAR(20) NOT NULL DEFAULT 'aluno'"
    );
  } catch (erro) {
    if (erro.code !== "ER_DUP_FIELDNAME") throw erro;
  }

  await connection.query(
    "UPDATE usuarios SET role = 'admin' WHERE email = 'admin@email.com'"
  );

  await connection.end();
  console.log("Migrate aplicado. Próximo: npm run seed");
}

migrate().catch((erro) => {
  console.error("Erro no migrate:", erro.message);
  process.exit(1);
});
