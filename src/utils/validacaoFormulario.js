/**
 * Regex e mensagens centralizadas — usadas pelos formulários via serviços.
 */

/** E-mail: local válido @ domínio com TLD (sem espaços no local) */
export const RE_EMAIL =
  /^[a-z0-9]+(?:[._%+][a-z0-9]+)*@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z]{2,})+$/i;

/**
 * Nome completo: pelo menos duas sequências só de letras (acentos ok),
 * separadas por espaço ou hifen/apóstrofo entre sílabas; também aceita particles "da Silva".
 */
export const RE_NOME_COMPLETO =
  /^[\p{L}]+(?:[\s'-][\p{L}]+)+$/u;

/** Assunto: após trim, mínimo 4 caracteres (qualquer conteúdo) */
export const RE_TEXTO_CURTO_MIN4 = /^[\s\S]{4,}$/;

/** Mensagem: após trim, mínimo 15 caracteres */
export const RE_TEXTO_LONGO_MIN15 = /^[\s\S]{15,}$/;

/** Idade 1–120 como string numérica inteira sem zeros à esquerda inválidos (aceita "045" como erro) */
export const RE_IDADE = /^(?:[1-9]|[1-9][0-9]|1[01][0-9]|120)$/;

/** Gênero igual às options do cadastro */
export const RE_GENERO =
  /^(?:masculino|feminino|outro|nao-informar)$/;

export function validarEmailOuErro(email) {
  const s = (email ?? "").trim();
  if (!s) return "E-mail é obrigatório";
  if (!RE_EMAIL.test(s)) return "E-mail inválido";
  return null;
}

export function validarNomeCompletoOuErro(nome) {
  const s = (nome ?? "").trim();
  if (!s) return "Nome é obrigatório";
  if (s.length < 4 || s.length > 120) return "Nome deve ter entre 4 e 120 caracteres";
  if (!RE_NOME_COMPLETO.test(s)) {
    return "Informe nome e sobrenome (apenas letras, espaço ou hífen entre nomes)";
  }
  return null;
}

export function validarAssuntoOuErro(assunto) {
  const s = (assunto ?? "").trim();
  if (!s) return "Assunto é obrigatório";
  if (!RE_TEXTO_CURTO_MIN4.test(s))
    return "Assunto deve ter pelo menos 4 caracteres";
  return null;
}

export function validarMensagemContatoOuErro(mensagem) {
  const s = (mensagem ?? "").trim();
  if (!s) return "Mensagem é obrigatória";
  if (!RE_TEXTO_LONGO_MIN15.test(s))
    return "Mensagem deve ter pelo menos 15 caracteres";
  return null;
}

export function validarGeneroOuErro(genero) {
  const s = String(genero ?? "").trim();
  if (!s) return "Selecione o gênero";
  if (!RE_GENERO.test(s)) return "Gênero inválido";
  return null;
}

export function validarIdadeObrigatoriaOuErro(idade) {
  const raw =
    typeof idade === "number"
      ? String(Math.trunc(idade))
      : (idade ?? "").toString().trim();
  if (!raw) return "Idade é obrigatória";
  if (!RE_IDADE.test(raw)) return "Idade deve ser um número inteiro entre 1 e 120";
  const n = Number.parseInt(raw, 10);
  if (Number.isNaN(n) || n < 1 || n > 120)
    return "Idade fora do intervalo válido";
  return null;
}

export function validarAceiteTermosOuErro(aceite) {
  if (!aceite) return "Você deve aceitar os termos de uso";
  return null;
}
