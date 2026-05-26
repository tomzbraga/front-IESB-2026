import { NavLink } from "react-router";
import { useAuth } from "../contexts/AuthContext";

function Menu() {
  const { logout } = useAuth();

  return (
    <nav className="mt-12 px-7">
      <ul className="list-disc space-y-4 pl-5">
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
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
          <NavLink onClick={logout} to="/">
            Sair
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
