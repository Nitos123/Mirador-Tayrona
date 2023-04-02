import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import NavBar from "./NavBar";
import rooms from "../views/Rooms";
import Contact from "./Contact";
import Detail from "../views/Detail";
import Footer from "./Footer";
import "../styles/App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/home" Component={Home} />
        <Route exact path="/detail/:id" Component={Detail} />
        <Route exact path="/rooms" Component={rooms} />
        <Route exact path="/contact" Component={Contact} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
