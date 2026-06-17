// exercício 6: componente com prop e aviso se prop não for enviada
import PropTypes from "prop-types";

function Saudacao({ nome }) {
  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <p>Bem-vindo ao nosso site de fofurices!</p>
    </div>
  );
}

Saudacao.propTypes = {
  nome: PropTypes.string.isRequired,
};

export default Saudacao;