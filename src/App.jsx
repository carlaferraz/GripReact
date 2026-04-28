import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Hero from './pages/Home/hero/Hero'
import Contato from './pages/Contato/Contato'
import Sobre from './pages/Sobre/Sobre'
import Professores from './pages/Professores/Professores'
import Planos from './pages/Planos/Planos'
import FormCadastro from "./components/FormCadastro/FormCadastro";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="professores" element={<Professores />} />
          <Route path="planos" element={<Planos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="cadastro" element={<FormCadastro />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
