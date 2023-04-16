import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../redux/actions";
import "../styles/DashboardAdmin.scss";
import Sweet from "./Sweet";
import CreateRoomForm from "./CreateRoomForm";
import DeleteUpdateRoom from "./DeleteUpdateRoom";

const AdminRooms = (props) => {
  const dispatch = useDispatch();

  const allRooms = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  const [showRoomComponent, setShowRoomComponent] = useState(false);
  const [showEditComponent, setShowEditComponent] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleShowRoomComponent = () => {
    setShowRoomComponent(true);
    setShowEditComponent(false);
  };

  const handleShowEditComponent = (room) => {
    setSelectedRoom(room);
    setShowEditComponent(true);
    setShowRoomComponent(false);
  };

  const handleClose = () => {
    setSelectedRoom(null);
    setShowRoomComponent(false);
    setShowEditComponent(false);
  };

  return (
    <div className="cont-admin-room" >
      <h2> Create, edit and delete rooms </h2>

      <div>
        <button onClick={handleShowRoomComponent}>Create new room</button>
      </div>

      {showRoomComponent && <CreateRoomForm show={showRoomComponent} handleClose={handleClose} />}
      {/* {showEditComponent && <EditRoomForm show={showEditComponent} handleClose={handleClose} room={selectedRoom} />} */}

      <DeleteUpdateRoom   allRooms = {allRooms} handleShowEditComponent = {handleShowEditComponent} Sweet ={Sweet} />
    </div>
  );
};

export default AdminRooms;

