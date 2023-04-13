import CardReview from "./CardReview";
import { useEffect, useState } from "react";
import "../styles/CardsReviewsContainer.scss";
import axios from "axios";

export default function CardsReviewsContainer() {
  const [reviews, setReview] = useState();

  const allReviews = async () => {
    const allUsers = (await axios.get(`/usuarios`)).data;
    const newReviews = [];
    allUsers.forEach((user) => {
      if (user.coments.length > 0) {
        user.coments.forEach((comment) => {
          newReviews.push({
            ...comment,
            name: user.fullName,
            photoURL: user.image,
          });
        });
      }
    });
    setReview(newReviews);
  };

  useEffect(() => {
    allReviews();
  }, []);

  return (
    <div>
      <div>
        <h2>Borrar usuarios, hacer usuarios admin</h2>
      </div>

      <div>
        {reviews?.length === 0 ? (
          ""
        ) : (
          <div>
            {reviews?.map((review) => {
              return <CardReview review={review} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
