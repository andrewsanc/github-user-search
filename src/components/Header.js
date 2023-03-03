import { useState } from "react";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  return (
    <div className='flex-container-row'>
      <h2>devfinder</h2>
      <div className='flex-container-row flex-jcsb'>
        <div className='switch'>
          <p>{toggleDarkMode ? "Light" : "Dark"}</p>
          <FaMoon />
        </div>
      </div>
    </div>
  );
}
