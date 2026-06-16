import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext"; // importa o hook
import InputMatricula from "./InputMatricula";
import InputSenha from "./InputSenha";
import InputSubmit from "./InputSubmit";

function FormLogin() {
  const [matricula, setMatricula] = useState("");
  const [matriculaErro, setMatriculaErro] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaErro, setSenhaErro] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

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
      login({ matricula });
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

      {/* passa a função como prop */}
      <InputSubmit texto="Entrar" onClick={trataSubmit} />
    </form>
  );
}

export default FormLogin;
