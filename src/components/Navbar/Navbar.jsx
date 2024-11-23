import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="name">Ameya Kulkarni</span>
      <ul className="nav-menu">
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Experience</NavLink>
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/">Skills</NavLink>
        <NavLink to="/">Contact</NavLink>
      </ul>
      <button className="download-resume">Download Resume</button>
    </div>
  );
};

export default Navbar;
