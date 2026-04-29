import Card from "../Professores/Card/Card";
import CTA from "../../components/CTA/CTA"

function Planos() {
  return (
    <section className="page-lista planos-page">
      <div className="page-lista-inner">
        <header className="page-lista-header">
          <span className="page-eyebrow">Assinaturas</span>
          <h1>Planos</h1>
          <p>
            Escolha o ritmo certo para a sua rotina. Todos os planos incluem
            acesso ao ambiente Grip e trilhas por nível, do iniciante ao
            avançado.
          </p>
        </header>

        <div className="page-lista-grid">
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
      </div>

      <CTA />
      
    </section>
  );
}

export default Planos;
