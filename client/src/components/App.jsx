import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import NavBar from "./NavBar";
import rooms from "../views/Rooms";
import About from "./About";
import Contact from "./Contact";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/home" Component={Home} />
        <Route exact path="/services" Component={Home} />
        <Route exact path="/rooms" Component={rooms} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
