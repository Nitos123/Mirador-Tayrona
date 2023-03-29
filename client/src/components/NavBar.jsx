import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link to="/rooms">
        <button>Rooms and Services</button>
      </Link>

      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  );
};

export default NavBar;
