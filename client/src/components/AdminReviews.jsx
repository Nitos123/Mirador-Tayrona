import CardReview from "./CardReview";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import setTotalNot from "../redux/actions"

import "../styles/CardsReviewsContainer.scss";
import axios from "axios";

export default function CardsReviewsContainer({totRevPending}) {
    const [reviews, setReview] = useState([]);
    const [desaprobados, setDesaprobados] = useState([])
  //aca se pasa a redux el valor
  const[totComents, setTotCommens] = useState(reviews.length)
  totRevPending(reviews.length);  // actulizo el valor de las que estan pendientes por aprobar
  const dispatch = useDispatch();
  
  dispatch(setTotalNot(reviews.length))

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
      desaprobadosReviews()
      allReviews();
    }, []);
  
    const approveReview = async (comentId, userId) => {
      try {
        const response = await axios.patch(`/usuarios/${userId}/coments/${comentId}`, {
          type: "approve",
        });
        
        allReviews()
        desaprobadosReviews()
      } catch (error) {
        console.error(error);
      }
    };
  
  
    const borrarReview = async (comentId, userId) => {
      try {
        const response = await axios.patch(`/usuarios/${userId}/coments/${comentId}`, {
          type: "deprecated",
        });
        
        allReviews()
        desaprobadosReviews()
      } catch (error) {
        console.error(error);
      }
    };
  // /usuario/:id/coments/:user
  const deleteReview = async (comentId, userId) => {
    try {
      const response = await axios.patch(`/usuario/${comentId}/coments/${userId}`, {
        type: "deprecated",
      });
      
      allReviews()
      desaprobadosReviews()
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
                <div key={review._id}>
                  <CardReview review={review} />
                  <button onClick={() => approveReview(review._id, review.userId)}>Show review</button>
                  <button onClick={()=> borrarReview(review._id,review.userId)} >Hide hide</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {desaprobados.length === 0 ? (
          "no hay reviews desaprobadas aun"
        ) : (
          <div> 
            <div>
            <h2>aqui se muestran las reviews que fueron desaprobadas, puedes borrarlas definitivamente si asi lo deseas</h2>
            </div>
          {desaprobados.map((review) => {
            return (
              <div key={review._id}>
                <CardReview review={review} />
               
                <button onClick={()=> deleteReview(review._id,review.userId)} >Delete Forever</button>
              </div>
            );
          })}
          </div>
        )}
      </div>
    </div>
  );
}
