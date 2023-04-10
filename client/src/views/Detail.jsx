import { React, useEffect, useState } from "react";
import CardRoomContainerDetail from "../components/CardRoomContainerDetail";
import { useSelector, useDispatch } from "react-redux";
import { Await, Link, useParams, useNavigate } from "react-router-dom";
import { getRoomDetail, carritoUser, getCar } from "../redux/actions";
import "../styles/Detail.scss";
import { useAuth } from "../context/authContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Detail = (props) => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const id = useParams().id;
  const { user } = useAuth();
  const verified = user && user.emailVerified; // Comprobando que sea un usuario verificado
  // console.log(user.email);
  // Emitiendo un alert para usuarios que no estén verificados o si no a iniciado sesión
  const handleMessage = () => {
    if (user) {
      return alert("You must first verify your email");
    } else {
      return alert("You must first login");
    }
  };
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState(null);
  // console.log(startDate)

  const [endDate, setEndDate] = useState(null);
  // console.log(endDate);

  useEffect(() => {
    dispatch(getRoomDetail(id));
  }, [dispatch, id]);

  const userMail = user.email;
  // console.log(userMail, "usermail");

  //NO TOCAR ESTA MONDA, LOGICA MUY COMPLICADA
  const enviarCarrito = () => {
    dispatch(carritoUser(startDate, endDate, userMail, id))
      .then((result) => {
        // console.log(result); // aquí puedes manejar el resultado de la promesa
        const variableResultado = result;
        setError(variableResultado); // aquí guardas el resultado de la promesa en una variable
        if (variableResultado !== 400) {
          dispatch(getCar(userMail));
          console.log("Carrito enviado correctamente!");
          navigate("/checkout");
        }
      })
      .catch((error) => {
        console.error(error); //aquí puedes manejar el error en caso de que la promesa se haya rechazado
      });
  };

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
                <div>
                  <div>
                    <div>
                      <p>Desde:</p>
                      <DatePicker
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        id="start-date"
                        name="start-date"
                      />
                    </div>
                    <div>
                      <p>Hasta</p>
                      <DatePicker
                        onChange={(date) => setEndDate(date)}
                        dateFormat="yyyy-MM-dd"
                        id="end-date"
                        name="end-date"
                      />
                    </div>
                  </div>
                  {error === 400 ? (
                    <p>La habitacion no esta disponible en estas fechas.</p>
                  ) : (
                    ""
                  )}
                  <button onClick={() => enviarCarrito()}>
                    Book this room!
                  </button>
                </div>
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
