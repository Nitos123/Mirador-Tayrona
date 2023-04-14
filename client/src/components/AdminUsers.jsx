import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/actions";
import "../styles/DashboardAdmin.scss";
 import Sweet from "./Sweet";

const AdminUsers = (props) => {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  console.log(allUsers);
  return (
    <div>
      <div>
        <h2>Borrar usuarios, hacer usuarios admin</h2>
      </div>

      <div>
        {allUsers?.map((user) => {
          return (
            <div>
              <img src={user.image} />
              <div>{user.fullName}</div>
              <div>{user.type}</div>
              <button>Change user permition</button>
              <button onClick={() => Sweet()}>Delete User</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminUsers;
