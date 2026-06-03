import {
  validarNomeCompletoOuErro,
  validarEmailOuErro,
  validarIdadeObrigatoriaOuErro,
  validarGeneroOuErro,
  validarAceiteTermosOuErro,
  validarConfirmarSenhaOuErro,
} from "../utils/validacaoFormulario";

const CADASTRO_ENDPOINT = "http://localhost:3001/cadastros";

async function cadastrarUsuario(dados) {
  validarDados(dados);

  const resposta = await fetch(CADASTRO_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: dados.nome,
      email: dados.email,
      senha: dados.senha,
      idade: dados.idade,
      genero: dados.genero,
      aceiteTermos: dados.aceiteTermos,
    }),
  });

  const resultado = await resposta.json().catch(() => ({}));

  if (!resposta.ok) {
    throw new Error(resultado.erro || "Erro ao cadastrar.");
  }

  return {
    sucesso: true,
    id: resultado.id,
    mensagem: `Usuário ${dados.nome} cadastrado com sucesso!`,
  };
}

function validarDados(dados) {
  const erros = [
    validarNomeCompletoOuErro(dados.nome),
    validarEmailOuErro(dados.email),
    validarIdadeObrigatoriaOuErro(dados.idade),
    validarGeneroOuErro(dados.genero),
    validarConfirmarSenhaOuErro(dados.senha, dados.confirmarSenha),
    validarAceiteTermosOuErro(dados.aceiteTermos),
  ].filter(Boolean);

  if (erros.length > 0) throw new Error(erros.join(", "));
}

export { cadastrarUsuario };
