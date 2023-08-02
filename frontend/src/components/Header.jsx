import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="fixed-top">
      <Container fluid className="p-4">
        <Navbar.Brand href="#home">Power6</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#autho">Authors</Nav.Link>
            <Nav.Link href="#datas">Data source</Nav.Link>
            <Nav.Link href="#vis">visualization</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
