import Swal from "sweetalert2";

export const SweetDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#fd3131",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Delete done",
      });
    }
  });
};

export const SweetReview = () => {
  Swal.fire({
    title: "Success!",
    text: "Your review was send",
    icon: "success",
  });
};

//7

//

// export const SweetCreateRoom = async () => {
//   const { value: file, value: text } = await Swal.fire({
//     inputLabel: "Message",
//     inputPlaceholder: "Type your message here...",
//     inputAttributes: {
//       "aria-label": "Type your message here",
//     },

//     showCancelButton: true,
//     title: "Select image",
//     input: "file",
//     input: "textarea",
//     inputAttributes: {
//       accept: "image/*",
//       "aria-label": "Upload your profile picture",
//     },
//   });

//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       Swal.fire({
//         title: "Your uploaded picture",
//         imageUrl: e.target.result,
//         imageAlt: "The uploaded picture",
//       });
//     };
//     reader.readAsDataURL(file);
//   }

//   if (text) {
//     Swal.fire(text);
//   }
// };

export const SweetChangeUser = async () => {
  const { value: fruit } = await Swal.fire({
    title: "Select field validation",
    input: "select",
    inputOptions: {
      user: "User",
      admin: "Admin",
    },
    inputPlaceholder: "Select a type",
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value) {
          resolve();
        } else {
          resolve("You need to select a type");
        }
      });
    },
  });

  if (fruit) {
    Swal.fire(`User type changed to: ${fruit}`);
  }
};

export const SweetArpoveReviews = () => {
  Swal.fire({
    title: "Success!",
    text: "The review was approved and it's visible at home",
    icon: "success",
  });
};

export const SweetRejectReviews = () => {
  Swal.fire({
    title: "Rejected!",
    text: "The review was rejected",
    icon: "error",
  });
};

export const SweetAprovedPayment = () => {
  Swal.fire({
    title: "Success!",
    text: "The review was approved and it's visible at home",
    icon: "success",
  });
};

export const SweetRejectedPayment = (props) => {
  Swal.fire({
    title: "Rejected!",
    text: props,
    icon: "error",
  });
};
