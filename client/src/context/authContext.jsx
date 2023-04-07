import { createContext, useContext, useEffect, useState } from "react"; // para crear un estado desde un archivo externo
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebaseAuth";

export const authContext = createContext(); // devuelve un objeto, con esto puedo definir un proveerdor y crear o devolver objetos

export const useAuth = () => {
  const context = useContext(authContext);
  console.log("contexto-->", context);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); //Con este estado, podemos guardar los datos del usuario logueado
  const [loading, setLoading] = useState(true); // Esto es para cuando inicialmente el user está en null

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password); //Revisar como puedo enviar el name

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password); //Revisar como puedo enviar el name

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth); //Con esta función se puede cerrar sesión

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  ); // De esta manera, todo componente hijo podrá acceder a los datos del componente padre
}
