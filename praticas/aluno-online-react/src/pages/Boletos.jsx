import Main from "../components/Main.jsx"
import Sidebar from "../components/Sidebar.jsx"

function Boletos(props) {

    

    return (

        <>
        
        <Sidebar />

        <Main 
        
            titulo="Meus boletos"
            subtitulo="Histórico"   
        
        >
            
            <Tabela />
            
        </Main>

        </>
    );
}

export default Boletos;