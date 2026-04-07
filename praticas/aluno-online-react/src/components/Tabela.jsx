function Tabela(props) {
    return (
        
        <>
        
            {props.titulo && <h3>{props.titulo}</h3>}
            
            <table>
            
                <thead>
                    <th>
                    
                        {props.colunas.map((Item, index) =>
                        (   
                        
                            <td key={index}>{Item}</td>
                
                        ))}
                    
                    </th>
                
                </thead>
    
                <tbody>
    
                    {props.dados.map((linha, index) => 
                    (

                        <tr key={index}>
                        
                            {linha.map((coluna, j) => 
                            (

                                <td key={j}>{coluna}</td>

                            )
                            
                            )}

                        </tr>

                    ))}
    
                </tbody>
            </table>
        </>
    );

    
}

    export default Tabela;