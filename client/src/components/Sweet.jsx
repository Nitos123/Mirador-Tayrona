import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

export const Sweet = () => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going to block the user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fd3131",
      confirmButtonText: "Yes, block it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "User blocked",
        });
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export const SweetRolAdmin = () => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going change the user rol to Admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, make it admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "User's rol is now admin",
        });
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export const SweetRolUser = () => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going change the user rol to regular user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, make it regular user",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "User's rol is now regular",
        });
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export const SweetAprovedPayment = (props) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Payment Success",
      text: props,
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("/ruta/para/borrar/items")
          .then(() => {
            Swal.fire({
              title: "Items removed from cart",
              text: "Your cart has been emptied.",
              icon: "success",
            });
            window.location.href = "/";
            resolve(true);
          })
          .catch((error) => {
            Swal.fire({
              title: "Error removing items from cart",
              text: "There was an error while removing items from your cart. Please try again later.",
              icon: "error",
            });
            console.log(error);
            reject(error);
          });
      } else {
        resolve(false);
      }
    });
  });
};

export const SweetFailedReview = (props1, props2) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Review failed",
      text: `Incomplete information`,
      icon: "error",
    });
  });
};

export const SweetFailedLogin = (props1, props2) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Login failed",
      text: `Incomplete information`,
      icon: "error",
    });
  });
};

export const SweetFailedCreate = (props1, props2) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Account creation failed",
      text: `Incomplete information`,
      icon: "error",
    });
  });
};

export const SweetRejectedPayment = (props) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Payment failed",
      text: props,
      icon: "error",
    });
  });
};

export const SweetupdateRoom = async (roomId, updatedData) => {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to save changes?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      const response = await axios.put(
        `/update/roomData/${roomId}`,
        updatedData
      );

      if (response.status === 200) {
        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Room updated. The changes are now available.",
        });
        return true;
      } else {
        throw new Error("Something went wrong");
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    await Swal.fire({
      icon: "error",
      title: "Error!",
      text: "An error occurred while updating the room.",
    });
    return false;
  }
};

export const SweetCreatedReview = (props) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Review created!",
      text: "Success",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export const SweetApprovedReview = () => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going to approved this user review",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, approved",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Review Aproved, is now visible at home",
        });
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

export const SweetRejectedReview = () => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going to rejected this user review",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, rejected",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Review rejected",
        });
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};
