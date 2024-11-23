import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import profile_img from "../../assets/headshot.jpg";

const About = () => {
  return (
    <div className="about">
      <img src={profile_img} alt="Professional headshot of Ameya Kulkarni" />
      <div className="about-text">
        <h1>Ameya Kulkarni</h1>
        <h2>Computer Science and Mathematics Student at Duke University</h2>
        <p>Welcome to my personal website! (insert stuff) Enjoy!</p>
      </div>
    </div>
  );
};

export default About;
