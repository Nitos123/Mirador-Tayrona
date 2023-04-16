import React from 'react';
import '../styles/DeleteUpdateRoom.scss'

const DeleteUpdateRoom = ({ allRooms, handleShowEditComponent, Sweet }) => {
  return (

    <div className='cont-gral'>
      {allRooms?.map((room) => {
        return (
          <div className="cont-card " key={room._id} >
            <img src={room.image} alt={`Habitación ${room.name}`} />
            <div>
              <h4> {room.name}</h4>
              <div className='all-btn' >
                <button className='btn-update' onClick={() => handleShowEditComponent(room)}>Update</button>
                <button className='btn-delete' onClick={() => Sweet()}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>

  );
};

export default DeleteUpdateRoom;