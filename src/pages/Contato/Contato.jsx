import { useState } from 'react'
import './Contato.css'
import { MapPin, Phone, Mail } from 'lucide-react'
import { enviarMensagemContato } from '../../services/contatoService'

function Contato() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        assunto: '',
        mensagem: '',
    })
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState('')
    const [enviado, setEnviado] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setEnviado(false)
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setErro('')
        setEnviado(false)
        setCarregando(true)
        try {
            await enviarMensagemContato(formData)
            setEnviado(true)
            setFormData({
                nome: '',
                email: '',
                assunto: '',
                mensagem: '',
            })
        } catch (err) {
            setErro(err.message)
        } finally {
            setCarregando(false)
        }
    }

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

                <form className="contato-form" onSubmit={handleSubmit}>
                    {enviado ? (
                        <p className="contato-form-sucesso">
                            Mensagem enviada com sucesso. Retornaremos em breve.
                        </p>
                    ) : null}
                    {erro ? <p className="contato-form-erro">{erro}</p> : null}

                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Seu nome completo"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="assunto">Assunto</label>
                        <input
                            type="text"
                            id="assunto"
                            name="assunto"
                            value={formData.assunto}
                            onChange={handleChange}
                            placeholder="Como podemos ajudar?"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows={5}
                            value={formData.mensagem}
                            onChange={handleChange}
                            placeholder="Escreva sua mensagem..."
                        />
                    </div>

                    <button type="submit" className="btn" disabled={carregando}>
                        {carregando ? 'Enviando...' : 'Enviar mensagem'}
                    </button>
                </form>

            </div>
        </section>
    )
}

export default Contato
