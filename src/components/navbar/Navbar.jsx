import './Navbar.css'
import { Link } from 'react-router-dom'
import gripLogo from '../../assets/grip-logo.svg'

function Navbar() {
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
            </nav>
            </div>
            <Link to="/cadastro" className="btn">Entrar</Link>

        </header>
    )
}

export default Navbar