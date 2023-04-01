import React from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import CardsReviewsContainer from "../components/CardsReviewsContainer";
import About from "../components/About";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faWarehouse,
  faHotel,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="mainImageHome"></div>

      <section className="section">
        <div className="home-row-icons-hotels">
          <div className="fa-icons">
            <FontAwesomeIcon icon={faUtensils} />
            <p>Restorant</p>
          </div>
          <div className="fa-icons">
            <FontAwesomeIcon icon={faWarehouse} />
            <p>Garage</p>
          </div>
          <div className="fa-icons">
            <FontAwesomeIcon icon={faHotel} />
            <p>Resort</p>
          </div>
          <div className="fa-icons">
            <FontAwesomeIcon icon={faWifi} />
            <p>Free Wifi</p>
          </div>
        </div>

        <div className="header-section stayHere">
          <h2>
            Why You Should <span>Stay Here</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            alias suscipit saepe officia sed labore enim doloribus molestiae!
            Magni facilis possimus unde fuga, in expedita quibusdam sunt quae
            veritatis harum!
          </p>
        </div>

        <div className="two-columns">
          <div className="stayHereTxt">
            <div className="row-stay-here">
              <div className="number">1</div>
              <h3>Provide the best choice of Room.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                neque in dicta ipsa maiores.
              </p>
            </div>

            <div className="row-stay-here">
              <div className="number">2</div>
              <h3>Low price with Best Quality</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                neque in dicta ipsa maiores.
              </p>
            </div>

            <div className="row-stay-here">
              <div className="number">3</div>
              <h3>Restaurant Service</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                neque in dicta ipsa maiores.
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
      </section>

      <section className="section">
        <div className="header-section">
          <h2>Take a look At our Rooms</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            suscipit, animi officia quo, culpa minus sequi voluptas ad vitae
            veritatis voluptate dolores possimus vel omnis dicta perferendis?
            Ut, minus cum.
          </p>
        </div>
        <div>
          <CardRoomContainer />
        </div>
      </section>

      <section id="About">
        <About />
      </section>

      <div className="section">
        <div className="txtUnderMainImage">
          <div>
            <h2>Restorant</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              odit ex, qui quo recusandae hic quasi ratione explicabo
              consequatur. Nobis dolor temporibus aperiam facilis totam
              obcaecati distinctio mollitia! Id, ducimus?
            </p>
          </div>

          <div>
            <h2>Garage</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              odit ex, qui quo recusandae hic quasi ratione explicabo
              consequatur. Nobis dolor temporibus aperiam facilis totam
              obcaecati distinctio mollitia! Id, ducimus?
            </p>
          </div>

          <div>
            <h2>Resort</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              odit ex, qui quo recusandae hic quasi ratione explicabo
              consequatur. Nobis dolor temporibus aperiam facilis totam
              obcaecati distinctio mollitia! Id, ducimus?
            </p>
          </div>

          <div>
            <h2>Free Wifi</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              odit ex, qui quo recusandae hic quasi ratione explicabo
              consequatur. Nobis dolor temporibus aperiam facilis totam
              obcaecati distinctio mollitia! Id, ducimus?
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <CardsReviewsContainer />
      </section>
    </div>
  );
};

export default Home;
