import "./Projects.css";
import { logos } from "../../assets/logos/logos.js";
import { assets } from "../../assets/assets.js";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="section-header">Projects</h1>
      <div className="projects-container">
        <div className="project">
          <img src={assets.isef_img} alt="" className="project-thumbnail" />
          <div className="project-info">
            <h2>Venom Molecular Function Prediction AI</h2>
            <div className="project-technologies">
              <h3>Built with: </h3>
              <img src={logos.python} alt="" />
              <img src={logos.tensorflow} alt="" />
            </div>
            <p>
              Award winning machine learning algorithm to predict venom and
              toxin protein molecular functions based on amino acid sequences to
              assist in determining how these compounds can be repurposed into
              medicine.
              <br /> <br /> Worked with TensorFlow/Keras to train a neural
              network with 95.6% validation accuracy and 0.95 F1 Score. Frontend
              implemented with Flask. <br />
              <br /> $40,000 Special Award winner and Fair Finalist at 2023
              Regeneron International Science and Engineering Fair (ISEF)
            </p>
            <div className="project-info-buttons">
              <a href="" target="_blank" rel="noreferrer noopener">
                Demo
              </a>
              <a
                href="https://github.com/AmeyaKulkarni37/Venomics-Science-Fair"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img src={assets.website_img} alt="" className="project-thumbnail" />
          <div className="project-info">
            <h2>Personal Website</h2>
            <div className="project-technologies">
              <h3>Built with: </h3>
              <img src={logos.react} alt="" />
              <img src={logos.html} alt="" />
              <img src={logos.css} alt="" />
              <img src={logos.js} alt="" />
            </div>
            <p>My personal portfolio website, primarily built with React.</p>
            <div className="project-info-buttons">
              <a
                href="https://ameyakulkarni37.github.io/personal-website/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Site
              </a>
              <a
                href="https://github.com/AmeyaKulkarni37/personal-website"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
