import { useState } from "react";
import { cadastrarUsuario } from "../../services/contatoService";

function FormContato() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: ""
    });

    const [enviado, setEnviado] = useState(false);
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    
}

export default FormContato