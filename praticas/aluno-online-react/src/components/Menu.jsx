import { NavLink } from "react-router";

function Menu() {
  return (
    <nav className="mt-12 px-7">
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/faltas">Faltas</NavLink>
        </li>
        <li>
          <NavLink to="/boletos">Boletos</NavLink>
        </li>
        <li>
          <NavLink to="/notas">Notas</NavLink>
        </li>
        <li>
          <NavLink to="/requerimentos">Requerimentos</NavLink>
        </li>
        <li>
          <NavLink to="/login">Sair</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
