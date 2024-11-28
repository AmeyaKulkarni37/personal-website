import "./Projects.css";
import React from "react";
import profile_img from "../../assets/headshot.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="section-header">Projects</h1>
      <div className="projects-container">
        <div className="project">
          <img src={profile_img} alt="" className="project-thumbnail" />
          <div className="project-info">
            <h2>Project Name</h2>
            <p>Project Description</p>
            <div className="project-info-buttons">
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={profile_img} alt="" className="project-thumbnail" />
          <div className="project-info">
            <h2>Project Name</h2>
            <p>Project Description</p>
            <div className="project-info-buttons">
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={profile_img} alt="" className="project-thumbnail" />
          <div className="project-info">
            <h2>Project Name</h2>
            <p>Project Description</p>
            <div className="project-info-buttons">
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
