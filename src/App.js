import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by Yana Armenova and is open-sourced on {""}
          <a
            href="https://github.com/yarmenov/react-weather-final-project.git"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
