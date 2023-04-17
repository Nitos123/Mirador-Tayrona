import React, { useState } from "react";
import axios from "axios";
import "../styles/CreateRoomForm.scss";
import UploadWidgetCloud from "./UploadWidgetCloud";


const CreateRoomForm = ({ handleClose }) => {
    const [roomName, setRoomName] = useState("");
    const [roomDescription, setRoomDescription] = useState("");
    const [roomPrice, setRoomPrice] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const [roomType, setRoomType] = useState("");
    const [roomGuests, setRoomGuests] = useState("");
    const [error, setError] = useState("");
    const [formDisabled, setFormDisabled] = useState(true);
    const[formCompleted,setFormCompleted] = useState(false)


    const handleUploadImg = async (url) => {

        setUrlImage(url); // Guardar la información del archivo en el estado del componente contenedor
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRoom = {
            name: roomName,
            description: roomDescription,
            price: roomPrice,
            image: urlImage,
            type: roomType,
            status: true,
            guests: roomGuests,
            bookedDates: [],
        };

        console.log("Estos son los datos de la habitacion creada",newRoom);

        //aca hay que pegarle a la rura del back  con los datos de new room
    };



    const handlePriceChange = (event) => {
        const value = event.target.value;
        if (isNaN(value)) {
            setError("error: only numeric type characters are accepted");
            setRoomPrice("");
            setFormCompleted(false);
        } else {
            setError("");
            setRoomPrice(value);
            validateFields();
        }
    }


    const handleChangeGuest = (event) => {
        const value = event.target.value;
        if (isNaN(value)) {
            setError("error: only numeric type characters are accepted");
            setRoomGuests("");
            setFormCompleted(false);
        } else {
            const numValue = Number(value);
            if (numValue > 6) {
                setError("error: the rooms have a maximum of 6 guests");
                setRoomGuests("");
                setFormCompleted(false);
            } else {
                setError("");
                setRoomGuests(numValue);
                validateFields();
            }
        }
    };


    const validateFields = () => {
        if (
            roomName &&
            roomDescription &&
            roomPrice &&
            urlImage &&
            roomType &&
            roomGuests
        ) {
            setFormCompleted(true);
            setFormDisabled(false);
        } else {
            setFormCompleted(false);
            setFormDisabled(true);
        }
    };


    return (
        <div className="modal-body">
            <h2 className="title">Create a new room </h2>
            <form onSubmit={handleSubmit}>
                <div className="cont-forms">
                    <label className="label"> Name: </label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={roomName}
                            onChange={(event) => setRoomName(event.target.value)}
                            required // added required attribute
                        />
                    </div>
                </div>

                <div className="cont-forms">
                    <label className="label">Description </label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            rows={3}
                            value={roomDescription}
                            onChange={(event) => setRoomDescription(event.target.value)}
                            required // added required attribute
                        />
                    </div>
                </div>

                <div className="price-type">
                    <div className="cont-forms children">
                        <label className="label" htmlFor="roomPrice">Price per night&nbsp;&nbsp;&nbsp; &nbsp;</label>
                        <div>
                            <label className="label price" htmlFor="roomPrice">$  </label>
                            <input
                                type="text"
                                id="roomPrice"
                                name="roomPrice"
                                value={roomPrice}
                                onChange={handlePriceChange}
                                required // added required attribute
                            />
                        </div>
                    </div>


                    <div className="cont-forms children">
                        <label className="label">Type&nbsp;&nbsp;&nbsp; &nbsp;   </label>
                        <div className="control">
                            <div className="select">
                                <select required value={roomType} onChange={(e) => setRoomType(e.target.value)}   >
                                    <option cvalue="">Select a room type</option>
                                    <option value="familiar">Familiar</option>
                                    <option value="individual">Individual</option>
                                    <option value="matrimonial">Matrimonial</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="price-type" >
                    <div className="cont-forms children">
                        <label className="label"> Number of guests &nbsp;&nbsp;  </label>

                        <input
                            type="text"
                            id="roomGuests"
                            name="roomGuests"
                            value={roomGuests}
                            onChange={handleChangeGuest}
                            required
                        />

                    </div>
                </div>

                <div>
                    <UploadWidgetCloud urlImg={handleUploadImg} />
                    {urlImage && (
                        <img src={urlImage} alt="image not found" style={{ width: '200px', height: 'auto' }} />
                    )}
                </div>

                {/*Manejo de errores */}


                {error && <p className="messageError">{error}</p>}


                <div className="field is-grouped">
                    <div className="control">
                        <button type="submit" className="button is-link" disabled={!formDisabled} >
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
