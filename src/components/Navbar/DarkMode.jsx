import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "default"
  );

  //Access html element
  const element = document.documentElement;
  //console.log(element);

  //Set theme to localStorage and html element
  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });

  return (
    <div>
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={theme === "dark" ? DarkButton : LightButton}
        alt="Light Mode"
        className="w-12 cursor-pointer transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
