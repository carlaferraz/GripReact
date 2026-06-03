import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import gripLogo from "../../assets/grip-logo.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogado(Boolean(token && token !== "undefined"));
  }, [location]);

  function handleLogout() {
    localStorage.removeItem("token");
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
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/professores">Professores</Link>
          <Link to="/planos">Planos</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
          {logado ? (
            <>
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
      </div>
    </header>
  );
}

export default Navbar;
