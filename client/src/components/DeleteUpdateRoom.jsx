import React from 'react';
import '../styles/DeleteUpdateRoom.scss'

const DeleteUpdateRoom = ({ allRooms, handleShowEditComponent, DelRoomSweet }) => {
  return (

    <div className='cont-gral'>
      {allRooms?.map((room) => {
        return (
          <div className="cont-card " key={room._id} >
            <img src={room.image[0]} alt={`Habitación ${room.name}`} />
            <div>
              <h4> {room.name}</h4>
              <div className='all-btn' >
                <button className='btn-update' onClick={() => handleShowEditComponent(room)}>Update</button>
                <button className='btn-delete' onClick={() => DelRoomSweet(room._id)}>Delete</button>    {/*le paso el id para poder eliminarlo */}
              </div>
            </div>
          </div>
        );
      })}
    </div>

  );
};

export default DeleteUpdateRoom;