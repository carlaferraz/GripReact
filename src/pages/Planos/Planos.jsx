import { Link } from 'react-router-dom'
import './Planos.css'
import Card from '../../components/Card/Card'

const planos = [
  {
    title: 'Descoberta',
    meta: 'R$ 79 / mês',
    bullets: ['1 aula ao vivo por semana', 'Acesso a materiais gravados (biblioteca base)', 'Suporte por e-mail'],
  },
  {
    title: 'Evolua',
    meta: 'R$ 139 / mês',
    bullets: [
      '2 aulas ao vivo por semana',
      'Biblioteca completa + sugestões por nível',
      'Feedback rápido no fórum da turma',
    ],
  },
  {
    title: 'Palco',
    meta: 'R$ 229 / mês',
    bullets: [
      'Aulas ilimitadas ao vivo',
      'Variações e preparação para apresentações',
      'Orientação pontual com professor titular',
    ],
  },
]

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
          {planos.map((pl) => (
            <Card key={pl.title} variant="plano" eyebrow="Plano" title={pl.title} meta={pl.meta}>
              <ul className="card-list">
                {pl.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="card-footer">
                <Link className="btn" to="/cadastro">
                  Quero este plano
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Planos
