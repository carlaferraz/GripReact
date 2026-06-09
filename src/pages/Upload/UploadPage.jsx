import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { buscarPerfil } from "../../services/perfilService";
import "../Professores/Professores.css";
import "./UploadPage.css";

export default function UploadPage() {
  const [fotoAtual, setFotoAtual] = useState(null);
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const perfil = await buscarPerfil();
        setEmail(perfil.email);
        setFotoAtual(perfil.foto_url);
      } catch (err) {
        setErro(err.message);
        if (err.message.includes("Sessão expirada")) {
          navigate("/login");
        }
      } finally {
        setCarregando(false);
      }
    }

    carregarPerfil();
  }, [navigate]);

  function handleUploadSuccess(url) {
    setFotoAtual(url);
    setErro("");
  }

  return (
    <section className="page-lista pagina-upload">
      <div className="page-lista-inner pagina-upload-inner">
        <header className="page-lista-header">
          <span className="page-eyebrow">Área do aluno</span>
          <h1>Foto de perfil</h1>
          <p>
            Envie sua foto para a Grip. Só alunos logados podem usar esta área.
            {email ? ` Logado como ${email}.` : ""}
          </p>
        </header>

        {carregando ? <p className="upload-page-status">Carregando...</p> : null}
        {erro ? <p className="upload-page-erro">{erro}</p> : null}

        {!carregando && !erro && !fotoAtual ? (
          <p className="upload-page-status">Você ainda não enviou uma foto de perfil.</p>
        ) : null}

        {fotoAtual ? (
          <div className="upload-foto-atual">
            <p className="upload-foto-label">Sua foto atual:</p>
            <img src={fotoAtual} alt="Foto de perfil" />
          </div>
        ) : null}

        <ImageUpload onSuccess={handleUploadSuccess} />
      </div>
    </section>
  );
}
