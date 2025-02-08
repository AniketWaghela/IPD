// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">
          <img 
            src="/logo.svg" 
            alt="Aptitude-test.com" 
            height="30" 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#aptitude-tests">Aptitude Tests</Nav.Link>
            <Nav.Link href="#prep-access">Prep Access</Nav.Link>
            <Nav.Link href="#articles">Articles & News</Nav.Link>
            <Nav.Link href="#mobile-app">Mobile App</Nav.Link>
            <Nav.Link href="#employers">Employers</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-primary" className="me-2" onClick={handleLoginClick}>Log in</Button>
            <Button variant="warning" onClick={handleSignUpClick}>Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
