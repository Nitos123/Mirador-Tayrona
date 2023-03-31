import CardReview from "./CardReview";
import { register } from "swiper/element/bundle"; //import swiper slider - Con esto podemos hacer el carousel

import React from "react";

export default function CardsReviewsContainer() {
  const reviews = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  register();

  return (
    <div>
      {reviews?.length === 0 ? (
        ""
      ) : (
        <div>
          <h1>Our Customer Feedback</h1>
          <h3>Don’t take our word for it. Trust our customers</h3>
          <swiper-container slides-per-view="3" speed="500" loop="true">
            {reviews?.map((review, index) => {
              return (
                <swiper-slide key={index}>
                  <CardReview />
                </swiper-slide>
              );
            })}
          </swiper-container>
        </div>
      )}
    </div>
  );
}
