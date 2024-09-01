"use client";
import { createContext, useEffect, useState } from "react";

export const darkModeContext = createContext({
  theme: "dark",
  setTheme: () => null,
});

const DarkModeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // const isSystemDark = window.matchMedia(
    //   "(prefers-color-scheme: dark)",
    // ).matches;
    // setTheme(isSystemDark ? "dark" : "light");
    setTheme("dark");
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <darkModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </darkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
