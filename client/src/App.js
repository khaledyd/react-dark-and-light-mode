import React from "react";
import "./app.css";
import Headerr from "./components/headerr/Headerr";
import { useState } from "react";
import Naav from "./components/naav/Naav";
import Footer from "./components/footer/Footer";
import Log from "./components/log/Log";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <div className="App" id={theme}>
      <Naav handleClick={toggleTheme} />
      <Log />
      <Headerr />
      <Footer />
    </div>
  );
}
