import { useRef, useState } from "react";
import { useImageUpload } from "../../hooks/useImageUpload";
import "./ImageUpload.css";

export default function ImageUpload({ onSuccess }) {
  const { preview, error, uploading, uploadedUrl, handleFile, upload, clear } =
    useImageUpload();

  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  function handleInputChange(e) {
    handleFile(e.target.files[0]);
    e.target.value = "";
  }

  function handleDragOver(e) {
    e.preventDefault();
    setDragging(true);
  }

  function handleDragLeave() {
    setDragging(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  }

  async function handleUpload() {
    const url = await upload();
    if (url && onSuccess) {
      onSuccess(url);
    }
  }

  return (
    <div className="upload-wrapper">
      <h2 className="upload-title">Upload de imagem</h2>

      <div
        className={`drop-zone ${dragging ? "drop-zone--active" : ""} ${preview ? "drop-zone--filled" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !preview && inputRef.current?.click()}
        role="button"
        aria-label="Clique ou arraste uma imagem"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
      >
        {preview ? (
          <img src={preview} alt="Preview" className="drop-zone__preview" />
        ) : (
          <div className="drop-zone__placeholder">
            <p className="drop-zone__text">
              Arraste uma imagem ou <strong>clique para selecionar</strong>
            </p>
            <p className="drop-zone__hint">JPG, PNG, GIF, WebP · máx. 5MB</p>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/gif,image/webp"
          className="drop-zone__input"
          onChange={handleInputChange}
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>

      {error ? (
        <p className="upload-error" role="alert">
          {error}
        </p>
      ) : null}

      {uploadedUrl ? (
        <p className="upload-success" role="status">
          Upload concluído:{" "}
          <a href={uploadedUrl} target="_blank" rel="noreferrer">
            {uploadedUrl}
          </a>
        </p>
      ) : null}

      {preview && !uploadedUrl ? (
        <div className="upload-actions">
          <button
            type="button"
            className="btn upload-btn-primary"
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? "Enviando…" : "Enviar imagem"}
          </button>
          <button type="button" className="btn upload-btn-secondary" onClick={clear}>
            Remover
          </button>
        </div>
      ) : null}

      {uploadedUrl ? (
        <button type="button" className="btn upload-btn-secondary" onClick={clear}>
          Enviar outra imagem
        </button>
      ) : null}
    </div>
  );
}
