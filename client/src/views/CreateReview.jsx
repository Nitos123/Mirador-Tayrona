import React from "react";
import { useState } from "react";

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
      </form>
    </div>
  );
};

export default CreateReview;
