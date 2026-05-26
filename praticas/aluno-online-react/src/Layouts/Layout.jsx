import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

function Layout() {
  const { logado } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!logado) {
      navigate("/login");
    }
  }, [logado, navigate]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
