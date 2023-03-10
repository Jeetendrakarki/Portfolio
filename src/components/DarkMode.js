import React from "react";

function DarkMode() {
  return (
    <>
      <input type="checkbox" id="darkMode" className="dark-mode-checkbox" />
      <label htmlFor="darkMode">
        <i className="fa-solid fa-circle-half-stroke toggle"></i>
      </label>
    </>
  );
}

export default DarkMode;
