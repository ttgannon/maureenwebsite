import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar data-bs-theme="dark" className="bg-customRed flex justify-center">
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/artiststatement">Artist Statement</Nav.Link>
        <Nav.Link href="/gallery">Gallery</Nav.Link>
        <Nav.Link href="/exhibitions">Exhibitions</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/shop">Shop</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
