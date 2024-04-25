// Presentation.js
import React from "react";
import facePicture from "../../img/img-linkedin.jpeg";
import "./Presentation.css";

const Presentation = () => {
  return (
    <div className="presentation-container">
      <div className="presentation-container-text">
        <h2 className="title-presentation"> Présentation :</h2>
        <p className="text-presentation">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit quis ipsum elementum porttitor. Nam at orci at mi posuere tempus vel
          feugiat mauris. Cras at quam sodales, mattis sapien eu, hendrerit justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Aenean ex est, varius eget urna sit amet, ullamcorper dictum mauris. Nullam tempus convallis aliquet. Maecenas vitae
          maximus elit. Maecenas posuere erat at porta efficitur. Vivamus dictum urna nec tristique sollicitudin.
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit quis ipsum elementum porttitor. Nam at orci at mi posuere tempus vel
          feugiat mauris. Cras at quam sodales, mattis sapien eu, hendrerit justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Aenean ex est, varius eget urna sit amet, ullamcorper dictum mauris. Nullam tempus convallis aliquet. Maecenas vitae
          maximus elit. Maecenas posuere erat at porta efficitur. Vivamus dictum urna nec tristique sollicitudin.{" "}
        </p>
      </div>
      <div className="presentation-container-link">
        <div className="presentation-container-picture">
          <img src={facePicture} alt="img" className="img-presentation"></img>
        </div>
        <div className="presentation-container-list">
          <ul>
            <li class="li-presentation">
              <i class="bi bi-linkedin"></i> LinkedIn : Gustave LACAILLE
            </li>
            <li class="li-presentation">
              <i class="bi bi-github"></i> GitHub : Goutcho
            </li>
            <li class="li-presentation">
              <i class="bi bi-envelope-fill"></i> @Mail : glacaille.s@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
