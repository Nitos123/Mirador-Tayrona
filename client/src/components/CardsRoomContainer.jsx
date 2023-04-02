import { useEffect } from "react";
import CardRoom from "./CardRoom";
import "../styles/CardsRoomContainer.scss";
import { useDispatch, useSelector } from "react-redux";

import { getAllRooms } from "../redux/actions";

const CardRoomContainer = (props) => {
  const dispatch = useDispatch();

  const allRooms = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        {allRooms?.map((room, index) => {
          return (
            <CardRoom
              key={index}
              id={room._id}
              image={room.image}
              guests={room.guests}
              name={room.name}
              price={room.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardRoomContainer;
