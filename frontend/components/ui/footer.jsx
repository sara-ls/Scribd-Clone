import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScribd,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="about">
          <h4>ABOUT</h4>
          <ul className="footer-list">
            <li>
              <a href="https://github.com/sara-ls/Scribbled">Scribbled Repo</a>
            </li>
            <li>
              <a href="https://github.com/sara-ls/Scribbled/blob/master/README.md">
                Read Me
              </a>
            </li>
            <li>
              <a href="https://www.scribd.com/?lohp=2">scribd.com</a>
            </li>
          </ul>
        </div>
        <div className="Contact">
          <h4>CONTACT</h4>
          <ul className="footer-list">
            <li>
              <a href="https://github.com/sara-ls">GitHub Profile</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/sara~sampson">
                LinkedIn Profile
              </a>
            </li>
            <li>
              <a href="https://sarasampson.com">sarasampson.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="social-container">
        <a href="https://www.scribd.com/">
          <FontAwesomeIcon
            icon={faScribd}
            className="social-icon"
            id="scribd-icon"
          />
        </a>
        <a href="https://github.com/sara-ls">
          <FontAwesomeIcon
            icon={faGithub}
            className="social-icon"
            id="github-icon"
          />
        </a>
        <a href="https://www.linkedin.com/sara~sampson">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="social-icon"
            id="linkedin-icon"
          />
        </a>
      </div>
      <div className="footer-bottom">
        <ul>
          <li>
            <span>Scribbled</span>
          </li>
          <li id="dot">
            <FontAwesomeIcon icon={faCircle} />
          </li>
          <li>
            <span>Sara Lim Sampson</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
