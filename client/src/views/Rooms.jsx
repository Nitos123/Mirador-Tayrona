import React from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import CardServicesContainer from "../components/CardsServicesContainer";
import "../styles/Rooms.scss";
import { useDispatch } from "react-redux";
import { getMaxPrice, getMinPrice, getType } from "../redux/actions";

const rooms = (props) => {
  const dispatch = useDispatch();
  const handlermaxType = (e) => {
    const type = e.target.value;
    dispatch(getType(type));
  };

  const handlerMaxPrce = (e) => {
    const price = e.target.value
    if (price ==="maxPrice") {
      dispatch(getMaxPrice());
    }if (price==="minPrice") {
      dispatch(getMinPrice());
    }

  };



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
            <select onChange={(e)=>handlerMaxPrce(e)}>
              <option value="maxPrice">Price maximo</option>
              <option value="minPrice">Price minimo</option>
            </select>

            <select defaultValue={"Type"} onChange={handlermaxType}>
              <option disabled value="Type">
                Types
              </option>
              <option value="matrimonial">Matrimonial</option>
              <option value="individual">Individual</option>
              <option value="familiar">Familiar</option>
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

// const filteredProducts = products.filter((product) => {
//   const price = parseFloat(product.price);
//   if (minPrice && maxPrice) {
//     return price >= parseFloat(minPrice) && price <= parseFloat(maxPrice);
//   } else if (minPrice) {
//     return price >= parseFloat(minPrice);
//   } else if (maxPrice) {
//     return price <= parseFloat(maxPrice);
//   }
//   return true;
// })
