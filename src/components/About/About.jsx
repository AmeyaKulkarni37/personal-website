import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="about" id="about">
      <img
        src={assets.profile_img}
        alt="Professional headshot of Ameya Kulkarni"
      />
      <div className="about-text">
        <h1>
          <span>I'm Ameya Kulkarni</span>, Computer Science and Mathematics
          Student at Duke University
        </h1>
        <p>
          Welcome to my personal website! Below you will find information
          regarding my work experiences, projects I've developed, my technical
          skills, and a contact section. Please don't hesitate to reach out!
          Enjoy!
        </p>
      </div>
    </div>
  );
};

export default About;
