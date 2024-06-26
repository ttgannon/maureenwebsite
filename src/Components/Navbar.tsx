import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      expand="sm"
      data-bs-theme="dark"
      className="bg-customRed flex items-center justify-center"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="flex justify-center items-center"
        >
          <Nav className="gap-6">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/statement">Artist Statement</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/exhibitions">Exhibitions</Nav.Link>
            <Nav.Link href="/custom">Custom</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
