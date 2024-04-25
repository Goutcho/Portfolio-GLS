// EducationTimeline.js
import React, { useState } from "react";
import planetLogo1 from "../../img/planete1.png";
import planetLogo2 from "../../img/planete2.png";
import planetLogo3 from "../../img/planete3.png";
import planetLogo4 from "../../img/planete4.png";
import planetLogo5 from "../../img/planete5.png";
import "./EducationTimeline.css";

const EducationTimeline = () => {
  const [paragraph, setParagraph] = useState("");
  const [showWindow, setShowWindow] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleCloseWindow = () => {
    setShowWindow(false);
  };

  const handleButtonClick = (title) => {
    let newParagraph = "";
    switch (title) {
      case "PC 1.0":
        newParagraph =
          "1 Internet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada velit quis massa sagittis rhoncus. Nulla efficitur leo sed arcu pulvinar euismod. Nam blandit pretium posuere. Sed molestie ligula vitae luctus aliquet. Nulla vehicula est justo, nec cursus nunc tincidunt ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eget mattis nunc. Suspendisse tempus volutpat erat sed iaculis. Mauris auctor laoreet lorem, aliquet iaculis erat ultricies quis. Nunc porttitor leo lectus, sit amet finibus elit gravida non. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem.";
        break;
      case "TER. E.S":
        newParagraph =
          "2 TER ES Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada velit quis massa sagittis rhoncus. Nulla efficitur leo sed arcu pulvinar euismod. Nam blandit pretium posuere. Sed molestie ligula vitae luctus aliquet. Nulla vehicula est justo, nec cursus nunc tincidunt ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eget mattis nunc. Suspendisse tempus volutpat erat sed iaculis. Mauris auctor laoreet lorem, aliquet iaculis erat ultricies quis. Nunc porttitor leo lectus, sit amet finibus elit gravida non. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada velit quis massa sagittis rhoncus. Nulla efficitur leo sed arcu pulvinar euismod. Nam blandit pretium posuere. Sed molestie ligula vitae luctus aliquet. Nulla vehicula est justo, nec cursus nunc tincidunt ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eget mattis nunc. Suspendisse tempus volutpat erat sed iaculis. Mauris auctor laoreet lorem, aliquet iaculis erat ultricies quis. Nunc porttitor leo lectus, sit amet finibus elit gravida non. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem.";
        break;
      case "DU I-II":
        newParagraph =
          "3 DU I II Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada velit quis massa sagittis rhoncus. Nulla efficitur leo sed arcu pulvinar euismod. Nam blandit pretium posuere. Sed molestie ligula vitae luctus aliquet. Nulla vehicula est justo, nec cursus nunc tincidunt ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eget mattis nunc. Suspendisse tempus volutpat erat sed iaculis. Mauris auctor laoreet lorem, aliquet iaculis erat ultricies quis. Nunc porttitor leo lectus, sit amet finibus elit gravida non. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Proin malesuada velit quis massa sagittis rhoncus. Nulla efficitur leo sed arcu pulvinar euismod. Nam blandit pretium posuere. Sed molestie ligula vitae luctus aliquet. Nulla vehicula est justo, nec cursus nunc tincidunt ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eget mattis nunc. Suspendisse tempus volutpat erat sed iaculis. Mauris auctor laoreet lorem, aliquet iaculis erat ultricies quis. Nunc porttitor leo lectus, sit amet finibus elit gravida non. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem.";
        break;
      case "LP WAM":
        newParagraph =
          "4 LP WAM Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada velit quis massa sagittis rhoncus. Nulla efficitur leo sed arcu pulvinar euismod. Nam blandit pretium posuere. Sed molestie ligula vitae luctus aliquet. Nulla vehicula est justo, nec cursus nunc tincidunt ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eget mattis nunc. Suspendisse tempus volutpat erat sed iaculis. Mauris auctor laoreet lorem, aliquet iaculis erat ultricies quis. Nunc porttitor leo lectus, sit amet finibus elit gravida non. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Praesent eget mattis nunc. Suspendisse tempus volutpat erat sed iaculis. Mauris auctor laoreet lorem, aliquet iaculis erat ultricies quis. Nunc porttitor leo lectus, sit amet finibus elit gravida non. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem.";
        break;
      case "MASTER":
        newParagraph =
          "5 MASTER Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada velit quis massa sagittis rhoncus. Nulla efficitur leo sed arcu pulvinar euismod. Nam blandit pretium posuere. Sed molestie ligula vitae luctus aliquet. Nulla vehicula est justo, nec cursus nunc tincidunt ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eget mattis nunc. Suspendisse tempus volutpat erat sed iaculis. Mauris auctor laoreet lorem, aliquet iaculis erat ultricies quis. Nunc porttitor leo lectus, sit amet finibus elit gravida non. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem. Nunc porttitor leo lectus, sit amet finibus elit gravida non. Morbi sed ex nec augue aliquam ullamcorper et vel lectus. Praesent et enim consequat, posuere ligula et, efficitur mi. Mauris tellus arcu, semper eu bibendum id, tempor id lorem.";
        break;
      default:
        newParagraph = "PC 1.0";
        break;
    }
    setParagraph(newParagraph);
    setShowWindow(true);
  };

  return (
    <div className="education-timeline" id="parcours">
      <div className="ligne-droite">
        <div className="education__global">
          <div className="education__planet-timeline">
            {showWindow && ( // Afficher cet élément seulement si showWindow est true
              <div className="graduate-container-div">
                <div className="graduate-container">
                  <div className={`education-timeline ${isHovering ? "shadow-effect" : ""}`}>
                    <div className="graduate-container-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16"
                        onClick={handleCloseWindow}
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                      </svg>

                      <div className="graduate-title-icon">
                        <h2 className="title-graduate-search"> Le Cursus : </h2>
                      </div>
                      <h2 className="title-graduate-search">
                        <i class="bi bi-mortarboard"></i> Résumé du cursus :{" "}
                      </h2>
                      <div className="graduate-text-search-div">
                        <p className="text-search-graduate">{paragraph}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="planet-timeline__image">
            <div className="div-name-planet">
              <div className="sphere-button-div" onClick={() => handleButtonClick("PC 1.0")}>
                <button
                  className="sphere-button"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleButtonClick("PC 1.0")}
                ></button>
              </div>
              <p className="p-name-planet">PC 1.0</p>
              <img className="planet1" src={planetLogo1} alt="Planet logo" onClick={() => handleButtonClick("TER. E.S")} />
            </div>
            <div className="div-name-planet">
              <div className="sphere-button-div">
                <button
                  className="sphere-button"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleButtonClick("TER. E.S")}
                ></button>
              </div>
              <p className="p-name-planet">TER. E.S</p>
              <img className="planet1" src={planetLogo2} alt="Planet logo" onClick={() => handleButtonClick("DU I-II")} />
            </div>
            <div className="div-name-planet">
              <div className="sphere-button-div">
                <button
                  className="sphere-button"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleButtonClick("DU I-II")}
                ></button>
              </div>
              <p className="p-name-planet">DU I-II</p>
              <img className="planet1" src={planetLogo3} alt="Planet logo" onClick={() => handleButtonClick("LP WAM")} />
            </div>
            <div className="div-name-planet">
              <div className="sphere-button-div">
                <button
                  className="sphere-button"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleButtonClick("LP WAM")}
                ></button>
              </div>
              <p className="p-name-planet">LP WAM</p>
              <img className="planet1" src={planetLogo4} alt="Planet logo" />
            </div>
            <div className="div-name-planet" onClick={() => handleButtonClick("MASTER")}>
              <div className="sphere-button-div">
                <button
                  className="sphere-button"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleButtonClick("MASTER")}
                ></button>
              </div>
              <p className="p-name-planet">MASTER</p>
              <img className="planet1" src={planetLogo5} alt="Planet logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
