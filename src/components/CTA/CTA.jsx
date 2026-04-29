import { Link } from "react-router-dom"
import "./CTA.css"

function CTA() {
  return (
    <section className="cta">
      <div className="cta-box">
        <h2>Comece sua jornada no <em>balé hoje</em></h2>
        <p>
          Junte-se a milhares de bailarinos ao redor do mundo que estão
          descobrindo a sua graça e a arte do balé com nossos instrutores
          especializados.
        </p>
        <div className="cta-btns">
          <Link className="btn" to="/cadastro">Começar</Link>
        </div>
        <ul className="cta-lista">
          <li>✓ Teste de 14 dias</li>
          <li>✓ Sem cartão de crédito</li>
          <li>✓ Cancele a qualquer momento</li>
        </ul>
      </div>
    </section>
  )
}

export default CTA
