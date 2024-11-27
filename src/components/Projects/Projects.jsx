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
            <p>Project Name</p>
            <div className="project-info-buttons">
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={profile_img} alt="" className="project-thumbnail" />
          <div className="project-info"></div>
        </div>
        <div className="project">
          <img src={profile_img} alt="" className="project-thumbnail" />
          <div className="project-info"></div>
        </div>
        <div className="project">
          <img src={profile_img} alt="" className="project-thumbnail" />
          <div className="project-info"></div>
        </div>
        <div className="project">
          <img src={profile_img} alt="" className="project-thumbnail" />
          <div className="project-info"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
