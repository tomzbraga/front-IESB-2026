import { useParams } from "react-router";
import Menu from "../components/Menu";
import { useForm } from "react-hook-form";

function Perfil() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validadores = {
    nome: {
      required: "Nome é obrigatório",
      minLength: {
        value: 3,
        message: "Nome deve ter pelo menos 3 caracteres",
      },
    },

    email: {
      required: "Email é obrigatório",
    },

    nascimento: {
      validate: (value) => Date.parse(value) < Date.now() || "Data inválida",
    },

    telefone: {
      min: {
        value: 0,
        message: "Telefone é um número",
      },
      pattern: {
        value:
          /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/,
        message: "Telefone inválido",
      },
    },
  };

  const onSalvar = (data) => {
    console.log(data);
  };

  // register devolve um objeto => {id: "", name: "", onChange: ""}

  return (
    <>
      <h1>Perfil do usuario {id}</h1>
      <form onSubmit={handleSubmit(onSalvar)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" {...register("nome", validadores.nome)} />
          {errors?.nome && <p>{errors.nome.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email", validadores.email)} />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="nascimento">Data de nascimento</label>
          <input
            type="date"
            {...register("nascimento", validadores.nascimento)}
          />
          {errors?.nascimento && <p>{errors.nascimento.message}</p>}
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input type="tel" {...register("telefone", validadores.telefone)} />
          {errors?.telefone && <p>{errors.telefone.message}</p>}
        </div>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default Perfil;
