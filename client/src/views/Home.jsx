import React from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import CardsReviewsContainer from "../components/CardsReviewsContainer";

const Home = () => {
  return (
    <div>
      <h1>Estoy en el home</h1>
      <div>
        <CardRoomContainer />
      </div>
      <div>
        <CardsReviewsContainer />
      </div>
    </div>
  );
};

export default Home;
