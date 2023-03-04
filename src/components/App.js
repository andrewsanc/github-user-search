import { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import ProfileCard from "./ProfileCard";

export default function App() {
  const [searchUser, setSearchUser] = useState("octocat");
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  useEffect(() => {
    const fetchGithubProfile = async () => {
      const data = await fetch(`https://api.github.com/users/${searchUser}`);
      const json = await data.json();
      setUserData(json);
    };

    fetchGithubProfile();
  }, [searchUser]);

  return (
    <div className='app' data-theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Search searchUser={searchUser} setSearchUser={setSearchUser} />
      <ProfileCard userData={userData} />
    </div>
  );
}
