import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/DashboardAdmin.scss";
import MainListItems from "../components/AdminNavBar";
import TopBarAdmin from "../components/AdminTopBar";
import AdminUsers from "../components/AdminUsers";
import AdminReview from "../components/AdminReviews";
import AdminRooms from "../components/AdminRooms";

const DashboardAdmin = () => {
  const location = useLocation();

  let locationFunction = (path) => {
    if (path === "/dashboard/rooms") return <AdminRooms />;
    if (path === "/dashboard/users") return <AdminUsers />;
    if (path === "/dashboard/reviews") return <AdminReview />;
  };

  return (
    <div>
      <div className="main-container-admin">
        <div className="left-container">
          <MainListItems />
        </div>

        <div className="rg-main-container">
          <div className="rgd-container">
            <TopBarAdmin />
          </div>

          <div>{locationFunction(location.pathname)}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
