import { useEffect, useState } from "react";
import { buscarAulas } from "../../services/aulasService";
import "../Professores/Professores.css";
import "./Aulas.css";

export default function AulasPage() {
  const [aulas, setAulas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarAulas();
        setAulas(dados);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  return (
    <section className="page-lista aulas-page">
      <div className="page-lista-inner">
        <header className="page-lista-header">
          <span className="page-eyebrow">Área do aluno</span>
          <h1>Aulas</h1>
          <p>
            Trilhas e módulos disponíveis na Grip. Dados consumidos de API
            externa (albums).
          </p>
        </header>

        {loading ? <p className="aulas-status">Carregando...</p> : null}
        {erro ? <p className="aulas-erro">{erro}</p> : null}

        {!loading && !erro && aulas.length === 0 ? (
          <p className="aulas-status">Nenhuma aula disponível no momento.</p>
        ) : null}

        {!loading && !erro && aulas.length > 0 ? (
          <div className="aulas-grid">
            {aulas.map((aula) => (
              <article key={aula.id} className="aula-card">
                <h3>{aula.title}</h3>
                <p>Módulo #{aula.id}</p>
                <p>Professor ref.: {aula.userId}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
