import logo from './assets/learn.svg'
import avatar from './assets/avatar.svg'

function App () {

  return <div className='flex flex-col md:flex-row'>
    <aside className='hidden md:block bg-gray-300'>
      <header className='flex flex-row max-w-screen'>
        <img src={logo} alt="" />
        <h1>Aluno Online</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </nav>
    </aside>
    <main>
      <header>
        <h1>Olá, Aluno!</h1>
        <img src={avatar} alt="Imagem do avatar" />
      </header>
      <h2>Bem-vindo ao portal do Aluno</h2>
      <section>
        <article>
          <h3>Mural de avisos</h3>
          <ul>
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Calendário acadêmico</h3>
          <ul>
            <li>23/02 - Início do período letivo 2026-1</li>
            <li>25/04 - Prazo final para aplicação da P1</li>
            <li>23/06 - Prazo final para aplicação da P2</li>
            <li>04/07 - Fim do período letivo</li>
          </ul>
        </article>
        <article>
          <h3>Minhas disciplinas</h3>
          <ul>
            <li>BI e Data Warehousing</li>
            <li>Construção de front-end</li>
          </ul>
        </article>
      </section>
    </main>
  </div>
}

export default App;