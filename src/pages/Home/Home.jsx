import { useState } from 'react'
import Hero from './hero/Hero'
import CTA from '../../components/CTA/CTA'
import Card from '../Professores/Card/Card'
import './Home.css'

const professores = [
  { name: "Lisiane", cargo: "Ballet clássico", desc: "Especialista em trabalho de pontas e técnica feminina clássica", nota: "5.0", bg: "linear-gradient(160deg, #e8e0ff 0%, #d4c8ff 100%)" },
  { name: "Helena Duarte", cargo: "Diretora artística · Ballet clássico", desc: "Formação em escolas europeias e mais de 20 anos em palco e sala de aula.", nota: "4.9", bg: "linear-gradient(160deg, #e8e0ff 0%, #d4c8ff 100%)" },
  { name: "Rafael Campos", cargo: "Variações e repertório", desc: "Especialista em coreografias clássicas e preparação para apresentações.", nota: "4.8", bg: "linear-gradient(160deg, #e8e0ff 0%, #d4c8ff 100%)"},
  { name: "Marina Klaus", cargo: "Iniciantes e infantil", desc: "Didática gentil para quem está começando ou retomando os estudos.", nota: "5.0",bg: "linear-gradient(160deg, #e8e0ff 0%, #d4c8ff 100%)" },
  { name: "Vicente Alvarez", cargo: "Jazz e complementar", desc: "Aulas complementares para flexibilidade, força e coordenação.", nota: "4.7", bg: "linear-gradient(160deg, #e8e0ff 0%, #d4c8ff 100%)"},
  { name: "Beatriz Fontes", cargo: "Pontas e técnica feminina", desc: "Especialista em trabalho de pontas e técnica feminina clássica.", nota: "4.9", bg: "linear-gradient(160deg, #e8e0ff 0%, #d4c8ff 100%)" },
  { name: "Lucas Menezes", cargo: "Pas de deux e masculino", desc: "Formação em companhias nacionais com vasta experiência em pas de deux.", nota: "4.8", bg: "linear-gradient(160deg, #e8e0ff 0%, #d4c8ff 100%)"},
]

const CARD_WIDTH = 260

function Home() {
  const [indice, setIndice] = useState(0)
  const max = professores.length - 3

  function anterior() { setIndice(i => Math.max(i - 1, 0)) }
  function proximo() { setIndice(i => Math.min(i + 1, max)) }

  return (
    <>
      <Hero />

      <section className="philosophy">
        <div className="home-inner">
          <div>
            <span className="page-eyebrow">Nossa Filosofia</span>
            <h2>Onde a disciplina<br />encontra<br /><em>a graça artística</em></h2>
            <p>
              Na Escola Grip Ballet, acreditamos que o ballet é mais do que
              apenas técnica — é uma jornada de autodescoberta, disciplina e
              expressão criativa. Nossa abordagem combina tradição com
              metodologias modernas, permitindo que cada aluno desenvolva o
              seu pleno potencial em um ambiente acolhedor.
            </p>
          </div>
          <div>
            <article className="pilar">
              <span>✦</span>
              <div>
                <h3>Expressão Artística</h3>
                <p>Descubra sua voz única através da linguagem atemporal do movimento clássico.</p>
              </div>
            </article>
            <article className="pilar">
              <span>◆</span>
              <div>
                <h3>Excelência Técnica</h3>
                <p>Construa uma base sólida em técnica clássica com acompanhamento individual.</p>
              </div>
            </article>
            <article className="pilar">
              <span>❀</span>
              <div>
                <h3>Comunidade Acolhedora</h3>
                <p>Junte-se a uma comunidade global de bailarinos compartilhando sua paixão.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-teachers">
        <div className="sec-titulo">
          <span className="page-eyebrow">Instrutores de Classe Mundial</span>
          <h2>Conheça Seus <em>Professores</em></h2>
          <p>Aprenda com profissionais renomados que já se apresentaram nos palcos mais prestigiados do mundo.</p>
        </div>
        <div className="carousel-wrapper">
          <button className="carousel-btn" onClick={anterior} disabled={indice === 0}>‹</button>
          <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${indice * CARD_WIDTH}px)` }}>
              {professores.map(p => (
                <div className="card-home" key={p.name}>
                  <div style={{ backgroundImage: p.bg }} />
                  <div>
                    <h3>{p.name}</h3>
                    <span>{p.cargo}</span>
                    <p>{p.desc}</p>
                    <span>★ {p.nota}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn" onClick={proximo} disabled={indice === max}>›</button>
        </div>
      </section>

      <section className="pricing" id="planos">
        <div className="sec-titulo">
          <span className="page-eyebrow">Nossos Planos</span>
          <h2>Escolha sua Jornada <em>de Ballet</em></h2>
          <p>Opções flexíveis para apoiar a caminhada de todos os tipos de bailarinos até a excelência.</p>
        </div>
        <div className="home-inner grade-planos">
          <Card
            name="Iniciante"
            nota="R$ 29"
            subtitle="por mês"
            description="Ideal para quem está começando. Acesso à biblioteca base e uma aula ao vivo por semana."
            tags={["1 aula/semana", "Biblioteca base", "Suporte por e-mail"]}
            stats={[{ value: "1", label: "aula/sem" }]}
          />
          <Card
            name="Intermediário"
            nota="R$ 79"
            subtitle="por mês"
            description="Para quem quer progredir com mais frequência. Biblioteca completa e feedback da turma."
            tags={["2 aulas/semana", "Biblioteca completa", "Fórum da turma"]}
            stats={[{ value: "2", label: "aulas/sem" }]}
          />
          <Card
            name="Profissional"
            nota="R$ 149"
            subtitle="por mês"
            description="Acesso total para quem leva o ballet a sério. Aulas ilimitadas e orientação com professor."
            tags={["Aulas ilimitadas", "Variações", "Orientação direta"]}
            stats={[{ value: "∞", label: "aulas/sem" }]}
          />
        </div>
      </section>

      <section className="testimonials">
        <div className="sec-titulo">
          <span className="page-eyebrow">Histórias de Estudantes</span>
          <h2>Transformando vidas através do <em>balé</em></h2>
        </div>
        <div className="home-inner grade-planos">
          <Card
            name="Carla Ferraz"
            nota="5.0"
            subtitle="Aluna há 2 anos"
            description='"O Grip Ballet transformou completamente minha técnica. É possível sentir o cuidado de cada professor em cada detalhe das aulas."'
            tags={["Ballet Clássico", "Nível Avançado"]}
            stats={[{ value: "2", label: "anos" }]}
          />
          <Card
            name="Lucas Dal Pra"
            nota="5.0"
            subtitle="Aluno avançado"
            description='"Como retomei aos estudos, encontrei aqui a estrutura e o foco que precisava. Hoje danço com a confiança que sempre busquei."'
            tags={["Técnica Russa", "Intermediário"]}
            stats={[{ value: "8", label: "meses" }]}
          />
          <Card
            name="Rafa Kelly"
            nota="5.0"
            subtitle="Bailarina profissional"
            description='"As professoras de técnica russa elevaram meu repertório a um novo patamar. Recomendo de olhos fechados a quem leva o ballet a sério."'
            tags={["Repertório", "Nível Avançado"]}
            stats={[{ value: "3", label: "anos" }]}
          />
        </div>
      </section>

      <CTA />
    </>
  )
}

export default Home
