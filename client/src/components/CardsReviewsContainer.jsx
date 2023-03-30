import CardReview from "./CardReview";

import React from "react";

export default function CardsReviewsContainer() {
  const reviews = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      {
        reviews?.length === 0 ? 
        '' :
        <div>
          <h2>Our Customer Feedback</h2>
          <h3>Don’t take our word for it. Trust our customers</h3>
          {
            reviews?.map( (review, index) => {
              return <CardReview key={index}/>
            })
          }
        </div>
      }
    </div>
  )
}
