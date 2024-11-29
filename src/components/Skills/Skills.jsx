import "./Skills.css";
import html from "../../assets/logos/html5.svg";
import css from "../../assets/logos/css3.svg";
import js from "../../assets/logos/JS.svg";
import python from "../../assets/logos/python.svg";
import react from "../../assets/logos/react.svg";
const logo_path = "src/assets/logos";

const Skills = () => {
  const getSkillItems = () => {
    const skillItems = [
      "css3.svg",
      "html5.svg",
      "java.svg",
      "JS.svg",
      "linux.svg",
      "nodejs.svg",
      "python.svg",
      "R.svg",
      "react.svg",
      "TypeScript.svg",
    ];

    return (
      <ul>
        {skillItems.map((img) => {
          return (
            <li>
              <img src={`${logo_path}${img}`} alt={img.split(".")[0]} />
              <p>{`${img}`}</p>
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
