import "./Experience.css";
import React from "react";
import profile_img from "../../assets/headshot.jpg";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="section-header">Work Experience</h1>
      <div className="experiences">
        <div className="experience-item">
          <img src={profile_img} alt="" className="experience-img"></img>

          <div className="experience-info">
            <h2 className="experience-title">UT Southwestern Medical Center</h2>
            <h3 className="experience-role">
              Computational Biology Research Intern
            </h3>
            <ul className="experience-description">
              <li>
                Developed multiple convolutional neural network (CNN) models for
                nuclear segmentation and cell classification in kidney and colon
                clear cell renal cell carcinoma (ccRCC) cancer tissue using
                PyTorch
              </li>
              <li>
                Optimized machine learning workflow and increased existing lab
                model performance metrics by 15-20%; experimented with different
                batch normalization techniques, epoch counts, and input patch
                sizes
              </li>
              <li>
                Annotated 100+ microscope images in QuPath and utilized Groovy
                scripts to streamline the data processing pipeline, increased
                lab dataset size by 50% which resulted in a 5-10% increase in
                each model's performance
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-item">
          <img src={profile_img} alt="" className="experience-img" />

          <div className="experience-info">
            <h2 className="experience-title">Coppell Debate Academy</h2>
            <h3 className="experience-role">Debate Instructor</h3>
            <ul className="experience-description">
              <li>
                Taught 2 hour weekly classes to 500+ middle school students
                about the fundamentals of speech and debate, worked as lead
                instructor for the policy debate lab and led a team of 6
                instructors
              </li>
              <li>
                Led public speaking drills, organized research sessions, judged
                practice debates, and provided constructive feedback
              </li>
              <li>
                Volunteered and assisted in organizing the Coppell Classic
                tournament for 2 years with over 1,000 competitors
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-item">
          <img src={profile_img} alt="" className="experience-img" />

          <div className="experience-info">
            <h2 className="experience-title">Kumon North America</h2>
            <h3 className="experience-role">Math and Reading Tutor</h3>
            <ul className="experience-description">
              <li>
                Tutored 100+ students of grades K-9 in mathematics and reading
                comprehension; taught a wide variety of topics from basic
                addition to pre-calculus and received excellent feedback from
                clients
              </li>
              <li>
                Administered and graded curriculum, homework, and tests;
                collaborated with a team of 10+ instructors
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
