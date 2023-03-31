import React from "react";
import '../styles/CardReview.scss';

export default function CardReview() {
  return (
    <div className="card-review">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure enim,
          obcaecati reprehenderit exercitationem animi modi consectetur vitae
          esse quam ab nisi adipisci impedit explicabo repudiandae, autem ipsam,
          tempore suscipit. Inventore!
        </p>
      </div>
    </div>
  );
}
