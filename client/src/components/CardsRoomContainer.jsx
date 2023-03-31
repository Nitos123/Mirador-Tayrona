import React from "react";
import CardRoom from "./CardRoom";
import "../styles/CardsRoomContainer.scss";

const CardRoomContainer = (props) => {
  const rooms = [1, 2, 3, 4];

  return (
    <div>
      <div className="container">
        {rooms.map((room) => {
          return <CardRoom />;
        })}
      </div>
    </div>
  );
};

export default CardRoomContainer;
