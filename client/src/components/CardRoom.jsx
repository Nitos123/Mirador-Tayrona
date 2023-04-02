import React from "react";
import { Link } from "react-router-dom";
import "../styles/CardRoom.scss";

const CardRoom = (props) => {
  return (
    <div className="roomContainer">
      <div className="room">
        <Link to={`/detail/${props.id}`}>
          <div>
            <img
              src={
                props.image[0]
                  ? props.image[0]
                  : "https://t3.ftcdn.net/jpg/05/38/52/48/360_F_538524834_KTWCegIa69mIWDLVx6Sc6tdkW6beiMBR.jpg"
              }
              alt="image review"
            />
          </div>
        </Link>

        <div className="txt">
          <h3>{props.name}</h3>
          <h3>Guests: {props.guests}</h3>
          <h3>Price: {props.price} COP</h3>
        </div>

        <Link to={`/detail/${props.id}`}>
          <button>See more</button>
        </Link>
      </div>
    </div>
  );
};

export default CardRoom;
