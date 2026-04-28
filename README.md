# GripReact

SPA em React + Vite com React Router — TDE (escola Grip, ballet clássico).

## Rodar o projeto

```bash
npm install
npm run dev
```

Outros scripts: `npm run build` (gera `dist/`), `npm run preview`, `npm run lint`.

## Arquitetura

**Fluxo geral:** o navegador carrega `index.html` → React monta a árvore em `src/main.jsx` → `src/App.jsx` define o roteador e quais telas aparecem em cada URL.

### Rotas (`src/App.jsx`)

`BrowserRouter` + `Routes`: `/` (home), `/sobre`, `/professores`, `/planos`, `/contato`, `/cadastro`. Todas ficam dentro de um layout que repete cabeçalho e rodapé.

### Páginas (`src/pages/`)

Cada rota aponta para um componente de página (por pasta):

| Pasta | Rota | Conteúdo |
|--------|------|----------|
| `Home/hero/` | `/` | Hero / landing |
| `Sobre/` | `/sobre` | Texto institucional |
| `Professores/` | `/professores` | Grade com componente `Card` |
| `Planos/` | `/planos` | Planos com `Card` + link para cadastro |
| `Contato/` | `/contato` | Formulário e dados de contato |

As páginas **só** montam layout e conteúdo da tela; não concentram regra de negócio pesada.

### Layout (`src/components/Layout.jsx`)

Envolve **Navbar**, a área da rota ativa (`Outlet` dentro de `<main className="main-content">`) e **Footer**. O `#root` em `App.css` usa flex em coluna para o miolo crescer (`flex: 1`) sem precisar de um `<div>` extra só para isso.

### Componentes (`src/components/`)

- **Navbar / Footer** — navegação fixa.
- **Card** — bloco reutilizado em Professores e Planos.
- **FormCadastro** — formulário controlado; envio passa pelo service abaixo.

### Services (`src/services/`)

Funções que simulam ou isolam chamadas de backend, para a página não misturar validação/rede com o JSX. Hoje existe **`cadastroService.js`**: valida dados e simula delay de API no cadastro.

Base: [Vite](https://vitejs.dev/), [React Router](https://reactrouter.com/).

## Entrega

Repositório atualizado, vídeo percorrendo todas as rotas, README com esta arquitetura.
