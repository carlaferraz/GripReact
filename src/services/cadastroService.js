import {
  validarNomeCompletoOuErro,
  validarEmailOuErro,
  validarIdadeObrigatoriaOuErro,
  validarGeneroOuErro,
  validarAceiteTermosOuErro,
} from "../utils/validacaoFormulario";

async function cadastrarUsuario(dados) {
  validarDados(dados);

  await new Promise((res) => setTimeout(res, 800));

  return {
    sucesso: true,
    id: Math.random().toString(36).slice(2, 9),
    mensagem: `Usuário ${dados.nome} cadastrado com sucesso!`,
  };
}

function validarDados(dados) {
  const erros = [
    validarNomeCompletoOuErro(dados.nome),
    validarEmailOuErro(dados.email),
    validarIdadeObrigatoriaOuErro(dados.idade),
    validarGeneroOuErro(dados.genero),
    validarAceiteTermosOuErro(dados.aceiteTermos),
  ].filter(Boolean);

  if (erros.length > 0) throw new Error(erros.join(", "));
}

export { cadastrarUsuario };
