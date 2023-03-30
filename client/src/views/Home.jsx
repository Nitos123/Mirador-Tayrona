import React from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import CardsReviewsContainer from "../components/CardsReviewsContainer";
import About from "../components/About";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Estoy en el home</h1>
      <img
        src="https://www.kayak.es/rimg/kimg/c0/f2/74274b63-61d6fbf1-27.jpeg?width=1366&height=768&crop=true"
        alt="image review"
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel sequi
        accusamus cumque, totam adipisci maxime magni error voluptatem quas
        consequuntur ullam maiores quaerat iste repellendus explicabo in tenetur
        vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        vel sequi accusamus cumque, totam adipisci maxime magni error voluptatem
        quas consequuntur ullam maiores quaerat iste repellendus explicabo in
        tenetur vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel sequi
        accusamus cumque, totam adipisci maxime magni error voluptatem quas
        consequuntur ullam maiores quaerat iste repellendus explicabo in tenetur
        vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        vel sequi accusamus cumque, totam adipisci maxime magni error voluptatem
        quas consequuntur ullam maiores quaerat iste repellendus explicabo in
        tenetur vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel sequi
        accusamus cumque, totam adipisci maxime magni error voluptatem quas
        consequuntur ullam maiores quaerat iste repellendus explicabo in tenetur
        vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        vel sequi accusamus cumque, totam adipisci maxime magni error voluptatem
        quas consequuntur ullam maiores quaerat iste repellendus explicabo in
        tenetur vitae.
      </p>
      <div>
        <CardRoomContainer />
      </div>

      <section id="About">
        <About />
      </section>

      <div>
        <CardsReviewsContainer />
      </div>
    </div>
  );
};

export default Home;
