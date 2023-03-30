import React from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import CardServicesContainer from "../components/CardsServicesContainer";

const rooms = (props) => {
  return (
    <div>
      <h1>Estoy en room and services </h1>
      <CardRoomContainer />
      <CardServicesContainer />
    </div>
  );
};

export default rooms;
