 import React, { useState } from "react";
 import axios from "axios";
 import Form from "react-bootstrap/Form";
 import Button from "react-bootstrap/Button";
 import Modal from "react-bootstrap/Modal";
 import"../styles/CreateRoomForm.scss";


const CreateRoomForm = ({ show, handleClose }) => {
    const [roomName, setRoomName] = useState("");
    const [roomDescription, setRoomDescription] = useState("");
    const [roomPrice, setRoomPrice] = useState(null);
    const [roomImage, setRoomImage] = useState("");
    const [roomType, setRoomType] = useState("");
    const [roomStatus, setRoomStatus] = useState(null);
    const [roomGuests, setRoomGuests] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRoom = {
            name: roomName,
            description: roomDescription,
            price: roomPrice,
            image: roomImage,
            type: roomType,
            status: roomStatus,
            guests: roomGuests,
            bookedDates: [],
        };

        console.log(newRoom);
    };

    return (
        <div className="modal-body">
            <h2>Create a new room  </h2>
            <form onSubmit={handleSubmit}>
                
                    <div className="cont-name">
                    <label className="label"> Name: </label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={roomName}
                            onChange={(event) => setRoomName(event.target.value)}
                        />
                    </div>
                    
                </div>

                <div className="cont-desc">
                    <label className="label">Description : </label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            rows={3}
                            value={roomDescription}
                            onChange={(event) => setRoomDescription(event.target.value)}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Room Price</label>
                    <div className="control">
                        <input
                            className="input"
                            type="number"
                            value={roomPrice}
                            onChange={(event) => setRoomPrice(event.target.value)}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Room Type</label>
                    <div className="control">
                        <div className="select">
                            <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                                <option value="">Select a room type</option>
                                <option value="familiar">Familiar</option>
                                <option value="individual">Individual</option>
                                <option value="matrimonial">Matrimonial</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            checked={roomStatus}
                            onChange={(event) => setRoomStatus(event.target.checked)}
                        />
                        Room Status/             </label>
                </div>

                <div className="field">
                    <label className="label">Room Image</label>
                    <div className="control">
                        <input
                            className="input"
                            type="file"
                            onChange={(event) => setRoomImage(event.target.files[0])}
                        />
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button type="submit" className="button is-link">
                            Submit
                        </button>
                    </div>
                    <div className="control">
                        <button type="button" className="button is-link is-light" onClick={handleClose}>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateRoomForm;
