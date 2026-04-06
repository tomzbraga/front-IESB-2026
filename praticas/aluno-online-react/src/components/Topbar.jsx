import avatar from '../assets/avatar.svg';

function Topbar() {

    return (
    
    <header className='flex justify-between m-4 mt-8 items-center'>
        
        <h1 className='font-bold'>Olá, Aluno!</h1>
        <img src={avatar} alt="imagem do avatar" />
        
    </header>

    );
}

export default Topbar;