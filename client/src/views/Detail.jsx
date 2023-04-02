import { React, useEffect } from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRoomDetail } from "../redux/actions";

const Detail = (props) => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    dispatch(getRoomDetail(id));
  }, [dispatch, id]);

  console.log(detail);

  const style = {
    height: "300px",
    width: "100%",
  }

  return (
    <div>
      <div className="mainImageRooms"></div>
      <div className="section">
        <h1>Estoy en Detail</h1>
        {detail ? (
        <div>
          <p>{detail?.desctiption}</p>
          <img style={style} src={detail.image} alt="image review" />
          <button>Book this room!</button>
          <h1>More rooms</h1>
          <CardRoomContainer />
        </div>
      ) : (
        <p>Cargando información...</p>
      )}
    </div>
  </div>
);
};
//hola mundo

export default Detail;
