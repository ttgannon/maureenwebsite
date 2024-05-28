import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import NavBar from "./Navbar";
import { Shop } from "./Shop";
import "../App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
