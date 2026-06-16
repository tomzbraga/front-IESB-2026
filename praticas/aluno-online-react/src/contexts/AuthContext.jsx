import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState({});
  const [logado, setLogado] = useState(false);

  const login = () => {
    // Chama a API do backend
    setUsuario({ nome: "Jose" });
    setLogado(true);
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
