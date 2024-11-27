import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      {/* <Routes>
        <Route path="/" element={<About />} />
        <Route path="/" element={<Experience />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
