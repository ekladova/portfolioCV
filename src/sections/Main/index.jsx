import React from "react";
import "./main.css";

const Main = ({ children }) => {
  return (
    <>
      <div className="main-container">{children}</div>
    </>
  );
};

export default Main;
