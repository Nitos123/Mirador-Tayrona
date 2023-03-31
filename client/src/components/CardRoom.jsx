import React from "react";
import { Link } from "react-router-dom";
import "../styles/CardRoom.scss";

const CardRoom = (props) => {
  return (
    <div className="roomContainer">
      <div className="room">
        <Link to={"/detail"}>
          <div>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/85/70/8c/hostel-g.jpg?w=1200&h=-1&s=1"
              alt="image review"
            />
          </div>
          <div className="txt">
            <h3>Habitacion principal</h3>
            <h3>1 guest</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardRoom;
