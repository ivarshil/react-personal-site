import React, { Component } from "react";
import profile from "../images/profile.jpg";
class Welcome extends Component {
  render() {
    return (
      <div className="Welcome section">
        <h1 className="welcome-intro">
          HI,I'M
          <strong> Varshil Chaklasiya,</strong>
          <br />
          <strong>Frontend Developer </strong>
          <strong></strong>
          living in
          <strong> Surat City</strong>
          <br />
          <a
            href="mailto:cvarshil95@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button getintouch-button">
              Get in Touch <i className="fa fa-hand-pointer-o" />
            </button>
          </a>
          <a
            href="https://ivarshil.tech/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button resume-button">
              Cirriculam Vitae <i className="fa fa-file-pdf-o" />
            </button>
          </a>
          <br />
          <a
            href="https://linkedin.com/in/ivarshil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square i-hov" />
          </a>{" "}
          <a
            href="https://twitter.com/ivarshil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter-square i-hov" />
          </a>{" "}
          <a href="https://instagram.com/ivarshil" target="_blank">
            <i className="fa fa-instagram i-hov" />
          </a>{" "}
        </h1>
        <img src={profile} className="main-pic" alt="propic" />
      </div>
    );
  }
}

export default Welcome;
