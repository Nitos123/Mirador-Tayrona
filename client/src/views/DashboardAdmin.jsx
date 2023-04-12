import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from "react";
import dashboard from "../assets/dashboard.svg";
import { useAuth } from "../context/authContext";
import customer from "../assets/customer.svg";
import { Link } from "react-router-dom";
import "../styles/DashboardAdmin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const { user } = useAuth();

  return (
    <div className="main-container-admin">
      <div className="left-container">
        <MainListItems />
      </div>

      <div className="rg-container">
        <div className="txt-part">
          <h3>Rooms</h3>
        </div>

        <div className="notification-part">
          <Badge badgeContent={5} color="secondary">
            <NotificationsIcon />
          </Badge>
        </div>

        <div className="user-part">
          <div>
            <p>
              {user.displayName
                ? `Hi ${user.displayName.split(" ")[0]}!`
                : "Howdy"}
            </p>
          </div>

          <div>
            {user.photoURL ? (
              <img src={user.photoURL} alt="perfil" />
            ) : (
              <FontAwesomeIcon className="profile-incognito" icon={faUserTie} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
