# GripReact

Site da escola Grip (ballet clássico), feito em React + Vite para a disciplina **Programação para Web 4** (PUCPR BSI).

Repositório: [github.com/carlaferraz/GripReact](https://github.com/carlaferraz/GripReact)

O projeto evoluiu em três entregas: estrutura e rotas (RA1), formulários e consumo de API (RA2), e persistência com JWT e upload (RA3).

---

## Como rodar

Você precisa do **MySQL** ligado e do **Node** instalado.

### Backend

```bash
cd backend
cp .env.example .env
```

Edite o `.env` com a senha do seu MySQL, depois:

```bash
npm install
npm run db:setup
npm run seed
npm start
```

Se o banco já existia de uma entrega anterior:

```bash
npm run db:migrate
npm run seed
```

A API sobe em `http://localhost:3001`.

Usuário de teste criado pelo seed: `admin@email.com` / `123456`. Quem se cadastra no site usa o próprio e-mail e senha.

### Frontend

Em outro terminal, na raiz do projeto:

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

Detalhes da API em [`backend/README.md`](backend/README.md).

---

## O que o projeto faz

SPA com layout fixo (navbar + footer), páginas públicas de apresentação da escola e uma área restrita para quem está logado.

**Persistência no MySQL:** cadastro de alunos, mensagens de contato, login com senha criptografada (bcrypt) e foto de perfil.

**Autenticação JWT:** login retorna um token salvo no `localStorage`. Rotas protegidas checam o token; requisições ao backend enviam `Authorization: Bearer`. Se o token expirar, o usuário é deslogado.

**Upload de imagem:** preview antes de enviar, validação de tipo e tamanho (máx. 5 MB), arquivo salvo no servidor e URL gravada no banco.

**APIs externas** (JSONPlaceholder), acessíveis só logado:
- `/users` — Rede Grip
- `/posts` — Comunicados
- `/albums` — Aulas (trilhas/módulos)

---

## Arquitetura

```
src/
├── main.jsx          → entrada do React
├── App.jsx           → rotas
├── components/       → Layout, Navbar, Footer, FormCadastro, ImageUpload, PrivateRoute...
├── pages/            → uma pasta por tela
├── services/         → chamadas HTTP (fetch)
├── hooks/            → useImageUpload
└── utils/            → validação de formulários

backend/
├── server.js         → Express (login, cadastro, contato, perfil, upload)
├── db.js             → pool MySQL
└── schema.sql        → tabelas
```

A lógica de rede fica nos **services**, não nas páginas. Formulários validam no client (`validacaoFormulario.js`) e o backend valida de novo antes de gravar.

---

## Rotas

| Rota | Acesso | Descrição |
|------|--------|-----------|
| `/` | público | Home |
| `/sobre` | público | Sobre a escola |
| `/professores` | público | Equipe |
| `/planos` | público | Planos |
| `/contato` | público | Formulário → MySQL |
| `/cadastro` | público | Cadastro com senha → MySQL |
| `/login` | público | Login JWT |
| `/comunicados` | logado | Posts (API externa) |
| `/aulas` | logado | Trilhas de aula (API externa) |
| `/usuarios` | logado | Rede Grip (API externa) |
| `/upload` | logado | Foto de perfil |

Rotas logadas usam `PrivateRoute`, que redireciona para `/login` se não houver token.

---

## Services

| Arquivo | O que faz |
|---------|-----------|
| `authService` | login, logout, verificação de sessão |
| `cadastroService` | POST `/cadastros` |
| `contatoService` | POST `/contatos` |
| `perfilService` | GET `/perfil` (Bearer) |
| `uploadService` | POST `/upload` (Bearer) |
| `comunicadosService` | GET jsonplaceholder `/posts` |
| `aulasService` | GET jsonplaceholder `/albums` |
| `usuariosService` | GET jsonplaceholder `/users` |

---

## Roteiro do vídeo de apresentação

1. Navegar pelas páginas públicas (Home, Professores, Planos, Sobre, Contato)
2. Cadastrar um aluno com senha
3. Fazer login
4. Abrir Comunicados, Aulas e Usuários (APIs externas)
5. Enviar foto de perfil no Upload (persiste no MySQL)
6. Enviar mensagem no Contato (persiste no MySQL)
7. Sair

---

## Entrega RA3

- [x] Ambiente React com componentes reutilizáveis e rotas
- [x] Formulários com validação e camada de services
- [x] Consumo de APIs (backend próprio + JSONPlaceholder)
- [x] Autenticação JWT com rotas protegidas
- [x] Persistência de dados no MySQL
- [x] Upload de foto de perfil com preview
- [x] Segunda API externa integrada (Aulas)
- [x] README com arquitetura e instruções de execução
