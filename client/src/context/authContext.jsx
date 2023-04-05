import { createContext, useContext } from "react"; // para crear un estado desde un archivo externo
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseAuth";

export const authContext = createContext(); // devuelve un objeto, con esto puedo definir un proveerdor y crear o devolver objetos

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password); //Revisar como puedo enviar el name

  return (
    <authContext.Provider value={{ signup }}>{children}</authContext.Provider>
  ); // De esta manera, todo componente hijo podrá acceder a los datos del componente padre
}
