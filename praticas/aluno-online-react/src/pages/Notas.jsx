import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Tabela from "../components/Tabela";
import Main from "../components/Main";

function Notas() {

    const colunas = 
    [

        "Disciplina",
        "P1",
        "P2",
        "P3",
        "Menção"

    ];
    
    const Notas = [
    [

        ["BI e Data Warehousing", "", "", "", "SR"],
        ["Construção de Frontend", "", "", "", "SR"],
        ["DevOps", "", "", "", "SR"],

    ],
    [

        ["Estrutura de Dados", "5.5", "5.5", "5.5", "MM"],
        ["Construção de Backend", "5.5", "5.5", "5.5", "MM"],
        ["Gerenciamento de Projetos", "5.5", "5.5", "5.5", "MM"],
    ],
    [

        ["Enegenharia de Software", "5.5", "5.5", "5.5", "MM"],
        ["Dispositivos Moveis", "5.5", "5.5", "5.5", "MM"],
        ["Estatistica", "5.5", "5.5", "5.5", "MM"],

    ]
    ];

    return (

        <>
        
        <Sidebar />
        
        <main>

            <Main 
            
                titulo="Minhas Notas" 
                subtitulo="Historico suas notas por semestre"
                
            >

                <Tabela 
                    
                    titulo="2026.1" 
                    colunas={colunas} 
                    dados={Notas[0]}
                
                />
                
                <Tabela 
                    
                    titulo="2025.2" 
                    colunas={colunas} 
                    dados={Notas[0]}
                
                />

                <Tabela 
                    
                    titulo="2025.1" 
                    colunas={colunas} 
                    dados={Notas[0]}
                
                />

            </Main>

        </main>

        </>

    );

}

    export default Notas;