import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";

const Footer = (props) => {
  return (
    <div>
      <div className="test">
        <h3>Quick Link</h3>

        <Link to="/home">
          <p>Home</p>
        </Link>

        <Link to="/rooms">
          <p>Rooms & Services</p>
        </Link>

        <Link to="/about">
          <p>About</p>
        </Link>

        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
