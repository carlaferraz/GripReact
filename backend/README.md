# Backend GripReact

Express na porta 3001. MySQL, JWT, upload.

# Setup

```bash
cp .env.example .env
npm install
npm run db:setup
npm run seed
```

Banco já do RA2:

```bash
npm run db:migrate
```

# Rodar

```bash
npm start
```

# Rotas

| Método | Rota | Auth | Descrição |
|--------|------|------|-----------|
| POST | `/login` | | retorna `{ token }` |
| POST | `/cadastros` | | |
| POST | `/contatos` | | |
| GET | `/perfil` | Bearer | |
| POST | `/upload` | Bearer | salva em `uploads` + `foto_url` |

# Tabelas

- `usuarios` — login + `foto_url`
- `uploads` — histórico de fotos enviadas
- `cadastros` — formulário Grip
- `contatos` — mensagens do site

# Scripts

- `npm run db:setup` — banco novo
- `npm run db:migrate` — RA3 em banco existente
- `npm run seed` — usuário de teste
- `npm start` — API
