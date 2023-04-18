import React, { useState } from "react";

import UploadWidgetCloud from "./UploadWidgetCloud";

const EditRoomForm = ({ room, handleClose }) => {
  const [name, setName] = useState(room.name);
  const [description, setDescription] = useState(room.description);
  const [capacity, setCapacity] = useState(room.guests);
  const [price, setPrice] = useState(room.price);
  const [type, setType] = useState(room.type);
  const [status, setStatus] = useState(room.status);
  const [urlImage, setUrlImage] = useState(room.image);
  const[newUrlImg, setNewUrlImage] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedImages = [...urlImage, ...newUrlImg]
    // Actualizar la información de la habitación
    const updatedRoom = {
      name,
      description,
      image: updatedImages,
      capacity,
      price,
      type,
      status,
    };


    
      console.log("lista fotos room actualizada", updatedRoom.image)
    // Aquí deberías enviar la información actualizada al servidor
    // ...falta crear la ruta patch para actualizar 

    handleClose();
  }

 
  return (
    <form onSubmit={handleSubmit}>
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
      <select
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="familiar">familiar</option>
        <option value="individual">individual</option>
        <option value="matrimonial">matrimonial</option>
      </select>

      <label htmlFor="status">Estado</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="available">Disponible</option>
        <option value="unavailable">No disponible</option>
      </select>

      <label htmlFor="image">Imagen</label>

      <div>
        <UploadWidgetCloud handleUploadImg={setNewUrlImage} />
        {/* Mostrar las imágenes existentes y las nuevas imágenes */}
        {[...urlImage, ...newUrlImg].map((imageUrl) => (
          <img
            key={imageUrl}
            src={imageUrl}
            alt="image not found"
            style={{ width: "200px", height: "auto" }}
          />
        ))}
      </div>

      <button type="submit">Guardar cambios</button>
      <button type="button" onClick={handleClose}>
        Cancelar
      </button>
    </form>
  );
};

export default EditRoomForm;
