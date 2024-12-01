import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <span className="name">Ameya Kulkarni</span>
      </NavLink>
      <ul className="nav-menu">
        <NavLink to="/">About</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
      <button className="download-resume">Download Resume</button>
    </div>
  );
};

export default Navbar;
