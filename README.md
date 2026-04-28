# GripReact

SPA em React + Vite com React Router — TDE (escola Grip, ballet clássico).

## Rodar

```bash
npm install
npm run dev
```

`npm run build` — produção em `dist/` · `npm run preview` — testar o build · `npm run lint`

## Estrutura

| Caminho | Função |
|---------|--------|
| `src/App.jsx` | Rotas: `/`, `/sobre`, `/professores`, `/planos`, `/contato`, `/cadastro` |
| `src/components/Layout.jsx` | Navbar, `<main>` + `Outlet`, Footer |
| `src/components/Card/` | Card usado em Professores e Planos |
| `src/components/FormCadastro/` | Cadastro + `src/services/cadastroService.js` |

Base: [Vite](https://vitejs.dev/), [React Router](https://reactrouter.com/).

## Entrega

Repositório atualizado, vídeo da navegação entre as rotas, README com arquitetura acima.
