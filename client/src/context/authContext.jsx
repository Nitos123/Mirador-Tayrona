import { createContext, useContext } from "react"; // para crear un estado desde un archivo externo

export const authContext = createContext(); // devuelve un objeto, con esto puedo definir un proveerdor y crear o devolver objetos

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export function AuthProvider({ children }) {
  // Esto es un componente lo que se está exportando
  const user = {
    login: true,
  };

  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  ); // De esta manera, todo componente hijo podrá acceder a los datos del componente padre
}