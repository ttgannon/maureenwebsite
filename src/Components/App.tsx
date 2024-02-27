import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

function App() {
  return (
    <>
      <Navbar data-bs-theme="dark" className="justify-content-center">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#artiststatement">Artist Statement</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link href="#exhibitions">Exhibitions</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#Shop">Shop</Nav.Link>
        </Nav>
      </Navbar>
      <h1>"Quote by Maureen"</h1>
      <img src="src/assets/maureen_squires.png"></img>
    </>
  );
}

export default App;
