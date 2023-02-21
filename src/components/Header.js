import React from "react";

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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
