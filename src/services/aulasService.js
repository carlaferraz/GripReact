const API_AULAS = "https://jsonplaceholder.typicode.com/albums";

export async function buscarAulas() {
  const resposta = await fetch(API_AULAS);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar aulas.");
  }

  const dados = await resposta.json();
  return dados.slice(0, 12);
}
