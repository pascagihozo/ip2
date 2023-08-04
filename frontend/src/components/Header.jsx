import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom/dist";

const Header = () => {

  return (
    <Navbar expand="lg" bg="dark" className="text-light" fixed="top">
      <Container fluid className="p-2">
        <Navbar.Brand className="text-light" href="/">Power6</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink className='ml-2' to="/">Home</NavLink>
            <NavLink className='ml-2' to="authors">Authors</NavLink>
            <NavLink className='ml-2' to="sources">Data source</NavLink>
            <NavLink className='ml-2' to="visualspage">Visualization</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
