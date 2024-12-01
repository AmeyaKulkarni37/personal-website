import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      <Routes>
        <Route path="/" element={<ScrollToSection sectionId="about" />} />
        <Route
          path="/experience"
          element={<ScrollToSection sectionId="experience" />}
        />
        <Route
          path="/projects"
          element={<ScrollToSection sectionId="projects" />}
        />
        <Route
          path="/skills"
          element={<ScrollToSection sectionId="skills" />}
        />
        <Route
          path="/contact"
          element={<ScrollToSection sectionId="contact" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// Helper component for scrolling to the target section
const ScrollToSection = ({ sectionId }) => {
  React.useEffect(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [sectionId]);

  return null;
};

export default App;
