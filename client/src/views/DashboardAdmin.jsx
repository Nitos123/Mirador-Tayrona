import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from "react";
import dashboard from "../assets/dashboard.svg";
import user from "../assets/user.svg";
import customer from "../assets/customer.svg";
import { Link } from "react-router-dom";
import "../styles/DashboardAdmin.scss";

const MainListItems = () => {
  return (
    <div className="left-title">
      <div>
        <h3>Mirador Tayrona Park</h3>
      </div>

      <div>
        <div>
          <Link>
            <img src={dashboard} alt="activity" />
            Rooms
          </Link>
        </div>

        <div>
          <Link>
            <img src={customer} alt="activity" />
            Users
          </Link>
        </div>

        <div>
          <Link>
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

const DashboardAdmin = () => {
  return (
    <div className="main-container-admin">
      <div className="left-container">
        <MainListItems />
      </div>

      <div className="rg-container">
        <div>
          <h3>Rooms</h3>
        </div>

        <div>
          <Badge badgeContent={5} color="secondary">
            <NotificationsIcon />
          </Badge>
        </div>

        <div>
          <img alt="Remy Sharp" id="user_img" src={user} />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
