import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";

function Login() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const entrar = (dados) => {
    navigate("/produtos");
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(entrar)}>
        <input type="email" placeholder="E-mail" {...register("email")} />
        <input type="password" placeholder="Senha" {...register("senha")} />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
