import { useEffect, useState } from "react";
import { buscarUsuariosRede } from "../../services/usuariosService";
import "../Professores/Professores.css";
import "./Usuarios.css";

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarUsuariosRede();
        setUsuarios(dados);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  return (
    <section className="page-lista usuarios-page">
      <div className="page-lista-inner">
        <header className="page-lista-header">
          <span className="page-eyebrow">Área do aluno</span>
          <h1>Rede Grip</h1>
          <p>
            Contatos da comunidade Grip em outras unidades. Lista vinda de API
            externa (users).
          </p>
        </header>

        {loading ? <p className="usuarios-status">Carregando...</p> : null}
        {erro ? <p className="usuarios-erro">{erro}</p> : null}

        {!loading && !erro && usuarios.length === 0 ? (
          <p className="usuarios-status">Nenhum usuário encontrado.</p>
        ) : null}

        {!loading && !erro && usuarios.length > 0 ? (
          <div className="usuarios-grid">
            {usuarios.map((user) => (
              <article key={user.id} className="usuario-card">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.address.city}</p>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
