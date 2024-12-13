import React from "react";
import "./Skills.css";
import { logos } from "../../assets/logos/logos";

const Skills = () => {
  const getSkillItems = () => {
    const skillItems = [
      [logos.python, "Python"],
      [logos.tensorflow, "TensorFlow"],
      [logos.pytorch, "PyTorch"],
      [logos.java, "Java"],
      [logos.react, "React.js"],
      [logos.html, "HTML"],
      [logos.css, "CSS"],
      [logos.js, "JavaScript"],
      [logos.linux, "Linux"],
      [logos.nodejs, "Node.js"],
      [logos.R, "R"],
      [logos.TypeScript, "TypeScript"],
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
    <div className="skills" id="skills">
      <h1 className="section-header">Technical Skills</h1>
      {getSkillItems()}
    </div>
  );
};

export default Skills;
