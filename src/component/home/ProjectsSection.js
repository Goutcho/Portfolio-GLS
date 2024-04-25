// Presentation.js
import React from "react";
import "./ProjectsSection.css";
import projectImage1 from "../../img/projet1.png";
import projectImage2 from "../../img/projet2.webp";
import projectImage3 from "../../img/projet3.webp";

const Presentation = () => {
  return (
    <div className="projects-container" id="project">
      <h2 className="title-projects"> Présentation De Quelques Projets :</h2>
      <div className="projects-container-main">
        <div className="projects-container-1">
          <img className="project-img-1" src={projectImage1} alt="projet 1" />
          <p className="text-project-1">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit quis ipsum elementum porttitor. Nam at orci at mi posuere tempus
            vel feugiat mauris. Cras at quam sodales, mattis sapien eu, hendrerit justo. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aenean ex est, varius eget urna sit amet, ullamcorper dictum mauris. Nullam tempus convallis aliquet.
            Maecenas vitae maximus elit. Maecenas posuere erat at porta efficitur. Vivamus dictum urna nec tristique sollicitudin.
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit quis ipsum elementum porttitor. Nam at orci at mi posuere tempus
            vel feugiat mauris. Cras at quam sodales, mattis sapien eu, hendrerit justo. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aenean ex est, varius eget urna sit amet, ullamcorper dictum mauris. Nullam tempus convallis aliquet.
            Maecenas vitae maximus elit. Maecenas posuere erat at porta efficitur. Vivamus dictum urna nec tristique sollicitudin.{" "}
          </p>
        </div>
        <div className="projects-container-1">
          <img className="project-img-2" src={projectImage2} alt="projet 2" />
          <p className="text-project-1">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit quis ipsum elementum porttitor. Nam at orci at mi posuere tempus
            vel feugiat mauris. Cras at quam sodales, mattis sapien eu, hendrerit justo. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aenean ex est, varius eget urna sit amet, ullamcorper dictum mauris. Nullam tempus convallis aliquet.
            Maecenas vitae maximus elit. Maecenas posuere erat at porta efficitur. Vivamus dictum urna nec tristique sollicitudin.
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit quis ipsum elementum porttitor. Nam at orci at mi posuere tempus
            vel feugiat mauris. Cras at quam sodales, mattis sapien eu, hendrerit justo. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aenean ex est, varius eget urna sit amet, ullamcorper dictum mauris. Nullam tempus convallis aliquet.
            Maecenas vitae maximus elit. Maecenas posuere erat at porta efficitur. Vivamus dictum urna nec tristique sollicitudin.{" "}
          </p>
        </div>
        <div className="projects-container-1">
          <img className="project-img-2" src={projectImage3} alt="project" />
          <p className="text-project-1">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit quis ipsum elementum porttitor. Nam at orci at mi posuere tempus
            vel feugiat mauris. Cras at quam sodales, mattis sapien eu, hendrerit justo. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aenean ex est, varius eget urna sit amet, ullamcorper dictum mauris. Nullam tempus convallis aliquet.
            Maecenas vitae maximus elit. Maecenas posuere erat at porta efficitur. Vivamus dictum urna nec tristique sollicitudin.
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit quis ipsum elementum porttitor. Nam at orci at mi posuere tempus
            vel feugiat mauris. Cras at quam sodales, mattis sapien eu, hendrerit justo. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Aenean ex est, varius eget urna sit amet, ullamcorper dictum mauris. Nullam tempus convallis aliquet.
            Maecenas vitae maximus elit. Maecenas posuere erat at porta efficitur. Vivamus dictum urna nec tristique sollicitudin.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
