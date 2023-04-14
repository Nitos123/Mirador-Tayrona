import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../redux/actions";
import "../styles/DashboardAdmin.scss";
import Sweet from "./Sweet";

const AdminRooms = (props) => {
  const dispatch = useDispatch();

  const allRooms = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  return (
    <div>
      <h2>Crear, editar borrar habitaciones</h2>

      <div>
        <button>Create new room</button>
      </div>

      <div className="admin-user-img">
        {allRooms?.map((room) => {
          return (
            <div>
              <img src={room.image} />
              {room.name}
              <button>Edit</button>
              <button onClick={() => Sweet()}>Delete</button>;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminRooms;
