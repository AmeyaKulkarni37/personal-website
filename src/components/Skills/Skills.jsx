import React from "react";
import "./Skills.css";
import html from "../../assets/logos/html5.svg";
import css from "../../assets/logos/css3.svg";
import java from "../../assets/logos/java.svg";
import js from "../../assets/logos/JS.svg";
import python from "../../assets/logos/python.svg";
import react from "../../assets/logos/react.svg";
import linux from "../../assets/logos/linux.svg";
import nodejs from "../../assets/logos/nodejs.svg";
import R from "../../assets/logos/R.svg";
import TypeScript from "../../assets/logos/TypeScript.svg";

const Skills = () => {
  const getSkillItems = () => {
    const skillItems = [
      [python, "Python"],
      [java, "Java"],
      [react, "React.js"],

      [html, "HTML"],
      [css, "CSS"],
      [js, "JavaScript"],
      [linux, "Linux"],
      [nodejs, "Node.js"],

      [R, "R"],

      [TypeScript, "TypeScript"],
    ];

    return (
      <ul className="skill-items">
        {skillItems.map((imgArr) => {
          return (
            <li key={imgArr[1]} id={imgArr[1]}>
              <img src={imgArr[0]} alt={imgArr[1]} />

              <p>{imgArr[1]}</p>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="skills">
      <h1 className="section-header">Technical Skills</h1>
      {getSkillItems()}
    </div>
  );
};

export default Skills;
