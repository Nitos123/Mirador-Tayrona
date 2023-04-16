import { React, useEffect, useState } from "react";
import CardRoomContainerDetail from "../components/CardRoomContainerDetail";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Await } from "react-router-dom";
import {
  getRoomDetail,
  localCarrito,
  checkReservationDates,
  carritoUser,
  carritoAddUser,
} from "../redux/actions";
import "../styles/Detail.scss";
import { useAuth } from "../context/authContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Detail = (props) => {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const id = useParams().id;
  const images = detail && detail.image;
  const featuredImage = images && detail.image[0];
  const lengthImages = detail.image ? images.length : 0;
  const { user } = useAuth();
  // const verified = user && user.emailVerified; // Comprobando que sea un usuario verificado
  // Emitiendo un alert para usuarios que no estén verificados o si no a iniciado sesión
  const carrito = useSelector((state) => state.carrito);
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(null);

  const conflict = useSelector((state) => state.dataConflict);

  const comprobacion = (date, startDate, id) => {
    setEndDate(date);
    dispatch(checkReservationDates(date, startDate, id));
  };

  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    dispatch(getRoomDetail(id));
  }, [dispatch, id, startDate, endDate]);

  const localCar = () => {
    if (!user && conflict === true) {
      dispatch(localCarrito(id));
      navigate("/checkout");
      return;
    }
  };

  //NO TOCAR ESTA MONDA, LOGICA MUY COMPLICADA
  const enviarCarrito = async () => {
    if (user && conflict === true) {
      const userMail = user.email;

      dispatch(carritoAddUser(userMail, startDate, endDate, id));
      dispatch(carritoUser(userMail));
      navigate("/checkout");
    } else {
      localCar();
    }
  };

  return (
    <div className="detail">
      {detail ? (
        <>
          <div
            className="mainImageRoom"
            style={{ backgroundImage: `url(${featuredImage})` }}
          >
            <h1>{detail.name}</h1>
          </div>
          <div className="overlay"></div>
          <div className="section">
            <div>
              <div className="decription">
                <div className="metadatos">
                  <p>
                    Type Room: <span>{detail.type}</span>
                  </p>
                  <p>
                    Guests: <span>{detail.guests}</span>
                  </p>
                  <p>
                    Price: <span>${detail.price}</span>
                  </p>
                </div>
                <p>{detail.desctiption}</p>
                {lengthImages > 1 ? (
                  <div className="gallery">
                    {images.map(
                      (url, index) =>
                        index >= 1 && <img src={url} key={index} />
                    )}
                  </div>
                ) : ''}
              </div>

              <div className="booking">
                {!user ? (
                  <div>
                    <div>
                      <div>
                        <p>From:</p>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          minDate={new Date()}
                          maxDate={
                            new Date(
                              new Date().setMonth(new Date().getMonth() + 6)
                            )
                          }
                          dateFormat="dd/MM/yyyy"
                          showYearDropdown
                          yearDropdownItemNumber={15}
                          placeholderText="Date of admission"
                          isClearable
                        />
                      </div>
                      <div>
                        <p>To</p>
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => comprobacion(date, startDate, id)}
                          minDate={
                            startDate
                              ? new Date(startDate.getTime() + 86400000)
                              : new Date(new Date().getTime() + 86400000)
                          }
                          maxDate={
                            new Date(
                              new Date().setMonth(new Date().getMonth() + 6)
                            )
                          }
                          dateFormat="dd/MM/yyyy"
                          showYearDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={15}
                          placeholderText="Return date"
                          isClearable
                        />
                      </div>
                    </div>
                    {conflict === false ? (
                      <p>La habitacion no esta disponible en estas fechas.</p>
                    ) : (
                      ""
                    )}
                    <button onClick={() => localCar()}>Book this room!</button>
                  </div>
                ) : (
                  <div>
                    <div>
                      <div>
                        <p>From:</p>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          minDate={new Date()}
                          maxDate={
                            new Date(
                              new Date().setMonth(new Date().getMonth() + 6)
                            )
                          }
                          dateFormat="dd/MM/yyyy"
                          showYearDropdown
                          yearDropdownItemNumber={15}
                          placeholderText="Date of admission"
                          isClearable
                        />
                      </div>
                      <div>
                        <p>To</p>
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => comprobacion(date, startDate, id)}
                          minDate={
                            startDate
                              ? new Date(startDate.getTime() + 86400000)
                              : new Date(new Date().getTime() + 86400000)
                          }
                          maxDate={
                            new Date(
                              new Date().setMonth(new Date().getMonth() + 6)
                            )
                          }
                          dateFormat="dd/MM/yyyy"
                          showYearDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={15}
                          placeholderText="Return date"
                          isClearable
                        />
                      </div>
                    </div>
                    {conflict === false ? (
                      <p>La habitacion no esta disponible en estas fechas.</p>
                    ) : (
                      ""
                    )}
                    <button onClick={() => enviarCarrito()}>
                      Book this room!
                    </button>
                  </div>
                )}
              </div>

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
