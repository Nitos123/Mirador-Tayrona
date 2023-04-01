import React from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import CardsReviewsContainer from "../components/CardsReviewsContainer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faWarehouse,
  faHotel,
  faWifi,
  faBed,
  faMartiniGlassCitrus,
  faMapLocationDot,
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
              <div className="circle-icon">1</div>
              <h3>Provide the best choice of Room.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                neque in dicta ipsa maiores.
              </p>
            </div>

            <div className="row-stay-here">
              <div className="circle-icon">2</div>
              <h3>Low price with Best Quality</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                neque in dicta ipsa maiores.
              </p>
            </div>

            <div className="row-stay-here">
              <div className="circle-icon">3</div>
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

      <section className="section rooms">
        <div className="header-section">
          <h3>Take a look</h3>
          <h2>
            At our <span>rooms</span>
          </h2>
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

      <section id="About" className="about">
        <div className="aboutContainer">
          <div className="about-content">
            <h2>About us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              quasi id molestiae cumque labore dolore quos in accusantium,
              similique incidunt rem neque sapiente eum. Quibusdam laborum
              obcaecati error provident fugit.Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Officiis quasi id molestiae cumque
              labore dolore quos in accusantium, similique incidunt rem neque
              sapiente eum.
            </p>
            <p>
              Quibusdam laborum obcaecati error provident fugit.Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Officiis quasi id
              molestiae cumque labore dolore quos in accusantium, similique
              incidunt rem neque sapiente eum. Quibusdam laborum obcaecati error
              provident fugit.
            </p>
          </div>
          <div className="about-img">
            <img
              src="https://www.kayak.es/rimg/kimg/c0/f2/74274b63-61d6fbf1-27.jpeg?width=1366&height=768&crop=true"
              alt="image review"
            />
          </div>
        </div>
      </section>

      <div className="section">
        <div className="home-grid-icons-hotels">
          <div className="fa-icons">
            <div className="circle-icon">
              <FontAwesomeIcon icon={faBed} />
            </div>
            <h4>The Best Rooms</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              odit ex, qui quo recusandae hic quasi
            </p>
          </div>

          <div className="fa-icons">
            <div className="circle-icon">
              <FontAwesomeIcon icon={faMartiniGlassCitrus} />
            </div>
            <h4>Restorant</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              odit ex, qui quo recusandae hic quasi
            </p>
          </div>

          <div className="fa-icons">
            <div className="circle-icon">
              <FontAwesomeIcon icon={faUtensils} />
            </div>
            <h4>Lounge Bar</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              odit ex, qui quo recusandae hic quasi
            </p>
          </div>

          <div className="fa-icons">
            <div className="circle-icon">
              <FontAwesomeIcon icon={faMapLocationDot} />
            </div>
            <h4>Touristic Park</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              odit ex, qui quo recusandae hic quasi
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
