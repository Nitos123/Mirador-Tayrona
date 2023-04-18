import Swal from "sweetalert2";

const DelRoomSweet = (roomId) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you delete the room you will lose the data permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fd3131",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/api/rooms/${roomId}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.ok) {
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Room deleted",
              });
              resolve(true);
            } else {
              throw new Error("Something went wrong");
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Room not deleted",
            });
            reject(false);
          });
      } else {
        resolve(false);
      }
    });
  });
};

export default DelRoomSweet;
