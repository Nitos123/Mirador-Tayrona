import React, { useState } from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import CardServicesContainer from "../components/CardsServicesContainer";
import "../styles/Rooms.scss";
import { useDispatch } from "react-redux";
import { getMaxPrice, getMinPrice, getType, reset } from "../redux/actions";

const initialState = {
  review: "",
  stars: 0,
};

const CreateReview = (props) => {
  const [review, setReview] = useState(initialState);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setReview({
      ...review,
      [property]: value,
    });
  };

  return (
    <div>
      <div className="mainImageRooms"></div>
      <section className="section rooms">
        <div className="header-section">
          <h2>
            Write your <span>review</span>
          </h2>
          <p>We care about your opinion</p>
        </div>
      </section>

      <div className="">
        <form>
          <div>
            <label>Stars: </label>
            <select
              name="stars"
              defaultValue={"DEFAULT"}
              onChange={changeHandler}
            >
              <option value="DEFAULT" disabled>
                Sort by name
              </option>
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐ </option>
              <option value="3">⭐⭐⭐ </option>
              <option value="2">⭐⭐ </option>
              <option value="1">⭐ </option>
            </select>
          </div>
          <div>
            <label>Review: </label>
            <input></input>
          </div>

          <div>
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReview;
