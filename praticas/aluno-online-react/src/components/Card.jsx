
function Card() {

    return (
    
    <>
        
        <h2 className="font-bold m-4">Bem-vindo ao portal do aluno</h2>

        <section className="grid flex-row">

            <article className="m-4 border border-gray-300 rounded-lg shadow-md">
                <h3 className="border-b border-gray-200 bg-gray-200 p-2 font-bold">Mural de avisos</h3>
                <ul className="justify-center p-2 m-2">
                    <li>Inscrição para o projeto de extensão</li>
                    <li>Eleição para representante de turma</li>
                    <li></li>
                </ul>
            </article>
        
            <article className="m-4 border border-gray-300 rounded-lg shadow-md">
                <h3 className="border-b border-gray-200 bg-gray-200 p-2 font-bold">Calendário acadêmico</h3>
                <ul className="justify-center p-2 m-2">
                    <li>23/02 - Início do período letivo 2026-1</li>
                    <li>25/04 - Prazo final para aplicação da P1</li>
                    <li>23/06 - Prazo final para aplicação da P2</li>
                    <li>04/07 - Fim do período letivo</li>
                </ul>
            </article>
        
            <article className="m-4 border border-gray-300 rounded-lg shadow-md">
                <h3 className="border-b border-gray-200 bg-gray-200 p-2 font-bold">Minhas Disciplinas</h3>
                <ul className="justify-center p-2 m-2">
                    <li>BI e Data Warehousing</li>
                    <li>Construção de front-end</li>
                </ul>
            </article>
        
        </section>
    
    </>


    );

}

export default Card;