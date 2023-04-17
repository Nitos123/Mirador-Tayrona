import React, { useState } from "react";

import UploadWidgetCloud from "./UploadWidgetCloud";


const EditRoomForm = ({ room, handleClose }) => {
  const [name, setName] = useState(room.name);
  const [description, setDescription] = useState(room.desctiption);
  const [capacity, setCapacity] = useState(room.guests);
  const [price, setPrice] = useState(room.price);
  const [type, setType] = useState(room.type);
  const [status, setStatus] = useState(room.status);
  const [urlImage, setUrlImage] = useState(room.image[0]);


  const handleUploadImg = async (url) => {

    setUrlImage(url); // Guardar la información del archivo en el estado del componente contenedor
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    // Actualizar la información de la habitación

    const updatedRoom = {
      name,
      description,
      image: urlImage,
      capacity,
      price,
      type,
      status,
    };

    //aca tengo que pegarle a la ruta con los cambios
    console.log('info que se va a subir: ', updatedRoom)

    handleClose();

  };



  return (
    <form onSubmit={handleSubmit} >

      <h2>Editar habitación</h2>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="description">Descripción</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />



      <label htmlFor="capacity">Capacidad</label>
      <input
        type="number"
        id="capacity"
        value={capacity}
        onChange={(e) => setCapacity(parseInt(e.target.value))}
      />

      <label htmlFor="price">Precio</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
      />

      <label htmlFor="type">Tipo</label>
      <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="familiar">familiar</option>
        <option value="individual">individual</option>
        <option value="matrimonial">matrimonial</option>
      </select>

      <label htmlFor="status">Estado</label>
      <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="available">Disponible</option>
        <option value="unavailable">No disponible</option>
      </select>

      <label htmlFor="image">picture</label>
      {urlImage && (
        <img src={urlImage} alt="image not found" style={{ width: '200px', height: 'auto' }} />
      )}

      < UploadWidgetCloud urlImg={handleUploadImg} />  {/*aca le paso el estado para vque guarde en la prop la url que se crea dentro del componente */}
      {console.log("esta es la url de la imagen subida : ", urlImage)}

      <button type="submit">Guardar cambios</button>
      <button type="button" onClick={handleClose}>Cancelar</button>
    </form>
  );
};

export default EditRoomForm;

//IMPORTANTE: Falta controlar el born de submit para que se guarde si se selecciono la imagen nueva y traer la imagen vieja