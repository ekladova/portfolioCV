import React, { useRef } from "react";
import linkedIn from "../../assets/linkedin.png";
import github from "../../assets/git.png";
import mail from "../../assets/mail.jpg";
import cv from "../../assets/cv.jpg";
import cvPdf from "../../assets/cv.pdf";
import copy from "../../assets/copy.png";
import "./contact.css";

const Contact = () => {
  const copyEmail = useRef(null);
  const copyNumber = useRef(null);

  const onCopyClick = () => {
    copyEmail.current.select();
    document.execCommand("copy");
  };

  const onCopyNumberClick = () => {
    copyNumber.current.select();
    document.execCommand("copy");
  };

  return (
    <div className="contact-container">
      <h1 className="header-link">Get in touch</h1>
      <div className="links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ekaterina-kladova/"
        >
          <img src={linkedIn} className="icon" alt="contact icon, linkedIn" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ekladova"
        >
          <img src={github} className="icon" alt="contact icon, GitHub" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={cvPdf}>
          <img src={cv} className="icon" alt="contact icon, CV" />
        </a>
        <a href="mailto:ek.kladova@gmail.com">
          <img src={mail} className="icon" alt="contact icon, email" />
        </a>
      </div>
      <div className="contact-info">
        <div className="contact-info-container">
          <p className="contact-info-header">Email: </p>
          <div className="email-copy">
            <input
              readOnly
              ref={copyEmail}
              value="ek.kladova@gmail.com"
              id="emailCopy"
            />
            <img
              src={copy}
              onClick={onCopyClick}
              className="copy icon"
              alt="copy button"
            />
          </div>
        </div>
        <div className="contact-info-container">
          <p className="contact-info-header">Number: </p>

          <div className="email-copy">
            <a className="email" href="tel:+447783910646">
              <input
                className="number"
                value="07783910646"
                ref={copyNumber}
                readOnly
              />
            </a>
            <img
              src={copy}
              onClick={onCopyNumberClick}
              className="copy icon"
              alt="copy button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
