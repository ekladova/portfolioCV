import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <NavLink className="name-link" exact to="/">
          <div className="name-container">
            <p className="logo name">Ekaterina Kladova</p>
            <p className="logo prof">Developer</p>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Header;
