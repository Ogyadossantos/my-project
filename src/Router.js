import React from "react";
import { Container, Nav } from "react-bootstrap";
import {
  BrowserRouter as AppRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";


export default function Router() {
  return (
    <div>
      <AppRouter>
        <Container>
          <Nav className="mt-2">
            <Nav.Item>
              <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Link to="/about">About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact">Contact</Link>
            </Nav.Item>
            <Nav.Item className="mx-2">
              <Link to="/services">Services</Link>
            </Nav.Item>
          </Nav>
        </Container>
        <hr className="mt-2 , mb-4" />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route exact path="/services" element={<Services />} />
           
          </Routes>
        </Container>
      </AppRouter>
    </div>
  );
}