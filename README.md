# GripReact

SPA em React + Vite com React Router — TDE da escola Grip (ballet clássico).

# Rodar o projeto

Precisa do MySQL rodando. No backend:

```bash
cd backend
cp .env.example .env
# coloca a senha do MySQL no .env
npm install
npm run db:setup
npm run seed
npm start
```

Se o banco já existia do RA2:

```bash
npm run db:migrate
```

O seed cria usuário de teste: `admin@email.com` / `123456`. Quem se cadastra usa o próprio e-mail e senha.

No front (outro terminal, na raiz):

```bash
npm install
npm run dev
```

Backend: `http://localhost:3001` — Front: `http://localhost:5173`

Mais detalhe da API em `backend/README.md`.

# Arquitetura

O React sobe em `src/main.jsx`, rotas em `src/App.jsx`, layout com navbar e footer. Lógica de rede nos `services`.

RA3: segunda API externa, foto de perfil no MySQL, contato no banco, JWT simples (padrão da aula).

# Rotas

Públicas: `/`, `/sobre`, `/professores`, `/planos`, `/contato`, `/cadastro`, `/login`

Só logado (`PrivateRoute`): `/comunicados`, `/aulas`, `/usuarios`, `/upload`

# Páginas

| Pasta | Rota | Conteúdo |
|--------|------|----------|
| `Home/` | `/` | Landing |
| `Sobre/` | `/sobre` | Institucional |
| `Professores/` | `/professores` | Equipe |
| `Planos/` | `/planos` | Planos |
| `Contato/` | `/contato` | Form → MySQL |
| `Login/` | `/login` | JWT |
| `Comunicados/` | `/comunicados` | API posts (jsonplaceholder) |
| `Aulas/` | `/aulas` | API albums (jsonplaceholder) |
| `Usuarios/` | `/usuarios` | Rede Grip — API users |
| `Upload/` | `/upload` | Foto de perfil + JWT |

Cadastro: `FormCadastro` em `/cadastro`.

# Services

- `cadastroService` — POST `/cadastros`
- `contatoService` — POST `/contatos`
- `comunicadosService` — jsonplaceholder `/posts`
- `usuariosService` — jsonplaceholder `/users`
- `authService` — login, logout, `localStorage` token
- `perfilService` — GET `/perfil`
- `uploadService` — POST `/upload` com Bearer

# Vídeo / apresentação (10 e 17/06)

1. Cadastro com senha
2. Login
3. Comunicados e Rede Grip (APIs externas)
4. Upload da foto de perfil (persiste no MySQL)
5. Contato (salva no banco)
6. Sair

# Entrega

Repositório atualizado, vídeo percorrendo todas as rotas, README com esta arquitetura.
