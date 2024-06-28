import { Moon, Sun } from "./icons";
import { useState, useEffect } from "react";
import styles from "../Home.module.css";

export default function ModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    let darkmodeEnabled =
      document.body.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(darkmodeEnabled);
  }, []);

  const handler = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={handler} className={styles.topbarButton}>
      {darkMode ? <Moon /> : <Sun />}
    </button>
  );
}
