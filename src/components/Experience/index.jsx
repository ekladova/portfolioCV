import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <div className="display experience-container">
        <h2 className="section-header">Professional Experience </h2>
        <h3 className="skill-header">Front End Development Intern </h3>
        <p className="skills-p">
          I was responsible for WordPress theme customisation with custom HTML
          and CSS. Website design and UX/UI were assessed to establish and
          maintain the brand's identity.
        </p>
        <h3 className="skill-header">Marketing Assistant </h3>
        <p className="skills-p">
          As an intern for a BTB events company "StarDanceUK", I was responsibe
          for contacting and building relationships with new clients, as well as
          expanding the client database for future cooperation.
        </p>
        <h3 className="skill-header">Digital Media Assistant </h3>
        <p className="skills-p">
          I was working with an e-commerce business "SlickStock" to increase
          their reach to the potential clients. I was responsible for SEO and
          Market Research, as well as updating their online shop.
        </p>
        <h2>Education </h2>
        <h3 className="skill-header">
          (BA) PR and Advertising, University of Westminster
        </h3>
        <p className="skills-p">
          I completed my course with a 2:1 and a First-Class Dissertation
          project in Video Game Marketing on streaming platforms. <br />
          The course provided me with confidence in understanding digital
          advertising, marketing strategies, negotiation and persuasion deisgn.
        </p>
        <h3 className="skill-header">
          (MA) Digital Media Design, Birkbeck, University of London
        </h3>
        <p className="skills-p">
          This Master's degree offered extensive training in modern Front-End
          technologies. I have proudly achieved over 80% in all projects
          throughout the year. <br />
          As a part of the course, we focused on HTML, CSS, JavaScript and React
          to build responsive websites following the accessibility standards.
        </p>
      </div>
    </>
  );
};

export default Experience;
