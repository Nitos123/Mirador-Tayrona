import React from "react";
import { useLocation } from "react-router-dom";

import "../styles/DashboardAdmin.scss";
import MainListItems from "../components/AdminNavBar";
import TopBarAdmin from "../components/AdminTopBar";

const DashboardAdmin = () => {
  const location = useLocation();

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

          <div>{}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
