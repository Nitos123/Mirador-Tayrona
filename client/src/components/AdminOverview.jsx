import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/actions";
import { getAllRooms } from "../redux/actions";
import CardReview from "./CardReview";
import "../styles/DashboardAdmin.scss";
import axios from "axios";

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

      <div>
        {reviews?.length === 0 ? (
          ""
        ) : (
          <div>
            {reviews?.map((review) => {
              return (
                <div>
                  <CardReview review={review} />
                  <button>Show review</button>
                  <button>Hide hide</button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOverview;
