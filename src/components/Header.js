import { useState } from "react";
import { FaMoon } from "react-icons/fa";

export default function Header(props) {
  const { theme, toggleTheme } = props;

  return (
    <div className='flex-jcsb mx'>
      <h2>devfinder</h2>
      <div className='flex-jcsb'>
        <div className='switch' onClick={toggleTheme}>
          <p>{theme}</p>
          <FaMoon />
        </div>
      </div>
    </div>
  );
}
