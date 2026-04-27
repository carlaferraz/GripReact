import React from 'react'
import './Navbar.css'
import { useState } from 'react'

function Navbar() {
    return (
        <header className="header">
            <div>
                <a href="/" className="logo">
                <img src="src/assets/grip-logo.svg" alt="grip logo" />
                </a>
            </div>
            <div>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">Aulas</a>
                <a href="/">Professores</a>
                <a href="/">Planos</a>
                <a href="/">Sobre</a>
            </nav>
            </div>
            <button className="btn">Entrar</button>
            
        </header>
    )
}

export default Navbar