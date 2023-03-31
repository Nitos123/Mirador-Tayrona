import React from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import CardServicesContainer from "../components/CardsServicesContainer";

const rooms = (props) => {
  return (
    <div>
      <h1>Estoy en room and services </h1>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum enim
        dolorem quo eveniet exercitationem mollitia asperiores iusto voluptate.
        Iure exercitationem ab doloremque rerum, officiis ullam pariatur laborum
        mollitia cum eius.
      </p>
      <select>
        <option>Price</option>
      </select>
      <select>
        <option>Type</option>
      </select>
      <select>
        <option>Date</option>
      </select>

      <CardRoomContainer />
      <CardServicesContainer />
    </div>
  );
};

export default rooms;
