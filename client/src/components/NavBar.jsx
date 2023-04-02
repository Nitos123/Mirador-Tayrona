import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.scss';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div className="container-navbar">
        <div className="logo">
          <Link to="/home">Mirador <br /> Tayrona Park</Link>
        </div>
        <div className="items-menu">
          <Link to="/home">Home</Link>

          <Link to="/rooms">Rooms & Services</Link>

          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
