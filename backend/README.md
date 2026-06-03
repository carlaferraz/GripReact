# Backend GripReact

API Express na porta 3001. MySQL + JWT + upload.

# Configurar (primeira vez)

```bash
cp .env.example .env
npm install
npm run db:setup
npm run seed
```

O `.env` precisa da senha do MySQL. O `db:setup` cria o banco `gripreact` e as tabelas (`schema.sql`). O `seed` insere o admin de teste.

# Rodar

```bash
npm start
```

# Rotas

- `POST /login` — body: `{ email, senha }` → devolve `{ token }`
- `POST /cadastros` — dados do formulário + senha (grava em `cadastros` e `usuarios`)
- `POST /upload` — precisa header `Authorization: Bearer <token>`, campo do arquivo: `imagem`

Arquivos vão pra pasta `uploads/` e a URL volta tipo `http://localhost:3001/uploads/...`

# Tabelas

- `usuarios` — login (senha com bcrypt)
- `cadastros` — o que vem do form da Grip
