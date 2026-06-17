import { useState, useEffect } from "react";
import Botao from '../../components/Botao/Botao';
import Saudacao from '../../components/Saudacao/Saudacao';

function Blog() {
  // exercício 8: useEffect com array vazio
  useEffect(() => {
    console.log("O componente foi montado na tela!");
  }, []);

  // exercício 5: alternar tema
  const [tema, setTema] = useState(false);
  function alternarTema() {
    const novoTema = !tema;
    setTema(novoTema);
    console.log(`O tema atual é: ${novoTema ? "Claro" : "Escuro"}`);
  }

  // exercício 7: estaLogado
  const [estaLogado, setEstaLogado] = useState(false);

  // exercício 9: mostrar/esconder conteúdo
  const [visivel, setVisivel] = useState(false);

  // exercício 10: mostrarAjuda
  const [mostrarAjuda, setMostrarAjuda] = useState(false);

  return (
    <section style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>

      {/* exercício 2 e 6: componente reutilizado e Saudacao com prop */}
      <Saudacao nome="Carla" />
      <Botao />

      {/* exercício 5: alternar tema */}
      <button onClick={alternarTema}>Alternar Tema</button>

      {/* exercício 7: estaLogado */}
      <div>
        {estaLogado ? <p>Bem-vindo(a), Usuário(a)!</p> : <p>Por favor, faça login</p>}
        <button onClick={() => setEstaLogado(prev => !prev)}>
          {estaLogado ? "Deslogar" : "Logar"}
        </button>
      </div>

      {/* exercício 9: mostrar/esconder conteúdo */}
      <div>
        <button onClick={() => setVisivel(prev => !prev)}>
          {visivel ? "Esconder Conteúdo" : "Mostrar Conteúdo"}
        </button>
        {visivel && <p>Aqui está o conteúdo!</p>}
      </div>

      {/* exercício 10: mostrarAjuda */}
      <div>
        <button onClick={() => setMostrarAjuda(prev => !prev)}>Ajuda</button>
        {mostrarAjuda && <p>Dica: preencha todos os campos corretamente!</p>}
      </div>

    </section>
  );
}

export default Blog;
