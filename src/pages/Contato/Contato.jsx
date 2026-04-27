import './Contato.css'
import { MapPin, Phone, Mail } from 'lucide-react'

function Contato() {
    return (
        <section className="contato">
            <div className="contato-inner">

                <div className="contato-info">
                    <h2>Fale com a <em>Grip</em></h2>
                    <p>
                        Tem alguma dúvida sobre nossas aulas, planos ou professores?
                        Preencha o formulário ou entre em contato pelos canais abaixo.
                    </p>

                    <div className="contato-detalhes">
                        <div className="contato-item">
                            <MapPin size={20} />
                            <span>R. Imac. Conceição, 1155 - Prado Velho, Curitiba - PR, 80215-901</span>
                        </div>
                        <div className="contato-item">
                            <Phone size={20} />
                            <span>(41) 3271-1515</span>
                        </div>
                        <div className="contato-item">
                            <Mail size={20} />
                            <span>contato@grip.com.br</span>
                        </div>
                    </div>
                </div>

                <form className="contato-form">
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" placeholder="Seu nome completo" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="seu@email.com" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="assunto">Assunto</label>
                        <input type="text" id="assunto" placeholder="Como podemos ajudar?" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" rows={5} placeholder="Escreva sua mensagem..." />
                    </div>

                    <button type="submit" className="btn">Enviar mensagem</button>
                </form>

            </div>
        </section>
    )
}

export default Contato
