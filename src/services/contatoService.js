import {
  validarNomeCompletoOuErro,
  validarEmailOuErro,
  validarAssuntoOuErro,
  validarMensagemContatoOuErro,
} from "../utils/validacaoFormulario";

async function enviarMensagemContato(dados) {
    validar(dados);                            
                   
    const resposta = await fetch("http://localhost:3001/contato", {             
      method: "POST",                                              
      headers: { "Content-Type": "application/json" },                          
      body: JSON.stringify(dados),                    
    });                           
                                                                                
    const resultado = await resposta.json().catch(() => ({}));
                                                                                
    if (!resposta.ok) {
      throw new Error(resultado.erro || "Erro ao enviar mensagem.");
    }                                                               

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
