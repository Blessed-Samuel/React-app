import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import About from "./apps/About";
import Home from "./apps/Home";
import Login from "./apps/Login";
import Signup from "./apps/Signup";
import Security from "./apps/Security";
import Careers from "./apps/Careers";
import Container from "./components/Container";
import Section from "./components/Section";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Section>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/security" element={<Security />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </Section>
    </Router>
  );
};

export default App;
