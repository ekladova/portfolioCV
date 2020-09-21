import React from "react";
import "./Projects.css";
// import screen from "../../assets/screen.gif";
// import game from "../../assets/game.png";
// import timer from "../../assets/timer.PNG";
// import weather from "../../assets/weather.png";
// import website from "../../assets/website.PNG";
import { Project } from "..";

const Projects = () => {
  return (
    <>
      <div className="display projects-container">
        <Project
          header="Rock Paper Scissors Game"
          imageClass="rps"
          text="A rock-paper-scissors game with 'best of 3 rounds' win condition"
          gitLink="https://github.com/ekladova/rpc/blob/master/src/sections/Scene/index.jsx"
          webLink="https://ekladova.github.io/rpc"
          alt="rps-game"
        />
        <Project
          header="React.js Website"
          imageClass="website"
          text="A website with 4 pages, built with React.js. Consists of homepage with product selection and simulated checkout, a 'word game', and multiple illustrattions in SVG, PNG and JPEG formats"
          gitLink="https://github.com/GiacomoSorbi/ekladova-module-ii/tree/master/src"
          webLink="https://giacomosorbi.github.io/ekladova-module-ii/"
          alt="Website"
        />
        <Project
          header="Memory game"
          imageClass="game"
          text="It is a memory game built on React.js using hooks."
          gitLink="https://github.com/ekladova/milestone-3/blob/master/src/App.js"
          webLink="https://ekladova.github.io/milestone-3/"
          alt="memory game"
        />
        <Project
          header="Timer App"
          imageClass="timer"
          text="Add some tasks and time. Click to choose a task to track. Click the tomato button to start the countdown."
          gitLink="https://github.com/ekladova/milestone-2/blob/master/src/App.js"
          webLink="https://ekladova.github.io/milestone-2/"
          alt="timer"
        />
        <Project
          header="Weather API"
          imageClass="weather"
          text="A simple weather app that connects to OpenWeatherMap API and tells current weather in the city."
          gitLink="https://github.com/ekladova/milestone-v"
          webLink="https://ekladova.github.io/milestone-v/"
          alt="weather API"
        />

        <Project
          header="HTML/CSS/JavaScript Project"
          imageClass="final"
          text="A responsive website built with HTML/CSS/JavaScript."
          gitLink="https://github.com/ekladova/Final-project"
          webLink="https://ekladova.github.io/Final-project/"
          alt="screen"
        />
      </div>
    </>
  );
};

export default Projects;
