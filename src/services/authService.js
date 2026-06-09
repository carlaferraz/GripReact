const API = "http://localhost:3001";

export function estaLogado() {
  const token = localStorage.getItem("token");
  return Boolean(token && token !== "undefined");
}

export async function fazerLogin(email, senha) {
  const resposta = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  const dados = await resposta.json().catch(() => ({}));

  if (!resposta.ok) {
    localStorage.removeItem("token");
    throw new Error(dados.erro || "Erro no login.");
  }

  localStorage.setItem("token", dados.token);
  return dados;
}

export function fazerLogout() {
  localStorage.removeItem("token");
}

export function tratarErroAutenticacao(resposta, dados, mensagemPadrao) {
  if (resposta.status === 401) {
    fazerLogout();
    throw new Error("Sessão expirada. Faça login novamente.");
  }

  throw new Error(dados.erro || mensagemPadrao);
}
