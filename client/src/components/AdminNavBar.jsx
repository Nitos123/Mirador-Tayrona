import React from "react";
import dashboard from "../assets/dashboard.svg";
import customer from "../assets/customer.svg";
import { Link } from "react-router-dom";
import "../styles/DashboardAdmin.scss";

const MainListItems = () => {
  return (
    <div className="left-title">
      <div>
        <Link to="/home">
          <h3>
            Mirador <br /> Tayrona Park
          </h3>
        </Link>
      </div>

      <div>
        <div>
          <Link to="/dashboard">
            <img src={customer} alt="activity" />
            Overview
          </Link>
        </div>

        <div>
          <Link to="/dashboard/rooms">
            <img src={dashboard} alt="activity" />
            Rooms
          </Link>
        </div>

        <div>
          <Link to="/dashboard/users">
            <img src={customer} alt="activity" />
            Users
          </Link>
        </div>

        <div>
          <Link to="/dashboard/reviews">
            <img src={dashboard} alt="activity" />
            Reviews
          </Link>
        </div>
      </div>

      <div>
        <Link to="/home">
          <button>Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default MainListItems;
