import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header(props) {
  const { theme, toggleTheme } = props;

  return (
    <div className='header'>
      <h2>devfinder</h2>
      <div className='flex-jcsb'>
        <div className='switch' onClick={toggleTheme}>
          <p>{theme}</p>
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </div>
      </div>
    </div>
  );
}
