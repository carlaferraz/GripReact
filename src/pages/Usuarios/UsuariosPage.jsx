import { useEffect, useState } from "react";
import "./Usuarios.css";

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarUsuarios() {
      try {
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch (erro) {
        console.log("Erro ao buscar usuários", erro);
      } finally {
        setLoading(false);
      }
    }

    buscarUsuarios();
  }, []);

  return (
    <section className="pagina-usuarios">
      <div className="pagina-usuarios-inner">
        <h2>Usuários (API)</h2>
        <p className="pagina-usuarios-lead">
          Lista consumida de jsonplaceholder — rota protegida no front com JWT.
        </p>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div className="usuarios-lista">
            {usuarios.map((user) => (
              <article key={user.id} className="usuario-card">
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Cidade: {user.address.city}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
