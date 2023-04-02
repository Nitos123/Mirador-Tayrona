import React, { useState } from "react";
import CardRoomContainer from "../components/CardsRoomContainer";
import CardServicesContainer from "../components/CardsServicesContainer";
import "../styles/Rooms.scss";
import { useDispatch } from "react-redux";
import { getMaxPrice, getMinPrice, getType, reset } from "../redux/actions";

const rooms = (props) => {
  const dispatch = useDispatch();
  const handlermaxType = (e) => {
    const type = e.target.value;
    paged(1);
    dispatch(getType(type));
  };

  const handlerMaxPrce = (e) => {
    const price = e.target.value;
    paged(1);
    if (price === "maxPrice") {
      dispatch(getMaxPrice());
    }
    if (price === "minPrice") {
      dispatch(getMinPrice());
    }
  };

  //Control del paginado
  const [currentPage, setCurentPage] = useState(1);
  const roomsPerPage = 4;
  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;

  const paged = (pageNumber) => {
    setCurentPage(pageNumber);
  };

  return (
    <div>
      <div className="mainImageRooms"></div>
      <section className="section rooms">
        <div className="header-section">
          <h3>Take a look</h3>
          <h2>
            At our <span>services</span>
          </h2>
          <p>
            We offer a unique lodging experience with all the amenities you need
            to enjoy an unforgettable stay. Book now and live a unique
            experience!
          </p>
        </div>

        <section className="roomsFilters">
          <div>
            <select defaultValue={"Price"} onChange={(e) => handlerMaxPrce(e)}>
              <option disabled value="Price">Price</option>
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
            <button onClick={() => dispatch(reset())}>Reset</button>
            {/* <select>
              <option>Date</option>
            </select> */}
          </div>
        </section>

        <CardRoomContainer
          indexOfFirstRoom={indexOfFirstRoom}
          indexOfLastRoom={indexOfLastRoom}
          paged={paged}
          roomsPerPage={roomsPerPage}
        />
        <CardServicesContainer />
      </section>
    </div>
  );
};

export default rooms;
