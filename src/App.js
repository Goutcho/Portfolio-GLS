// App.js
import React from "react";
import "./App.css";
import OpenHeader from "./component/home/Header.js";
import Countdown from "./component/home/Countdown.js";
import Presentation from "./component/home/Presentation.js";
import EducationTimeline from "./component/home/EducationTimeline.js";
import SkillsGalaxy from "./component/home/SkillsGalaxy.js";
import ProjectsSection from "./component/home/ProjectsSection.js";
import ProjectCard from "./component/home/ProjectCard.js";
import RocketLoader from "./component/home/RocketLoader.js";

const App = () => {
  return (
    <div>
      <OpenHeader />
      <Countdown targetDate="2024-10-02T23:59:59" />
      <div className="separator-row-3" alt="div">
        <Presentation />
        <ProjectCard />
      </div>
      <EducationTimeline />
      <RocketLoader />
      <div className="skills-div">
        <SkillsGalaxy />
      </div>
      <div className="projects-div" alt="div">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default App;
