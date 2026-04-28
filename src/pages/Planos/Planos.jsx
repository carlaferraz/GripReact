import { Link } from 'react-router-dom'
import './Planos.css'
import Card from '../../components/Card/Card'

function Planos() {
  return (
    <section className="page-lista planos-page" id="planos">
      <div className="page-lista-inner">
        <header className="page-lista-header">
          <span className="page-eyebrow">Assinaturas</span>
          <h1>Planos</h1>
          <p>
            Escolha o ritmo certo para a sua rotina. Todos os planos incluem acesso ao ambiente Grip e
            trilhas por nível, do iniciante ao avançado.
          </p>
        </header>

        <div className="page-lista-grid">
          <Card variant="plano" eyebrow="Plano" title="Descoberta" meta="R$ 79 / mês">
            <ul className="card-list">
              <li>1 aula ao vivo por semana</li>
              <li>Acesso a materiais gravados (biblioteca base)</li>
              <li>Suporte por e-mail</li>
            </ul>
            <div className="card-footer">
              <Link className="btn" to="/cadastro">
                Quero este plano
              </Link>
            </div>
          </Card>

          <Card variant="plano" eyebrow="Plano" title="Evolua" meta="R$ 139 / mês">
            <ul className="card-list">
              <li>2 aulas ao vivo por semana</li>
              <li>Biblioteca completa + sugestões por nível</li>
              <li>Feedback rápido no fórum da turma</li>
            </ul>
            <div className="card-footer">
              <Link className="btn" to="/cadastro">
                Quero este plano
              </Link>
            </div>
          </Card>

          <Card variant="plano" eyebrow="Plano" title="Palco" meta="R$ 229 / mês">
            <ul className="card-list">
              <li>Aulas ilimitadas ao vivo</li>
              <li>Variações e preparação para apresentações</li>
              <li>Orientação pontual com professor titular</li>
            </ul>
            <div className="card-footer">
              <Link className="btn" to="/cadastro">
                Quero este plano
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Planos
