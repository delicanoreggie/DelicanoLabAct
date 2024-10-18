import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
import Submit from './components/sumbit';
import './App.css';


function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar bg="transparent" variant="white" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">My Profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="tab">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Submit />} />
      </Routes>
    </Router>
  );
}

export default App;