import "./Projects.css";
import React from "react";
import profile_img from "../../assets/headshot.jpg";
import html from "../../assets/logos/html5.svg";
import css from "../../assets/logos/css3.svg";
import js from "../../assets/logos/JS.svg";
import python from "../../assets/logos/python.svg";
import react from "../../assets/logos/react.svg";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="section-header">Projects</h1>
      <div className="projects-container">
        <div className="project">
          <img src={profile_img} alt="" className="project-thumbnail" />
          <div className="project-info">
            <h2>Venom Molecular Function Prediction AI</h2>
            <div className="project-technologies">
              <h3>Built with: </h3>
              <img src={python} alt="" />
            </div>
            <p>
              Award winning machine learning algorithm to predict venom and
              toxin protein molecular functions based on amino acid sequences to
              assist in determining how these compounds can be repurposed into
              medicine.
              <br /> <br /> Worked with TensorFlow/Keras to train a neural
              network with 95.6% validation accuracy and 0.95 F1 Score. <br />
              <br /> $40,000 Special Award winner and Fair Finalist at 2023
              Regeneron International Science and Engineering Fair (ISEF)
            </p>
            <div className="project-info-buttons">
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={profile_img} alt="" className="project-thumbnail" />
          <div className="project-info">
            <h2>Personal Website</h2>
            <div className="project-technologies">
              <h3>Built with: </h3>
              <img src={react} alt="" />
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={js} alt="" />
            </div>
            <p>Project Description</p>
            <div className="project-info-buttons">
              <button>Live Site</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
