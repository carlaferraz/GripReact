import { tratarErroAutenticacao } from "./authService";

const API = "http://localhost:3001";

export async function buscarPerfil() {
  const token = localStorage.getItem("token");

  const resposta = await fetch(`${API}/perfil`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  const dados = await resposta.json().catch(() => ({}));

  if (!resposta.ok) {
    tratarErroAutenticacao(resposta, dados, "Erro ao buscar perfil.");
  }

  return dados;
}
