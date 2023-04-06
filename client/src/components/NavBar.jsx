import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.scss";
import { useAuth } from "../context/authContext";

const NavBar = (props) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="logo">
          <Link to="/home">
            Mirador <br /> Tayrona Park
          </Link>
        </div>
        <div className="items-menu">
          <Link to="/home">Home</Link>

          <Link to="/rooms">Rooms & Services</Link>
          {user && (
            <>
              <p>{user.email}</p>
              <button onClick={handleLogout}>logout</button>
            </>
          )}
          {!user && (
            <>
              <Link to="/login">Sign in</Link>
              <Link to="/loginCreate">Sign Up</Link>
            </>
          )}

          {/* <Link to="/contact">Contact</Link> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
