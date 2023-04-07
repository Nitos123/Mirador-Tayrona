import { React, useEffect } from "react";
import CardRoomContainerDetail from "../components/CardRoomContainerDetail";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getRoomDetail } from "../redux/actions";
import "../styles/Detail.scss";
import { useAuth } from "../context/authContext";

const Detail = (props) => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const id = useParams().id;
  const { user } = useAuth();
  const verified = user && user.emailVerified; // Comprobando que sea un usuario verificado
  // Emitiendo un alert para usuarios que no estén verificados o si no a iniciado sesión
  const handleMessage = () => {
    if (user) {
      return alert("You must first verify your email");
    } else {
      return alert("You must first login");
    }
  };

  useEffect(() => {
    dispatch(getRoomDetail(id));
  }, [dispatch, id]);

  return (
    <div className="detail">
      {detail ? (
        <>
          <div
            className="mainImageRoom"
            style={{ backgroundImage: `url(${detail.image})` }}
          >
            <h1>{detail.name}</h1>
          </div>
          <div className="section">
            <div>
              <p>{detail.desctiption}</p>

              {!verified ? (
                <button onClick={() => handleMessage()}>Book this room!</button>
              ) : (
                <button>
                  <Link to="/checkout">Book this room!</Link>
                </button>
              )}

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
