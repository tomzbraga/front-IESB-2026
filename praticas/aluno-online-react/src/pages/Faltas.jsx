import Main from "../components/Main.jsx"
import Sidebar from "../components/Sidebar.jsx"

function Faltas() { 
    return (
        <section className="flex h-screen gap-4">
            <Sidebar />
            <Main 

                titulo="Minhas Faltas"
                subtitulo="Historico suas faltas por semestre"

            >

                <Tabela titulo="2026.1" />
                <Tabela titulo="2025.2" />
                <Tabela titulo="2025.1" />

            </Main>
        </section>
    );
 }

 export default Faltas;