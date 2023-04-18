import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/actions";
import { getAllRooms } from "../redux/actions";
import CardReview from "./CardReview";
import "../styles/DashboardAdmin.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faUsers,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

const AdminOverview = (props) => { 

  return (
    <div className="view-overview">
      <div className="items-icons">
        <Link to="/dashboard/rooms">
          <FontAwesomeIcon icon={faHotel} />
          Rooms
        </Link>
      </div>

      <div className="items-icons">
        <Link to="/dashboard/users">
          <FontAwesomeIcon icon={faUsers} />
          Users
        </Link>
      </div>

      <div className="items-icons">
        <Link to="/dashboard/reviews">
          <FontAwesomeIcon icon={faCommentDots} />
          Reviews
        </Link>
      </div>
    </div>
  );
};

export default AdminOverview;
