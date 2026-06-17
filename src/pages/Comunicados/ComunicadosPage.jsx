import { useEffect, useState } from "react";
import { buscarComunicados } from "../../services/comunicadosService";
import "../Professores/Professores.css";
import "./Comunicados.css";

export default function ComunicadosPage() {
  const [comunicados, setComunicados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarComunicados();
        setComunicados(dados);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  return (
    <section className="page-lista comunicados-page">
      <div className="page-lista-inner">
        <header className="page-lista-header">
          <span className="page-eyebrow">Área do aluno</span>
          <h1>Comunicados</h1>
          <p>
            Avisos e novidades da Grip para quem está matriculado. Dados
            consumidos de API externa (posts).
          </p>
        </header>

        {loading ? <p className="comunicados-status">Carregando...</p> : null}
        {erro ? <p className="comunicados-erro">{erro}</p> : null}

        {!loading && !erro && comunicados.length === 0 ? (
          <p className="comunicados-status">Nenhum comunicado disponível no momento.</p>
        ) : null}

        {!loading && !erro && comunicados.length > 0 ? (
          <div className="comunicados-grid">
            {comunicados.map((item) => (
              <article key={item.id} className="comunicado-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
