import { React, useEffect } from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRoomDetail } from "../redux/actions";

const Detail = (props) => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(getRoomDetail(id));
    console.log(getRoomDetail(id));
  }, [dispatch, id]);

  console.log(detail);

  return (
    <div>
      <div className="mainImageRooms"></div>
      <div className="section">
        <h1>Estoy en Detail</h1>
        <div>
          <p>{detail.desctiption}</p>

          <img src={detail.image} alt="image review" />

          <button>Book this room!</button>

          <h1>More rooms</h1>
          <CardRoomContainer />
        </div>
      </div>
    </div>
  );
};

export default Detail;
