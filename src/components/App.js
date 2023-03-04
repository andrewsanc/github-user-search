import { useEffect, useState } from "react";
import Header from "./Header";

export default function App() {
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <div className='app' data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
