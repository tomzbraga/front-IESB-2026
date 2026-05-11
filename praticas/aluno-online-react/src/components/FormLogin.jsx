import { useState } from "react";
import InputMatricula from "./InputMatricula";
import InputSenha from "./InputSenha";
import InputSubmit from "./InputSubmit"


function FormLogin ({navegaPara}) {

    const [matricula, setMatricula]         = useState();
    const [matriculaErro, setMatriculaErro] = useState();
    const [senha, setSenha]                 = useState();
    const [senhaErro, setSenhaErro]         = useState();
  
    const trataSubmit = (e) => { e.preventDefault();
  
        if (!matricula)
        {
          
          setMatriculaErro('Matricula é obrigatória');
        
        }
  
        if (!senha) 
        {
        
          setSenhaErro('Senha é obrigatória');
        
        }
  
        navegaPara(1);
  
      }

  return (

    <>
    
      <form onSubmit={trataSubmit}>
    
      <InputMatricula 
      
        matricula = {matricula}
        erro      = {matriculaErro}
        mudaValor = {(e) => setMatricula(e.targer.value)}
      
      />
    
      <InputSenha 
      
        senha     = {senha}
        erro      = {senhaErro}
        mudaValor = {(e) => setSenha(e.targer.value)}

      />
    
      <InputSubmit texto="Entrar"/>
    
    </form>
    
    </>

  )
}

export default FormLogin;