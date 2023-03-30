import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <Link to="/home">
        <button>Mirador Tayrona Park</button>
      </Link>

      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link to="/rooms">
        <button>Rooms & Services</button>
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
