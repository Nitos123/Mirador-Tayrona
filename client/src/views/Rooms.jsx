import React from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import CardServicesContainer from "../components/CardsServicesContainer";
import "../styles/Rooms.scss";

const rooms = (props) => {
  return (
    <div>
      <div className="mainImageRooms"></div>
      <div className="section">
        <section>
          <div>
            <h1>Room and Services </h1>
            <h1>Take a Look At Our Rooms</h1>
            <p>
              We offer a unique lodging experience with all the amenities you
              need to enjoy an unforgettable stay. Book now and live a unique
              experience!
            </p>
          </div>
        </section>

        <section className="roomsFilters">
          <div>
            <select>
              <option>Price</option>
            </select>
            <select>
              <option>Type</option>
            </select>
            <select>
              <option>Date</option>
            </select>
          </div>
        </section>

        <CardRoomContainer />
        <CardServicesContainer />
      </div>
    </div>
  );
};

export default rooms;
