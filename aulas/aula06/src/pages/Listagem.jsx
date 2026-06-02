import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { listar } from "../service/produtoService";
function Listagem() {
  const [erro, setErro] = useState();
  const [dados, setDados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carregar = async () => {
      try {
        const resposta = await listar();
        setDados(resposta);
      } catch (error) {
        setErro(error.message);
      }
    };
    carregar();
  }, []);

  return (
    <>
      <h1>Listagem de Produtos</h1>
      <button onClick={() => navigate("/produtos/novo")}>Novo</button>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Unidade</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.preco}</td>
              <td>{item.unidade}</td>
              <td>
                <Link to={`/produto/editar/${item.id}`}>Editar</Link>
                <Link to="/produtos">Remover</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Listagem;
