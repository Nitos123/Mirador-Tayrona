import CardReview from "./CardReview";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews, getAllRooms } from "../redux/actions";
import { register } from "swiper/element/bundle"; //import swiper slider - Con esto podemos hacer el carousel
import "../styles/CardsReviewsContainer.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import axios from "axios";

export default function CardsReviewsContainer() {
  const [reviews, setReview] = useState();
  const allReviews = async () => {
    const allUsers = (await axios.get(`/usuarios`)).data;
    console.log("usuarios--->", allUsers);
    const newReviews = [];
    allUsers.forEach((user) => {
      if (user.coments.length > 0) {
        user.coments.forEach((comment) => {
          newReviews.push({
            ...comment,
            name: user.fullName,
          });
        });
      }
    });
    console.log(newReviews)
    setReview(newReviews);
  };
  console.log("Reviews--->", reviews);
  useEffect(() => {
    allReviews();
  }, []);
  const { user } = useAuth();

  register();

  return (
    <div className="container-reviews">
      {reviews?.length === 0 ? (
        ""
      ) : (
        <div>
          <div className="header-section">
            <h2>Our Customer Feedback</h2>
            <h3>Don’t take our word for it. Trust our customers</h3>
          </div>
          <div className="carousel-slider">
            <swiper-container
              slides-per-view="4"
              speed="500"
              loop="true"
              space-between="32"
            >
              {reviews?.map((review) => {
                return (
                  <swiper-slide key={review._id}>
                    <CardReview review={review} />
                  </swiper-slide>
                );
              })}
            </swiper-container>
          </div>

          <div>
            {user && (
              <div>
                <Link to="/createReview">
                  <button>Write a review</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
