import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../views/Home";
import NavBar from "./NavBar";
import rooms from "../views/Rooms";
import Contact from "./Contact";
import Detail from "../views/Detail";
import Footer from "./Footer";
import checkOut from "../views/Checkout";
import Login from "../views/Login";
import LoginCreate from "../views/LoginCreate";

import "../styles/App.scss";

function App() {
  const location = useLocation();

  const hideNavBar = (path) => {
    return ["/checkout", "/login", "/loginCreate"].includes(path);
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
        <Route exact path="/checkout" Component={checkOut} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/loginCreate" Component={LoginCreate} />
      </Routes>

      {!hideNavBar(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
