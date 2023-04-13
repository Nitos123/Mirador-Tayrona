import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from "react";
import { useAuth } from "../context/authContext";
import "../styles/DashboardAdmin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const TopBarAdmin = () => {
  const { user } = useAuth();
  return (
    <div className="rgd-container">
      <div className="txt-part">
        <h3>Rooms</h3>
      </div>

      <div className="notification-part">
        <Badge badgeContent={5} color="secondary">
          <NotificationsIcon />
        </Badge>
      </div>

      <div className="user-part">
        {user && (
          <>
            <p>
              {user.displayName
                ? `Hi ${user.displayName.split(" ")[0]}!`
                : "Howdy"}
            </p>
          </>
        )}

        {user && (
          <>
            {user.photoURL ? (
              <img src={user.photoURL} alt="perfil" />
            ) : (
              <FontAwesomeIcon className="profile-incognito" icon={faUserTie} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TopBarAdmin;
