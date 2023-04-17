import Swal from "sweetalert2";

export const Sweet = () => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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

export const SweetAprovedPayment = (props) => {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Payment Success",
      text: props,
      icon: "success",
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
