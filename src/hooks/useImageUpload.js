import { useState, useCallback } from "react";
import { tratarErroAutenticacao } from "../services/authService";

const MAX_SIZE_MB = 5;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export function useImageUpload() {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState(null);

  const handleFile = useCallback((selectedFile) => {
    setError(null);
    setUploadedUrl(null);

    if (!selectedFile) return;

    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError("Formato inválido. Use JPG, PNG, GIF ou WebP.");
      return;
    }

    if (selectedFile.size > MAX_SIZE_BYTES) {
      setError(`Arquivo muito grande. Máximo: ${MAX_SIZE_MB}MB.`);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    setFile(selectedFile);
  }, []);

  const upload = useCallback(
    async (endpoint) => {
      if (!file) return;

      const formData = new FormData();
      formData.append("imagem", file);

      setUploading(true);
      setError(null);

      try {
        const token = localStorage.getItem("token");

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: formData,
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          tratarErroAutenticacao(response, data, "Erro ao enviar imagem.");
        }

        const data = await response.json();
        setUploadedUrl(data.url);
        return data.url;
      } catch (err) {
        setError(err.message);
      } finally {
        setUploading(false);
      }
    },
    [file]
  );

  const clear = useCallback(() => {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setFile(null);
    setError(null);
    setUploadedUrl(null);
    setUploading(false);
  }, [preview]);

  return {
    preview,
    file,
    error,
    uploading,
    uploadedUrl,
    handleFile,
    upload,
    clear,
  };
}
