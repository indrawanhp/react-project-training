import React from "react";
import { Button, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

function Navigation() {
  return (
    <>
      <Navbar key="lg" bg="light" expand="lg" className="mb-3 navbar">
        <Container fluid>
          <Navbar.Brand href="/" className="text-light">
            MOVIE-LIB <i className="fab fa-typo3" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/" className="text-light">
                  Home
                </Nav.Link>
              </Nav>
              <Button variant="outline-light">
                <Link to="/login">Login</Link>
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MOVIE-LIB <i className="fab fa-typo3" />
          </Link>
        </div>
      </nav> */}
    </>
  );
}

export default Navigation;
