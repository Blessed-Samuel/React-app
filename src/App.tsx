import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Section from "./components/Section";
import Container from "./components/Container";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Section>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Container>
      </Section>
    </Router>
  );
};

export default App;
