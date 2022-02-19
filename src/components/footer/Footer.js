import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <h1>React Blog</h1>
      <div className="content">
        <h2>&copy; {new Date().getFullYear()} Copyright: Muhammed DAGDELEN</h2>
      </div>
      <div className="icons">
        <a
          href="https://github.com/muhammedmed"
          className="i"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammedemindagdelen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
