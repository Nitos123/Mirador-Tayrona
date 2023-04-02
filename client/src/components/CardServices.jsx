import React from "react";
import "../styles/CardServices.scss";

const CardServices = (props) => {
  const { backgroundImage, description } = props;

  const style = {
    color: "white",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "1.3em",
  };

  const containerStyle = {
    padding: "1px",
    width: "100%",
  };
  return (
    <div style={containerStyle}>
      <div className="servicesContainer" style={style}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardServices;

