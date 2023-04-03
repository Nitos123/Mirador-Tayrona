import { useEffect } from "react";
import CardRoom from "./CardRoom";
import Paged from "./Paged";
import "../styles/CardsRoomContainer.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../redux/actions";

const CardRoomContainer = ({
  indexOfFirstRoom,
  indexOfLastRoom,
  roomsPerPage,
  paged,
}) => {
  const dispatch = useDispatch();

  const allRooms = useSelector((state) => state.rooms); // Lista de todas las habitaciones

  const currentRooms = allRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        {currentRooms?.map((room, index) => {
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
      <Paged
        roomsPerPage={roomsPerPage}
        allRooms={allRooms.length}
        paged={paged}
      />
    </div>
  );
};

export default CardRoomContainer;
