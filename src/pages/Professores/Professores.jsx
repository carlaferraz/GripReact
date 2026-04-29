import "./Professores.css";
import Card from "./Card/Card";
import CTA from "../../components/CTA/CTA"

function Professores() {
  return (
    <section className="page-lista professores-page">
      <div className="page-lista-inner">
        <header className="page-lista-header">
          <span className="page-eyebrow">Equipe Grip</span>
          <h1>Professores</h1>
          <p>
            Conheça quem conduz as aulas da Grip: mestres comprometidos com
            técnica, segurança e a cultura do ballet clássico.
          </p>
        </header>

        <div className="page-lista-grid">
          <Card
            name="Lisiane"
            subtitle="Ballet clássico"
            nota="5.0"
            description="Formação em companhias nacionais com vasta experiência em pas de deux e técnica masculina. Trabalha força, saltos e parceria em cena."
            tags={["Ballet Clássico", "Níveis Avançados", "Repertório"]}
            stats={[{ value: "15", label: "anos" }, { value: "50+", label: "alunos" }]}
          />
          <Card
            name="Helena Duarte"
            subtitle="Ballet clássico"
            nota="4.9"
            description="Formação em escolas europeias e mais de 20 anos em palco e sala de aula. Coordena o repertório e a progressão técnica dos níveis avançados."
            tags={["Ballet Clássico", "Níveis Avançados", "Repertório"]}
            stats={[{ value: "20+", label: "anos" }, { value: "30+", label: "alunos" }]}
          />
          <Card
            name="Rafael Campos"
            subtitle="Variações e repertório"
            nota="4.8"
            description="Especialista em coreografias clássicas e preparação para apresentações. Foco em alinhamento, musicalidade e expressão cênica."
            tags={["Variações", "Coreografia", "Cênica"]}
            stats={[{ value: "12", label: "anos" }, { value: "40+", label: "alunos" }]}
          />
          <Card
            name="Marina Klaus"
            subtitle="Iniciantes e infantil"
            nota="5.0"
            description="Didática gentil para quem está começando ou retomando os estudos. Trabalho com consciência corporal e bases seguras antes de saltos e pontas."
            tags={["Iniciantes", "Infantil", "Consciência Corporal"]}
            stats={[{ value: "8", label: "anos" }, { value: "60+", label: "alunos" }]}
          />
          <Card
            name="Vicente Alvarez"
            subtitle="Jazz e complementar"
            nota="4.7"
            description="Aulas complementares para flexibilidade, força e coordenação que apoiam a evolução no ballet sem perder o prazer pelo movimento."
            tags={["Jazz", "Flexibilidade", "Força"]}
            stats={[{ value: "10", label: "anos" }, { value: "35+", label: "alunos" }]}
          />
          <Card
            name="Beatriz Fontes"
            subtitle="Pontas e técnica feminina"
            nota="4.9"
            description="Especialista em trabalho de pontas e técnica feminina clássica. Acompanha alunas do intermediário ao avançado com foco em segurança e precisão."
            tags={["Pontas", "Técnica Feminina", "Intermediário"]}
            stats={[{ value: "14", label: "anos" }, { value: "50+", label: "alunos" }]}
          />
          <Card
            name="Lucas Menezes"
            subtitle="Pas de deux e masculino"
            nota="4.8"
            description="Formação em companhias nacionais com vasta experiência em pas de deux e técnica masculina. Trabalha força, saltos e parceria em cena."
            tags={["Pas de deux", "Técnica Masculina", "Saltos"]}
            stats={[{ value: "9", label: "anos" }, { value: "25+", label: "alunos" }]}
          />
        </div>
      </div>

      <CTA />
      
    </section>
  );
}

export default Professores;
