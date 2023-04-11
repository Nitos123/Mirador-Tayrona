import React from "react";
import "../styles/CardReview.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function CardReview({ review }) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (review.rating > i)
      stars.push(
        <FontAwesomeIcon key={i} className="icon-star-gold" icon={faStar} />
      );
    else stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }
  
  const imgURL = review.photoURL
    ? review.photoURL
    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";

  return (
    <div className="card-review box-shadow-hover">
      <div className="card-header">
        <div>
          <img src={imgURL} alt="image review" />
        </div>
        <div>{stars}</div>
      </div>
      <div className="card-content">
        <h3> {review.name} </h3>
        <p>{review.text}</p>
      </div>
    </div>
  );
}
