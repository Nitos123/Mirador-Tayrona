import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.scss";
import { useAuth } from "../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const { user, logout } = useAuth();
  // console.log(user);

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
            // Cuando hay un usuario Logueado
            <>
              <p className="user-name">
                {user.displayName
                  ? `Hi ${user.displayName.split(" ")[0]}!`
                  : "Howdy"}
              </p>
              {user.photoURL ? (
                <img className="photo-user" src={user.photoURL} alt="perfil" />
              ) : (
                <FontAwesomeIcon
                  className="profile-incognito"
                  icon={faUserTie}
                />
              )}
              <a href="#!" onClick={handleLogout}>
                <FontAwesomeIcon
                  className="logout"
                  icon={faArrowRightFromBracket}
                />
              </a>
            </>
          )}
          {!user && (
            // Cuando no hay usuario logueado
            <>
              <FontAwesomeIcon className="login" icon={faArrowRightToBracket} />
              <div className="dropdown">
                <Link to="/login">Sign in</Link>
                <Link to="/loginCreate">Sign Up</Link>
              </div>
            </>
          )}

          {/* <Link to="/contact">Contact</Link> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
