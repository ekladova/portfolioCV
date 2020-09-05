import React from "react";
import "./infotab.css";
import { Tab } from "../../components";
import { NavLink } from "react-router-dom";

const InfoTab = ({ children }) => {
  return (
    <>
      <div className="infoTab-container">
        <div className="infoTab_frg">{children}</div>

        <div className="infoTab_bcg">
          <NavLink to="/about" className="tabLink">
            <Tab className="blue" text="About" textClass="about" />
          </NavLink>

          <NavLink to="/skills" className="tabLink">
            <Tab className="pink" text="Skills" textClass="skills" />
          </NavLink>

          <NavLink to="experience" className="tabLink">
            <Tab className="green" text="Experience" textClass="exp" />
          </NavLink>
          <NavLink to="projects" className="tabLink">
            <Tab className="purple" text="Projects" textClass="projects" />
          </NavLink>
          <NavLink to="misc" className="tabLink">
            <Tab className="yellow" text="Other" textClass="misc" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default InfoTab;
