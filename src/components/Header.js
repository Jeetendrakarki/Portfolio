import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="flex primary-header">
        <div className="flex logo">
          <h1>Jeetendra Karki</h1>
          <div>
            <h3 className="line">Web Developer</h3>
          </div>
        </div>
        <div className="right">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkBtn">
            <i className="fa-solid fa-bars"></i>
          </label>
          <ul className="flex primary-navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Project</Link>
            </li>

            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
