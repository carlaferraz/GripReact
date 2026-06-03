import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Contato from './pages/Contato/Contato'
import Sobre from './pages/Sobre/Sobre'
import Professores from './pages/Professores/Professores'
import Planos from './pages/Planos/Planos'
import FormCadastro from "./components/FormCadastro/FormCadastro";
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/PrivateRoute";
import UsuariosPage from "./pages/Usuarios/UsuariosPage";
import UploadPage from "./pages/Upload/UploadPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="professores" element={<Professores />} />
          <Route path="planos" element={<Planos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="cadastro" element={<FormCadastro />} />
          <Route path="login" element={<Login />} />
          <Route
            path="usuarios"
            element={
              <PrivateRoute>
                <UsuariosPage />
              </PrivateRoute>
            }
          />
          <Route
            path="upload"
            element={
              <PrivateRoute>
                <UploadPage />
              </PrivateRoute>
            }
          />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
