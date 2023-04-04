import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/Home";
import NavBar from "./NavBar";
import rooms from "../views/Rooms";
import Contact from "./Contact";
import Detail from "../views/Detail";
import Footer from "./Footer";
import ShoppingCar from "../views/ShoppingCar";
import Login from "../views/Login";

import "../styles/App.scss";

function App() {
  const location = useLocation();

  const hideNavBar = (path) => {
    return ["/cart", "/login"].includes(path);
  };

  return (
    <div className="App">
      {!hideNavBar(location.pathname) && <NavBar />}
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/home" Component={Home} />
        <Route exact path="/detail/:id" Component={Detail} />
        <Route exact path="/rooms" Component={rooms} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/cart" Component={ShoppingCar} />
        <Route exact path="/login" Component={Login} />
      </Routes>
      {!hideNavBar(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
