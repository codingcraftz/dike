"use client";
import { createContext, useEffect, useState } from "react";

export const darkModeContext = createContext({
  theme: "moon",
  setTheme: () => null,
});

const DarkModeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(isSystemDark ? "dark" : "light");
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
