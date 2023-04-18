import Swal from "sweetalert2";
import axios from "axios";

const DelRoomSweet = async (roomId) => {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "If you delete the room you will lose the data permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fd3131",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      console.log(roomId)
      const response = await axios.put(`/update/room/${roomId}/status`, {
        baseURL: "http://localhost:8080" // Establece la URL base del servidor aquí
      });
      if (response.status === 200) { // verifica el estado de la respuesta HTTP
        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Room deleted",
        });
        return true;
      } else {
        throw new Error("Something went wrong");
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error(error); // agrega console.error para mostrar el error en la consola
    await Swal.fire({
      icon: "error",
      title: "Error!",
      text: "Room not deleted",
    });
    return false;
  }
};

export default DelRoomSweet;
