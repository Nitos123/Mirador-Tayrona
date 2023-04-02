import { React, useEffect } from "react";
import CardRoomContainerDetail from "../components/CardRoomContainerDetail";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRoomDetail } from "../redux/actions";
import "../styles/Detail.scss";

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
  };

  return (
    <div className="detail">
      {detail ? (
        <>
          <div className="mainImageRoom" style={{backgroundImage: `url(${detail.image})`}}>
            {/* <h1>Estoy en Detail</h1> */}
          </div>
          <div className="section">
            <div>
              <p>{detail.desctiption}</p>
              <img style={style} src={detail.image} alt="image review" />
              <button>Book this room!</button>
              <h1>More rooms</h1>
              <CardRoomContainerDetail />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mainImageRooms">
            <div className="section">
              <p>Cargando información...</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
