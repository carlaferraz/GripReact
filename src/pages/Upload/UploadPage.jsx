import ImageUpload from "../../components/ImageUpload/ImageUpload";
import "./UploadPage.css";

export default function UploadPage() {
  function handleUploadSuccess(url) {
    console.log("Imagem disponível em:", url);
  }

  return (
    <main className="pagina-upload">
      <ImageUpload onSuccess={handleUploadSuccess} />
    </main>
  );
}
