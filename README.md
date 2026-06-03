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

O seed só cria um admin pra testar: `admin@email.com` / `123456`. Quem se cadastra no site usa o próprio e-mail e senha.

No front (outro terminal, na raiz do repo):

```bash
npm install
npm run dev
```

Backend: `http://localhost:3001` — Front: `http://localhost:5173`

`npm run build`, `npm run preview`, `npm run lint` na raiz. Mais detalhe da API em `backend/README.md`.

# Arquitetura

O navegador carrega `index.html`, o React sobe em `src/main.jsx` e o `src/App.jsx` define as rotas. Tudo que é página pública ou logada passa pelo `Layout` (navbar + footer).

No RA2 entrou backend em Node (`backend/`), login com JWT, upload de imagem e cadastro salvando no MySQL. A lógica de rede fica nos `services`, não dentro do JSX dos formulários.

# Rotas (`src/App.jsx`)

`BrowserRouter` + `Routes`. Rotas com login: `/usuarios` e `/upload` (usam `PrivateRoute` e token no `localStorage`).

`/`, `/sobre`, `/professores`, `/planos`, `/contato`, `/cadastro`, `/login`, `/usuarios`, `/upload`

# Páginas (`src/pages/`)

| Pasta | Rota | Conteúdo |
|--------|------|----------|
| `Home/hero/` | `/` | Hero / landing |
| `Sobre/` | `/sobre` | Texto institucional |
| `Professores/` | `/professores` | Grade com `Card` |
| `Planos/` | `/planos` | Planos com `Card` |
| `Contato/` | `/contato` | Formulário de contato |
| `Login/` | `/login` | Login no backend |
| `Usuarios/` | `/usuarios` | Lista da jsonplaceholder (rota protegida) |
| `Upload/` | `/upload` | Upload de imagem (rota protegida) |

Cadastro fica em `src/components/FormCadastro/` na rota `/cadastro`.

# Layout (`src/components/Layout.jsx`)

Navbar, conteúdo da rota (`Outlet`) e Footer.

# Componentes (`src/components/`)

- **Navbar / Footer** — navegação; logout tira o token e manda pro login
- **Card** — Professores e Planos
- **FormCadastro** — cadastro com senha; chama `cadastroService`
- **PrivateRoute** — sem token redireciona pro `/login`
- **ImageUpload** — tela de upload (hook + service)

# Services (`src/services/`)

- `cadastroService.js` — valida e manda POST `/cadastros`
- `contatoService.js` — valida e simula envio (ainda sem API real)
- `uploadService.js` — POST `/upload` com `Authorization: Bearer`

# Entrega

Repositório atualizado, vídeo percorrendo todas as rotas, README com esta arquitetura.
