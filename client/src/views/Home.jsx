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

      <h1>Why You Should Stay Here</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam alias
        suscipit saepe officia sed labore enim doloribus molestiae! Magni
        facilis possimus unde fuga, in expedita quibusdam sunt quae veritatis
        harum!
      </p>

      <div className="stayHere">
        <div className="stayHereTxt">
          <div>
            <p>Provide the best choice of Room.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              neque in dicta ipsa maiores. Adipisci dolore veritatis numquam
              officiis incidunt esse corrupti eaque soluta, eos vitae omnis
              sint? Doloremque, iste.
            </p>
          </div>

          <div>
            <p>Low price with Best Quality</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              neque in dicta ipsa maiores. Adipisci dolore veritatis numquam
              officiis incidunt esse corrupti eaque soluta, eos vitae omnis
              sint? Doloremque, iste.
            </p>
          </div>

          <div>
            <p>Restaurant Service</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              neque in dicta ipsa maiores. Adipisci dolore veritatis numquam
              officiis incidunt esse corrupti eaque soluta, eos vitae omnis
              sint? Doloremque, iste.
            </p>
          </div>
        </div>
        <div className="stayHereImg">
          <img
            src="https://www.kayak.es/rimg/kimg/c0/f2/74274b63-61d6fbf1-27.jpeg?width=1366&height=768&crop=true"
            alt="image review"
          />
        </div>
      </div>

      <h1>Take a look At our Rooms</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        suscipit, animi officia quo, culpa minus sequi voluptas ad vitae
        veritatis voluptate dolores possimus vel omnis dicta perferendis? Ut,
        minus cum.
      </p>

      <div>
        <CardRoomContainer />
      </div>

      <section id="About">
        <About />
      </section>

      <div className="txtUnderMainImage">
        <h2>Restorant</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          odit ex, qui quo recusandae hic quasi ratione explicabo consequatur.
          Nobis dolor temporibus aperiam facilis totam obcaecati distinctio
          mollitia! Id, ducimus?
        </p>
        <h2>Garage</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          odit ex, qui quo recusandae hic quasi ratione explicabo consequatur.
          Nobis dolor temporibus aperiam facilis totam obcaecati distinctio
          mollitia! Id, ducimus?
        </p>
        <h2>Resort</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          odit ex, qui quo recusandae hic quasi ratione explicabo consequatur.
          Nobis dolor temporibus aperiam facilis totam obcaecati distinctio
          mollitia! Id, ducimus?
        </p>
        <h2>Free Wifi</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          odit ex, qui quo recusandae hic quasi ratione explicabo consequatur.
          Nobis dolor temporibus aperiam facilis totam obcaecati distinctio
          mollitia! Id, ducimus?
        </p>
      </div>

      <div>
        <CardsReviewsContainer />
      </div>
    </div>
  );
};

export default Home;
