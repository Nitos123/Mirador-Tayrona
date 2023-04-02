import { useEffect } from "react";
import CardRoom from "./CardRoom";
import "../styles/CardsRoomContainer.scss";
import { useDispatch, useSelector } from "react-redux";

import { getAllRooms } from "../redux/actions";

const CardRoomContainer = (props) => {
  const dispatch = useDispatch();

  const rooms = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        {rooms?.map((room, index) => {
          return <CardRoom key={index} />;
        })}
      </div>
    </div>
  );
};

export default CardRoomContainer;
