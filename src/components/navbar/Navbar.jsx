import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { estaLogado, fazerLogout } from "../../services/authService";
import "./Navbar.css";
import gripLogo from "../../assets/grip-logo.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [logado, setLogado] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    setLogado(estaLogado());
  }, [location]);

  useEffect(() => {
    setMenuAberto(false);
  }, [location]);

  function handleLogout() {
    fazerLogout();
    setLogado(false);
    navigate("/login");
  }

  return (
    <header className="header">
      <div>
        <Link to="/" className="logo">
          <img src={gripLogo} alt="Grip" />
        </Link>
      </div>
      <div>
        <nav className={`navbar${menuAberto ? " aberto" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/professores">Professores</Link>
          <Link to="/planos">Planos</Link>
          <Link to="/sobre">Sobre</Link>
          {/* exercício 3: novo link no menu */}
          <Link to="/blog">Blog</Link>
          <Link to="/contato">Contato</Link>
          {logado ? (
            <>
              <Link to="/comunicados">Comunicados</Link>
              <Link to="/aulas">Aulas</Link>
              <Link to="/usuarios">Usuários</Link>
              <Link to="/upload">Upload</Link>
            </>
          ) : null}
        </nav>
      </div>
      <div className="header-actions">
        <Link to="/cadastro" className="btn btn-outline">
          Cadastro
        </Link>
        {logado ? (
          <button type="button" className="btn" onClick={handleLogout}>
            Sair
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuAberto((prev) => !prev)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
