import React from "react";
import "../styles/CardReview.scss";

export default function CardReview() {
  return (
    <div className="card-review box-shadow-hover">
      <div className="card-header">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt="image review"
          />
        </div>
        <div>⭐⭐⭐⭐⭐</div>
      </div>
      <div className="card-content">
        <h3>Floyd Miles</h3>
        <p>
          I had an incredible stay at this hostel surrounded by breathtaking
          forest views. The staff was friendly and attentive, making sure I had
          everything I needed to feel comfortable during my visit. The rooms
          were cozy and clean, and the common areas were perfect for relaxing
          after a long day of exploring the forest. Highly recommend this hostel
          for anyone looking for a peaceful and rejuvenating getaway in nature!
        </p>
      </div>
    </div>
  );
}
