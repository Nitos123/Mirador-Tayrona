import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValueType, getAllUsers } from "../redux/actions";
import "../styles/DashboardAdmin.scss";
import { SweetDelete, SweetChangeUser } from "./Sweet";

const AdminUsers = (props) => {
  const [messages, setMessages] = useState({});
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const typeAdmin = (id) => {
    const ids = id;
    const type = "admin";
    dispatch(changeValueType(ids, type)).then((res) => {
      setMessages((prevMessages) => ({ ...prevMessages, [id]: res }));
      setTimeout(() => {
        setMessages((prevMessages) => ({ ...prevMessages, [id]: null }));
      }, 5000); // remove message after 10 seconds
    });
  };

  const typeUser = (id) => {
    const ids = id;
    const type = "user";
    dispatch(changeValueType(ids, type)).then((res) => {
      setMessages((prevMessages) => ({ ...prevMessages, [id]: res }));
      setTimeout(() => {
        setMessages((prevMessages) => ({ ...prevMessages, [id]: null }));
      }, 5000); // remove message after 10 seconds
    });
  };

  const blockUser = (id) => {
    Sweet().then((confirmed) => {
      if (confirmed) {
        const type = "block";
        dispatch(changeValueType(id, type)).then((res) => {
          setMessages((prevMessages) => ({ ...prevMessages, [id]: res }));
          setTimeout(() => {
            setMessages((prevMessages) => ({ ...prevMessages, [id]: null }));
          }, 5000); // remove message after 10 seconds
        });
      }
    });
  };

  return (
    <div>
      <div>
        <h2>Bloquea usuarios o hazlos admins</h2>
      </div>

      <div>
        {allUsers?.map((user) => {
          return (
            <div>
              <img src={user.image} />
              <div>{user.fullName}</div>
              <div>{user.type}</div>
              {messages[user._id] && <p>{messages[user._id]}</p>}
              <button onClick={() => typeAdmin(user._id)}>make it admin</button>
              <button onClick={() => typeUser(user._id)}>make it a user</button>
              <button onClick={() => blockUser(user._id)}>block user</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminUsers;
