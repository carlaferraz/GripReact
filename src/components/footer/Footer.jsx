import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer id="sobre">
            <div className="rodape-in">
                <div className="marca">
                    <img src="src/assets/grip-logo.svg" alt="logo grip" />
                    <p>Ballet clássico ensinado com paixão, técnica e a tradição das maiores escolas do mundo.</p>
                    <div className="social"></div>
                </div>
                <div className="col">
                    <h4>O Grip</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/aulas">Aulas</a></li>
                        <li><a href="/professores">Professores</a></li>
                        <li><a href="/planos">Planos</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Suporte</h4>
                    <ul>
                        <li><a href="#">Ajuda</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Termos de Serviço</a></li>
                        <li><a href="#">Privacidade</a></li>
                    </ul>
                </div>
            </div>
            <div className="rodape-base">
                <p>© 2026 Grip. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer