import React from "react";
import "./About.css";
import profile_img from "../../assets/headshot.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <img src={profile_img} alt="Professional headshot of Ameya Kulkarni" />
      <div className="about-text">
        <h1>
          <span>I'm Ameya Kulkarni</span>, Computer Science and Mathematics
          Student at Duke University
        </h1>
        <p>Welcome to my personal website! (insert stuff) Enjoy!</p>
      </div>
    </div>
  );
};

export default About;
