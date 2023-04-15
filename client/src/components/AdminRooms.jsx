import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../redux/actions";
import "../styles/DashboardAdmin.scss";
import Sweet from "./Sweet";
import CreateRoomForm from "./CreateRoomForm";


const AdminRooms = (props) => {
  const dispatch = useDispatch();

  const allRooms = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  const [showRoomComponent, setShowRoomComponent] = useState(false);

  const handleShowRoomComponent = () => {
    console.log("showRoomComponent:", showRoomComponent);
    setShowRoomComponent(prevState => !prevState);
  };

  return (
    <div>
      <h2>Crear, editar y borrar habitaciones</h2>

      <div>
        {/* Actualizamos el enlace para llamar a handleShowRoomComponent */}
        <button onClick={handleShowRoomComponent}>Crear nueva habitación</button>
      </div>

      {/* Agregamos la condición para mostrar el componente */}
      {showRoomComponent && <CreateRoomForm show={showRoomComponent} handleClose={handleShowRoomComponent} />}


      <div className="admin-user-img">
        {allRooms?.map((room) => {
          return (
            <div key={room.id}>
              <img src={room.image} alt={`Habitación ${room.name}`} />
              {room.name}
              <button>Editar</button>
              <button onClick={() => Sweet()}>Eliminar</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminRooms;
