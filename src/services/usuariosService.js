const API_USUARIOS = "https://jsonplaceholder.typicode.com/users";

export async function buscarUsuariosRede() {
  const resposta = await fetch(API_USUARIOS);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar usuários.");
  }

  return resposta.json();
}
