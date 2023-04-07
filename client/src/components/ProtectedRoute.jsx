import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  
  if (loading) return <h1>Loading...</h1>;

  if (!user) return <Navigate to="/login" />;

  // if (!user.emailVerified) {
  //   alert('You must first verify your email');
  //   // Redirigir a la última página cuando el usuario presione el botón "Aceptar"
  //   window.location.href = "/";
  // }

  return <>{children}</>;
}
