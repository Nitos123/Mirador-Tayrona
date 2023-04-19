import CardReview from "./CardReview";
import { useEffect, useState } from "react";
import "../styles/CardsReviewsContainer.scss";
import axios from "axios";
import CardReviewTable from "./AdminReviewsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

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
    <div className=" view-reviews view-table">
      <div>
        <h2>New Reviews</h2>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Stars</th>
              <th>Full Name</th>
              <th>Comment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length === 0 ? (
              "No hay reviews pendientes por aprobar"
            ) : (
              <>
                {reviews.map((review) => {
                  return (
                    <tr key={review.id}>
                      <CardReviewTable review={review} />
                      <td>
                        <button
                          className="icons-buttons"
                          onClick={() =>
                            approveReview(review._id, review.userId)
                          }
                        >
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </button>
                        <button
                          className="icons-buttons"
                          onClick={() =>
                            deleteReview(review._id, review.userId)
                          }
                        >
                          <FontAwesomeIcon icon={faBan} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
      {/* <div>
        {desaprobados.length === 0 ? (
          "no hay reviews desaprobadas aun"
        ) : (
          <div>
            <div>
              <h2>
                aqui se muestran las reviews que fueron desaprobadas, puedes
                borrarlas definitivamente si asi lo deseas
              </h2>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Estrellas</th>
                  <th>Nombre</th>
                  <th>Reseña</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {desaprobados.map((review) => {
                  return (
                    <>
                      <CardReview review={review} />

                      <button
                        onClick={() => deleteReview(review._id, review.userId)}
                      >
                        Delete Forever
                      </button>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div> */}
    </div>
  );
}
