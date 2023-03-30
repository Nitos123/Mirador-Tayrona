import React from "react";
import CardRoom from "./CardRoom";

const CardRoomContainer = (props) => {
  const rooms = [1, 2, 3, 4];

  return (
    <div>
      <h1>Estoy en CardRoomContainer y tengo a CardRoom</h1>

      {rooms.map((room) => {
        return <CardRoom />;
      })}
    </div>
  );
};

export default CardRoomContainer;
