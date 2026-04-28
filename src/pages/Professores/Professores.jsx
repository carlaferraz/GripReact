import './Professores.css'
import Card from '../../components/Card/Card'

function Professores() {
  return (
    <section className="page-lista professores-page">
      <div className="page-lista-inner">
        <header className="page-lista-header">
          <span className="page-eyebrow">Equipe Grip</span>
          <h1>Professores</h1>
          <p>
            Conheça quem conduz as aulas da Grip: mestres comprometidos com técnica, segurança e a
            cultura do ballet clássico.
          </p>
        </header>

        <div className="page-lista-grid">
          <Card
            variant="professor"
            eyebrow="Professor(a)"
            title="Helena Duarte"
            subtitle="Diretora artística · Ballet clássico"
            description="Formação em escolas europeias e mais de 20 anos em palco e sala de aula. Coordena o repertório e a progressão técnica dos níveis avançados."
          />
          <Card
            variant="professor"
            eyebrow="Professor(a)"
            title="Rafael Campos"
            subtitle="Professor · Variações e repertório"
            description="Especialista em coreografias clássicas e preparação para apresentações. Foco em alinhamento, musicalidade e expressão cênica."
          />
          <Card
            variant="professor"
            eyebrow="Professor(a)"
            title="Marina Klaus"
            subtitle="Professora · Iniciantes e infantil"
            description="Didática gentil para quem está começando ou retomando os estudos. Trabalho com consciência corporal e bases seguras antes de saltos e pontas."
          />
          <Card
            variant="professor"
            eyebrow="Professor(a)"
            title="Vicente Alvarez"
            subtitle="Professor · Jazz e complementar"
            description="Aulas complementares para flexibilidade, força e coordenação que apoiam a evolução no ballet sem perder o prazer pelo movimento."
          />
        </div>
      </div>
    </section>
  )
}

export default Professores
