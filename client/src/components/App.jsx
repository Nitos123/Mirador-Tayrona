import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/Home";
import NavBar from "./NavBar";
import rooms from "../views/Rooms";
import Contact from "./Contact";
import Detail from "../views/Detail";
import Footer from "./Footer";
import Checkout from "../views/Checkout";
import Login from "../views/Login";
import LoginCreate from "../views/LoginCreate";
import CreateReview from "../views/CreateReview";
import { AuthProvider } from "../context/authContext";
import ProtectedRoute from "./ProtectedRoute";
// import CheckoutStripe from "../views/CheckoutStripe";
import "../styles/App.scss";

function App() {
  const location = useLocation();

  const hideNavBar = (path) => {
    return ["/checkout", "/login", "/loginCreate"].includes(path);
  };

  return (
    <div className="App">
      <AuthProvider>
        {!hideNavBar(location.pathname) && <NavBar />}
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/home" Component={Home} />
          <Route exact path="/detail/:id" Component={Detail} />
          <Route exact path="/rooms" Component={rooms} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/loginCreate" Component={LoginCreate} />
          <Route exact path="/createReview" Component={CreateReview} />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          {/* <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutStripe />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </AuthProvider>

      {!hideNavBar(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
