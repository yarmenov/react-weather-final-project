import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/71751-yana-armenova"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yana Armenova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/yarmenov/react-weather-final-project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://curious-caramel-8b966d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
