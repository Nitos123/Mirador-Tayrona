import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/actions";
import { getAllRooms } from "../redux/actions";
import CardReview from "./CardReview";
import "../styles/DashboardAdmin.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminOverview = (props) => {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.users);
  const allRooms = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  const [reviews, setReview] = useState();

  const allReviews = async () => {
    const allUsers = (await axios.get(`/usuarios`)).data;
    const newReviews = [];
    allUsers.forEach((user) => {
      if (user.coments.length > 0) {
        user.coments.forEach((comment) => {
          newReviews.push({
            ...comment,
            name: user.fullName,
            photoURL: user.image,
          });
        });
      }
    });
    setReview(newReviews);
  };

  useEffect(() => {
    allReviews();
  }, []);

  return (
    <div>
      <h2>Pequeño resumen de rooms user y reviews</h2>
      <h2>Admin users</h2>
      <Link to="/dashboard/users">
        <div>
          {allUsers?.map((user) => {
            return (
              <div>
                <img src={user.image} />
                <div>{user.fullName}</div>
                <div>{user.type}</div>
              </div>
            );
          })}
        </div>
      </Link>

      <h2>Last comments</h2>
      <Link to="/dashboard/reviews">
        <div>
          {reviews?.length === 0 ? (
            ""
          ) : (
            <div>
              {reviews?.map((review) => {
                return (
                  <div>
                    <CardReview review={review} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Link>

      <h2>Most booked rooms</h2>
      <Link to="/dashboard/rooms">
        <div className="admin-user-img">
          {allRooms?.map((room) => {
            return (
              <div>
                <img src={room.image} />
                {room.name}
              </div>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default AdminOverview;
