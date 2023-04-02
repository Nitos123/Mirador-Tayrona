import { useEffect } from "react";
import CardRoom from "./CardRoom";
import "../styles/CardsRoomContainer.scss";
import { useDispatch, useSelector } from "react-redux";

import { getAllRooms } from "../redux/actions";

const CardRoomContainerDetail = (props) => {
  const dispatch = useDispatch();
  const allRooms = useSelector((state) => state.rooms);

  const filteredRooms = allRooms.filter((room) => room.id < 3);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        {filteredRooms?.map((room, index) => {
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

export default CardRoomContainerDetail;
