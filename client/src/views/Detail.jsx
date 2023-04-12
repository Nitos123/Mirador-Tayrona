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
  const { user } = useAuth();
  // const verified = user && user.emailVerified; // Comprobando que sea un usuario verificado
  // Emitiendo un alert para usuarios que no estén verificados o si no a iniciado sesión
  const carrito = useSelector((state) => state.carrito);
  const navigate = useNavigate();
  
  const [startDate, setStartDate] = useState(null);
  // console.log(startDate)
  
  const conflict = useSelector((state) => state.dataConflict);

  const comprobacion = (date, startDate, id) => {
    setEndDate(date);
   dispatch(checkReservationDates(date, startDate, id))
  };
  console.log(conflict);
  const [endDate, setEndDate] = useState(null);
  // console.log(endDate);

  useEffect(() => {
    dispatch(getRoomDetail(id));
  }, [dispatch, id, startDate, endDate]);

  const localCar = () => {
    console.log(conflict);
    if (!user&& conflict=== true) {
      dispatch(localCarrito(id));
      navigate("/checkout");
      return;
    }
  };

  //NO TOCAR ESTA MONDA, LOGICA MUY COMPLICADA
  const enviarCarrito = async () => {
    console.log(conflict)
    if (user && conflict===true) {
      const userMail = user.email;

      await dispatch(carritoAddUser(userMail, startDate, endDate, id));
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
            style={{ backgroundImage: `url(${detail.image})` }}
          >
            <h1>{detail.name}</h1>
          </div>
          <div className="section">
            <div>
              <p>{detail.desctiption}</p>

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
