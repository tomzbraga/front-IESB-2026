import Topbar from "./Topbar";
import Card from "./Card";

function Main(props) {

    return ( 
    
    <main className="flex flex-col w-full">
        
        <Topbar titulo={props.titulo}/>
           
           <h2>{props.subtitulo}</h2>
        
        <section>
            
            {props.children}
        
        </section>


    </main>
        
);
}

export default Main;