import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function fazerLogin() {
    try {
      const resposta = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        alert(dados.erro);
        localStorage.removeItem("token");
        return;
      }

      localStorage.setItem("token", dados.token);
      navigate("/usuarios");
    } catch (erro) {
      console.log(erro);
      alert("Erro ao conectar com o servidor. Verifique se o backend está rodando.");
    }
  }

  return (
    <section className="pagina-login">
      <div className="pagina-login-inner">
        <h2>Login</h2>
        <p className="pagina-login-lead">
          Faça login para acessar sua conta.
        </p>

        <div className="form-login">
          <div className="form-group">
            <label htmlFor="login-email">E-mail</label>
            <input
              id="login-email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-senha">Senha</label>
            <input
              id="login-senha"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button type="button" className="btn" onClick={fazerLogin}>
            Entrar
          </button>
        </div>
      </div>
    </section>
  );
}
