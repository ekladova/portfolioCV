import React from "react";
import git from "../../assets/git.png";
import web from "../../assets/web.png";

import "./project.css";

const Project = ({
  header,
  image,
  text,
  gitLink,
  webLink,
  imageClass,
  ...props
}) => {
  return (
    <>
      <div className="index">
        <h3 className="skill-header">{header}</h3>
        <div className="project">
          <div className={`${imageClass} project-image hide`}></div>

          <div className="info-container">
            <div className="links">
              <a target="_blank" rel="noopener noreferrer" href={gitLink}>
                <img src={git} alt="github link" className="icon" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href={webLink}>
                <img src={web} alt="host link" className="icon" />
              </a>
            </div>

            <div>
              <p className="skills-p">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
