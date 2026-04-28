import './Footer.css'
import { Link } from 'react-router-dom'
import gripLogo from '../../assets/grip-logo.svg'

function Footer() {
    return (
        <footer id="sobre">
            <div className="rodape-in">

                <div className="marca">
                    <img src={gripLogo} alt="Grip" />
                    <p>Ballet clássico ensinado com paixão e tradição.</p>
                    <div className="social">
                        <a href="#" aria-label="Instagram">
                            i
                        </a>
                        <a href="#" aria-label="Facebook">
                            f
                        </a>
                        <a href="#" aria-label="YouTube">
                            y
                        </a>
                        <a href="#" aria-label="Twitter">
                            t
                        </a>
                    </div>
                </div>

                <div className="col">
                    <h4>Links Úteis</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/professores">Professores</Link></li>
                        <li><Link to="/planos">Planos</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </div>

                <div className="col">
                    <h4>Suporte</h4>
                    <ul>
                        <li><a href="#">Ajuda</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Termos de Serviço</a></li>
                        <li><a href="#">Privacidade</a></li>
                    </ul>
                </div>

            </div>

            <div className="rodape-base">
                <p>© 2026 Grip. Todos os direitos reservados.</p>
                <p><a href="#">Política de Privacidade</a> · <a href="#">Termos</a></p>
            </div>
        </footer>
    )
}

export default Footer