import './Sobre.css'

function Sobre() {
  return (
    <section className="sobre">
      <div className="sobre-inner">
        <header className="sobre-intro">
          <span className="sobre-eyebrow">Grip</span>
          <h1>Sobre a escola</h1>
          <p>
            A <em>Grip</em> nasceu para aproximar o ballet clássico de quem busca técnica séria com um
            ambiente acolhedor. Combinamos tradição do repertório, didática clara e tecnologia para
            você treinar com segurança onde estiver.
          </p>
        </header>

        <div className="sobre-grid">
          <article className="sobre-card">
            <h2>Missão</h2>
            <p>
              Formar dançarinos conscientes do corpo e da música, respeitando o corpo e celebrando a
              arte do ballet com responsabilidade pedagógica.
            </p>
          </article>
          <article className="sobre-card">
            <h2>O que oferecemos</h2>
            <p>
              Aulas ao vivo por nível, suporte em turma, materiais gravados selecionados e trilhas para
              iniciante, intermediário e avançado — sempre alinhados aos pilares do ensino clássico.
            </p>
          </article>
          <article className="sobre-card">
            <h2>Nosso jeito</h2>
            <p>
              Correções objetivas, musicalidade e ética no progresso. Você encontra cronogramas claros,
              professores especializados e comunicação transparente com a equipe.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Sobre
