import React from "react";
import { Link } from "react-router-dom";

const CardRoom = (props) => {
  return (
    <div>
      <Link to={"/detail"}>
        <h3>Habitacion principal</h3>
        <div>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/85/70/8c/hostel-g.jpg?w=1200&h=-1&s=1"
            alt="image review"
          />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum nulla
          voluptatem facilis facere, saepe voluptates eum perspiciatis
          aspernatur aliquam eligendi quod vero eveniet est, amet natus a fugit
          provident. Ab! lo
        </p>
      </Link>
    </div>
  );
};

export default CardRoom;
