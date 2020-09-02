import React from "react";
import "./tab.css";

const Tab = ({ className, text, textClass }) => {
  return (
    <>
      <div className={`tab ${className}`}>
        <p className={textClass}>{text}</p>
      </div>
    </>
  );
};

export default Tab;
