import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="header">
            <div>
                <Link to="/" className="logo">
                <img src="src/assets/grip-logo.svg" alt="grip logo" />
                </Link>
            </div>
            <div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/">Professores</Link>
                <Link to="/">Planos</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
            </nav>
            </div>
            <Link to="/cadastro" className="btn">Entrar</Link>
        </header>
    )
}

export default Navbar