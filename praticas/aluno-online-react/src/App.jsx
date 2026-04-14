import "./App.css";
import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";
import Login from "./pages/Login"
import { useState } from "react";

function App() {
  
  const [pagina, setPagina] = useState(0);

  //pratica4

  switch (pagina) 
  {

    case 1:  return <Dashboard     navegaPara={setPagina}/>;
    case 2:  return <Faltas        navegaPara={setPagina}/>;
    case 3:  return <Notas         navegaPara={setPagina}/>;
    case 4:  return <Requerimentos navegaPara={setPagina}/>;
    case 5:  return <Boletos       navegaPara={setPagina}/>;
    default: return <Login         navegaPara={setPagina}/>;

  }

}

export default App;
