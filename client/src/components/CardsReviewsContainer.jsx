import CardReview from "./CardReview";
import { register } from "swiper/element/bundle"; //import swiper slider - Con esto podemos hacer el carousel
import "../styles/CardsReviewsContainer.scss";

import React from "react";

export default function CardsReviewsContainer() {
  const reviews = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
              {reviews?.map((review, index) => {
                return (
                  <swiper-slide key={index}>
                    <CardReview />
                  </swiper-slide>
                );
              })}
            </swiper-container>
          </div>
        </div>
      )}
    </div>
  );
}
