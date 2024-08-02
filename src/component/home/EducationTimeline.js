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
          "Depuis mon plus jeune âge, j'ai toujours été fasciné par les ordinateurs. Je me souviens des heures passées devant l'écran, curieux de comprendre comment tout cela fonctionnait. Cette curiosité s'est rapidement transformée en passion, et j'ai commencé à explorer divers aspects de l'informatique, allant de la programmation simple à la création de contenu numérique. En 2011, j'ai découvert le montage vidéo avec Adobe After Effects. C'était une révélation pour moi, car cela me permettait de combiner créativité et technologie. J'ai passé des heures à apprendre les techniques de montage, à expérimenter avec des effets spéciaux et à créer des vidéos captivantes. Ces projets m'ont permis de développer un sens aigu de la précision et de la patience, car chaque détail comptait pour obtenir le résultat final parfait. Cependant, malgré cette passion naissante pour l'informatique et la création numérique, la vie m'a conduit à explorer d'autres chemins. J'ai fini par mettre l'informatique de côté pendant un certain temps pour me concentrer sur d'autres intérêts et responsabilités. Cette pause m'a permis d'acquérir de nouvelles perspectives et compétences dans d'autres domaines, mais l'appel de l'informatique restait présent en moi.";
        break;
      case "TER. E.S":
        newParagraph =
          "J'ai suivi une filière en terminale ES, où j'ai acquis des compétences en économie et sciences sociales qui m'ont offert une perspective différente sur le monde. Après le lycée, j'ai décidé de partir en Pologne pour travailler chez mes oncles. Cette expérience m'a permis de découvrir une nouvelle culture et de développer des compétences professionnelles précieuses. A la suite de ces expériences variées, je suis prêt à revenir à l'informatique et à mettre en pratique mes compétences dans de nouveaux projets technologiques.";
        break;
      case "DU I-II":
        newParagraph =
          "J'ai par la suite décidé de poursuivre ma passion pour l'informatique en intégrant l'école 42. Cependant, la pandémie de COVID-19 a interrompu ce parcours. Déterminé à continuer mon apprentissage, j'ai ensuite obtenu un diplôme universitaire de niveau 2 du II, où j'ai acquis les bases solides en informatique. Pendant mes études, j'ai appris les fondamentaux du développement web avec HTML, CSS, et JavaScript, ce qui m'a permis de créer des sites web dynamiques et interactifs. J'ai également exploré le développement back-end avec Python et PHP, ce qui m'a donné une compréhension complète du cycle de développement des applications web. Ces compétences techniques, combinées à ma curiosité naturelle, m'ont préparé à relever de nouveaux défis dans le domaine de l'informatique.";
        break;
      case "LP WAM":
        newParagraph =
          "Après avoir obtenu mon diplôme universitaire de niveau 2 du II, j'ai poursuivi ma formation en intégrant la Licence Professionnelle Web, Applications Mobiles (LP WAM). Ce programme m'a permis de perfectionner mes compétences en développement et d'acquérir une perspective plus approfondie sur la programmation. Au cours de cette licence, j'ai renforcé mes connaissances en développement web et mobile, en me familiarisant avec des technologies avancées et des méthodologies de projet. J'ai également exploré le domaine du DevOps, ce qui m'a permis de comprendre l'importance de l'intégration continue et du déploiement automatisé dans le cycle de développement logiciel. Grâce à des projets pratiques et des travaux en équipe, j'ai pu appliquer ces compétences dans des environnements réels, en améliorant non seulement mes capacités techniques, mais aussi mes compétences en gestion de projet et en collaboration. Cette expérience a enrichi ma vision de la programmation, me préparant à relever des défis technologiques complexes et à innover dans le secteur du développement web et mobile.";
        break;
      case "MASTER":
        newParagraph = "?";
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
            {showWindow && (
              <div className="graduate-container-div">
                <div className="graduate-container">
                  <div className={`education-timeline ${isHovering ? "shadow-effect" : ""}`}>
                    <div className="graduate-container-text">
                      <div className="graduate-title-icon">
                        <h2 className="title-graduate-search"> Le Cursus : </h2>
                      </div>
                      <h2 className="title-graduate-search">
                        <i class="bi bi-mortarboard"></i> Histoire :{" "}
                      </h2>
                      <div className="graduate-text-search-div">
                        <p className="text-search-graduate">{paragraph}</p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16"
                        onClick={handleCloseWindow}
                      >
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                      </svg>
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
              <img className="planet1" src={planetLogo1} alt="Planet logo" onClick={() => handleButtonClick("PC 1.0")} />
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
