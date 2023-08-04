import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom/dist";

const Header = () => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark" fixed="top">
      <Container fluid className="p-4">
        <Navbar.Brand href="#home">Power6</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="authors">Authors</NavLink>
            <NavLink to="sources">Data source</NavLink>
            <NavLink to="visualspage">Visualization</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
