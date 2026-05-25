import { useState } from "react";
import { useNavigate } from "react-router";
import InputMatricula from "./InputMatricula";
import InputSenha from "./InputSenha";
import InputSubmit from "./InputSubmit";

function FormLogin() {
  const [matricula, setMatricula] = useState("");
  const [matriculaErro, setMatriculaErro] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaErro, setSenhaErro] = useState("");
  const navigate = useNavigate();

  const trataSubmit = (e) => {
    e.preventDefault();
    let valido = true;

    if (!matricula) {
      setMatriculaErro("Matrícula é obrigatória");
      valido = false;
    } else {
      setMatriculaErro("");
    }

    if (!senha) {
      setSenhaErro("Senha é obrigatória");
      valido = false;
    } else if (senha.length < 6) {
      setSenhaErro("Senha deve ter no mínimo 6 caracteres");
      valido = false;
    } else {
      setSenhaErro("");
    }

    if (valido) {
      // Navigate to Dashboard
      navigate("/");
    }
  };

  return (
    <form onSubmit={trataSubmit}>
      <InputMatricula
        matricula={matricula}
        erro={matriculaErro}
        mudaValor={(e) => setMatricula(e.target.value)}
      />

      <InputSenha
        senha={senha}
        erro={senhaErro}
        mudaValor={(e) => setSenha(e.target.value)}
      />

      <InputSubmit texto="Entrar" />
    </form>
  );
}

export default FormLogin;
