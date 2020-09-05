import React from "react";
import "./Misc.css";

const Misc = () => {
  return (
    <>
      <div className="display misc-container">
        <h3 className="skill-header">Availability</h3>
        <p className="skills-p">Available immediately</p>
        <h3 className="skill-header">Notice Period</h3>
        <p className="skills-p">No notice perdiod required</p>
        <h3 className="skill-header">Best time to contact</h3>
        <p className="skills-p">
          <strong>Mon-Fri</strong>: 9:00 - 19:00 <br />
          <strong>Sat-Sun</strong>: 10:00 - 18:00 <br />
        </p>
      </div>
    </>
  );
};

export default Misc;
