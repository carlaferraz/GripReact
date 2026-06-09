const API_POSTS = "https://jsonplaceholder.typicode.com/posts";

export async function buscarComunicados() {
  const resposta = await fetch(API_POSTS);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar comunicados.");
  }

  const dados = await resposta.json();
  return dados.slice(0, 12);
}
