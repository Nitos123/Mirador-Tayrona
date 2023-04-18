import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}

export const isAdmin = () => {
  const { user } = useAuth();

  const users = useSelector((state) => state.users);

  const adminUsers = users.filter((user) => user.type === "admin");

  const adminUsersAndCurrent = adminUsers.filter(
    (us) => us.email === user?.email
  );

  return !adminUsersAndCurrent.length > 0;
};
