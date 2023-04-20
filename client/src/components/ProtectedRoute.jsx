import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  const users = useSelector((state) => state.users);
  const adminUsers = users.filter((user) => user.type === "admin");

  const adminUsersAndCurrent = adminUsers.filter(
    (admuser) => admuser?.email === user?.email
  );

  if (loading) return <h1>Loading...</h1>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}

export const isAdmin = () => {
  const { user } = useAuth();
  const users = useSelector((state) => state.users);

  const adminUsers = users.filter((user) => user.type === "admin");
  const adminUsersAndCurrent = adminUsers.filter(
    (admuser) => admuser?.email === user?.email
  );

  let admin = false;

  if (!user) {
    admin = false;
  } else if (adminUsersAndCurrent.length > 0) {
    admin = true;
  }

  return admin;
};

export const blockedUsers = () => {
  const { user } = useAuth();

  const users = useSelector((state) => state.users);
  const blocked = users?.filter((user) => user.type === "block");

  console.log(users);

  console.log(blocked);

  const blockedAndCurrent = blocked.filter(
    (admuser) => admuser?.email === user?.email
  );

  console.log(blockedAndCurrent.length > 0);

  return blockedAndCurrent.length > 0;
};
