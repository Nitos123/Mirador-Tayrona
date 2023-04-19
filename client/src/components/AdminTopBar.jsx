import Badge from "@material-ui/core/Badge";
import React from "react";
import { useAuth } from "../context/authContext";
import "../styles/DashboardAdmin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faBell } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopBarAdmin = ({ totPendRev }) => {
  const count = useSelector((state) => state.totalComments);
  //aca quedaria usar la actionm
  const { user } = useAuth();
  return (
    <div className="rgd-container">
      <div className="txt-part">{/* <h3>{props.place}</h3> */}</div>

      <div className="notification-icon">
        <Link to="/dashboard/reviews">
          <FontAwesomeIcon
            icon={faBell}
            style={{ fontSize: "1.5rem", marginTop: "1rem " }}
          />
          <span className="notification-count">{count}</span>
        </Link>
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
