import React from "react";
import CardRoomContainer from "../components/CardsRoomContainer";

const Detail = (props) => {
  return (
    <div>
      <div className="mainImageRooms"></div>
      <div className="section">
        <h1>Estoy en Detail</h1>
        <div>
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Iusto, laudantium repudiandae ratione, ipsum quos quisquam
            modi a culpa aut esse sapiente facilis magnam, itaque sequi dolorum?
            Tenetur maiores recusandae reiciendis? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Nobis consequatur delectus ullam
            dolorem nesciunt blanditiis officia minus nostrum, veritatis sequi
            obcaecati saepe minima doloremque. Vitae eos delectus blanditiis
            debitis omnis!
          </p>
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/85/70/8c/hostel-g.jpg?w=1200&h=-1&s=1"
            alt="image review"
          />
          <button>Book this room!</button>

          <h1>More rooms</h1>
          <CardRoomContainer />
        </div>
      </div>
    </div>
  );
};

export default Detail;
