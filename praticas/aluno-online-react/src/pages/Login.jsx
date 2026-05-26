import logo from "../assets/learn.svg";
import FormLogin from "../components/FormLogin";

function Login(props) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <img
          src={logo}
          alt="Imagem da logo"
          className="w-20 h-20 mx-auto mb-4"
        />

        <h1 className="font-bold text-2xl text-gray-800 mb-6">Aluno Online</h1>

        <FormLogin />
      </div>
    </section>
  );
}

export default Login;
