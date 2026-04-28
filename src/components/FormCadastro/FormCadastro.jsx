import { useState } from "react";
import { cadastrarUsuario } from "../../services/cadastroService";
import "./FormCadastro.css";

function FormCadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: "",
    genero: "",
    aceiteTermos: false,
  });

  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);


  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setCarregando(true);
    try {
      await cadastrarUsuario(formData);
      setEnviado(true);
    } catch (err) {
      setErro(err.message);
    } finally {
      setCarregando(false);
    }

  }

  function handleReset() {
    setFormData({
      nome: "",
      email: "",
      idade: "",
      genero: "",
      aceiteTermos: false,
    });
    setEnviado(false);

    setErro("");

  }

  if (enviado) {
    return (
      <section className="sucesso-cadastro">
        <div className="sucesso-cadastro-inner">
          <h2>Cadastro realizado!</h2>
          <p>
            Olá, {formData.nome}! Seu e-mail {formData.email} foi registrado.
          </p>
          <button type="button" className="btn" onClick={handleReset}>
            Novo cadastro
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="pagina-cadastro">
      <div className="pagina-cadastro-inner">
        <h2>Formulário de cadastro</h2>
        <p className="pagina-cadastro-lead">
          Crie sua conta na Grip para acompanhar aulas, materiais e turmas.
        </p>

        {erro ? <p className="form-cadastro-erro">{erro}</p> : null}

        <form className="form-cadastro" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu nome completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="idade">Idade</label>
            <input
              type="number"
              id="idade"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              min="1"
              max="120"
            />
          </div>

          <div className="form-group">
            <label htmlFor="genero">Gênero</label>
            <select
              id="genero"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
              <option value="nao-informar">Prefiro não informar</option>
            </select>
          </div>

          <div className="form-cadastro-checkbox">
            <input
              type="checkbox"
              id="aceiteTermos"
              name="aceiteTermos"
              checked={formData.aceiteTermos}
              onChange={handleChange}
            />
            <label htmlFor="aceiteTermos">Aceito os termos de uso</label>
          </div>

          <button type="submit" className="btn" disabled={carregando}>
            {carregando ? "Salvando..." : "Cadastrar"}
          </button>
        </form>

        <div className="form-cadastro-preview">
          <h3>Estado do formulário</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    </section>
  );
}

export default FormCadastro;