import React, { useState, useEffect } from "react";
import "../styles/Rooms.scss";
import { postReview } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useAuth } from "../context/authContext";
import axios from "axios";

const validate = (state) => {
  const error = {};

  if (!state.review.length || state.review.length < 10) {
    error.review = "Review must be more than 10 characters!";
  }

  if (state.stars < 1 || state.stars > 5) {
    error.stars = "You must choose stars";
  }

  return error;
};

const initialState = {
  review: "",
  stars: 0,
};

const CreateReview = (props) => {
  const [review, setReview] = useState(initialState);
  const [blur, setBlur] = useState({});
  const dispatch = useDispatch();
  const errors = validate(review);

  const { user } = useAuth();

  const email = user && user.email;

  console.log(">>>>>>", email);

  const formValid = Object.keys(errors).length === 0;

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setReview({
      ...review,
      [property]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid) {
      dispatch(postReview(review));
      alert("Review created successfully!");
      setReview(initialState);
    }
  };

  const handleBlur = (event) => {
    setBlur({
      ...blur,
      [event.target.name]: true,
    });
  };

  const allUsers = async () => {
    const users = (await axios.get("/usuarios")).data;

    const findUserByEmail = (users, email) =>
      users.find((user) => user.email === email);

    const userEmail = await findUserByEmail(users, email);

    return userEmail;
  };

  console.log("---->", allUsers());

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
        <form onSubmit={(event) => handleSubmit(event)}>
          <div>
            <label>Stars: </label>

            <select name="stars" onBlur={handleBlur} onChange={changeHandler}>
              <option value="DEFAULT">Select</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐ </option>
              <option value="3">⭐⭐⭐ </option>
              <option value="2">⭐⭐ </option>
              <option value="1">⭐ </option>
            </select>
            {errors.stars && blur.stars && <p>{errors.stars}</p>}
          </div>

          <div>
            <label>Review: </label>
            <input
              name="review"
              type="text"
              value={review.review}
              onChange={changeHandler}
              onBlur={handleBlur}
            />
            {errors.review && blur.review && <p>{errors.review}</p>}
          </div>

          <div>
            <button type="submit" disabled={!formValid}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReview;
