import {
  validarNomeCompletoOuErro,
  validarEmailOuErro,
  validarAssuntoOuErro,
  validarMensagemContatoOuErro,
} from "../utils/validacaoFormulario";

async function enviarMensagemContato(dados) {
  validar(dados);

  await new Promise((res) => setTimeout(res, 600));

  return { sucesso: true };
}

function validar(dados) {
  const erros = [
    validarNomeCompletoOuErro(dados.nome),
    validarEmailOuErro(dados.email),
    validarAssuntoOuErro(dados.assunto),
    validarMensagemContatoOuErro(dados.mensagem),
  ].filter(Boolean);

  if (erros.length > 0) throw new Error(erros.join(", "));
}

export { enviarMensagemContato };
