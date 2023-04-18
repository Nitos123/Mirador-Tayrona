import CardReview from "./CardReview";
import { useEffect, useState } from "react";
import "../styles/CardsReviewsContainer.scss";
import axios from "axios";
import { SweetArpoveReviews, SweetRejectReviews } from "./Sweet";

export default function CardsReviewsContainer() {
  const [reviews, setReview] = useState([]);
  const [desaprobados, setDesaprobados] = useState([]);

  const allReviews = async () => {
    const allUsers = (await axios.get(`/usuarios`)).data;
    const newReviews = [];
    allUsers.forEach((user) => {
      if (user.coments.length > 0) {
        user.coments.forEach((comment) => {
          if (comment.type && comment.type === "pending") {
            newReviews.push({
              ...comment,
              name: user.fullName,
              photoURL: user.image,
            });
          }
        });
      }
    });
    setReview(newReviews);
  };

  const desaprobadosReviews = async () => {
    const allUsers = (await axios.get(`/usuarios`)).data;
    const newReviews = [];
    allUsers.forEach((user) => {
      if (user.coments.length > 0) {
        user.coments.forEach((comment) => {
          if (comment.type && comment.type === "deprecated") {
            newReviews.push({
              ...comment,
              name: user.fullName,
              photoURL: user.image,
            });
          }
        });
      }
    });
    setDesaprobados(newReviews);
  };

  useEffect(() => {
    desaprobadosReviews();
    allReviews();
  }, []);

  const approveReview = async (comentId, userId) => {
    try {
      const response = await axios.patch(
        `/usuarios/${userId}/coments/${comentId}`,
        {
          type: "approve",
        }
      );

      allReviews();
      desaprobadosReviews();
    } catch (error) {
      console.error(error);
    }
  };

  const borrarReview = async (comentId, userId) => {
    try {
      const response = await axios.patch(
        `/usuarios/${userId}/coments/${comentId}`,
        {
          type: "deprecated",
        }
      );

      allReviews();
      desaprobadosReviews();
    } catch (error) {
      console.error(error);
    }
  };
  // /usuario/:id/coments/:user
  const deleteReview = async (comentId, userId) => {
    try {
      const response = await axios.patch(
        `/usuario/${comentId}/coments/${userId}`,
        {
          type: "deprecated",
        }
      );

      allReviews();
      desaprobadosReviews();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <h2>ver todas las revies, escoger cual sale y cual no</h2>
      </div>

      <div>
        {reviews.length === 0 ? (
          "No hay reviews pendientes por aprobar"
        ) : (
          <div>
            {reviews.map((review) => {
              return (
                <div>
                  <CardReview review={review} />

                  <button
                    onClick={() => deleteReview(review._id, review.userId)}
                  >
                    Delete Forever
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
