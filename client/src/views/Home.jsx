import React from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import CardsReviewsContainer from "../components/CardsReviewsContainer";
import About from "../components/About";
import { Link } from "react-router-dom";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="mainImage">
        <h1>Estoy en el home</h1>
      </div>

      <div className="txtUnderMainImage">
        <p>Restorant</p>
        <p>Garage</p>
        <p>Resort</p>
        <p>Free Wifi</p>
      </div>

      <h1>Why you should stay here</h1>

      <div className="stayHere">
        <div className="stayHereTxt">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel
            sequi accusamus cumque, totam adipisci maxime magni error voluptatem
            quas consequuntur ullam maiores quaerat iste repellendus explicabo
            in tenetur vitae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nobis vel sequi accusamus cumque, totam adipisci maxime magni
            error voluptatem quas consequuntur ullam maiores quaerat iste
            repellendus explicabo in tenetur vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel
            sequi accusamus cumque, totam adipisci maxime magni error voluptatem
            quas consequuntur ullam maiores quaerat iste repellendus explicabo
            in tenetur vitae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nobis vel sequi accusamus cumque, totam adipisci maxime magni
            error voluptatem quas consequuntur ullam maiores quaerat iste
            repellendus explicabo in tenetur vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel
            sequi accusamus cumque, totam adipisci maxime magni error voluptatem
            quas consequuntur ullam maiores quaerat iste repellendus explicabo
            in tenetur vitae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nobis vel sequi accusamus cumque, totam adipisci maxime magni
            error voluptatem quas consequuntur ullam maiores quaerat iste
            repellendus explicabo in tenetur vitae.
          </p>
        </div>
        <div className="stayHereImg">
          <img
            src="https://www.kayak.es/rimg/kimg/c0/f2/74274b63-61d6fbf1-27.jpeg?width=1366&height=768&crop=true"
            alt="image review"
          />
        </div>
      </div>

      <h1>Take a look At our Rooms</h1>
      <div>
        <CardRoomContainer />
      </div>
      <section id="About">
        <About />
      </section>

      <div className="txtUnderMainImage">
        <p>Restorant</p>
        <p>Garage</p>
        <p>Resort</p>
        <p>Free Wifi</p>
      </div>

      <div>
        <CardsReviewsContainer />
      </div>
    </div>
  );
};

export default Home;
