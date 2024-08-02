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
          Je m'appelle Gustave Lacaille, et je suis développeur web et logiciel, actuellement basé à Cergy. J'ai récemment obtenu une Licence
          Professionnelle en Développement Web à CY Cergy Paris Université, où j'ai approfondi mes compétences en programmation, notamment avec HTML,
          CSS, JavaScript, Python et PHP.
          <br></br>
          <br></br>
          Avant cela, j'avais commencé mon parcours à l'école 42, une expérience malheureusement interrompue par la pandémie de COVID-19. Durant mes
          études, j'ai acquis une expertise en DevOps, me familiarisant avec des pratiques telles que l'intégration continue et le déploiement
          automatisé. J'ai également une expérience professionnelle en alternance, où j'ai travaillé sur le développement et l'optimisation de sites
          web, tout en intégrant des systèmes de gestion de contenu et en assurant des optimisations SEO.
          <br></br>
          <br></br>
          Ma passion pour la technologie, combinée à mes compétences techniques, me permet de créer des solutions numériques innovantes et de
          m'adapter aux évolutions du secteur. Je suis toujours à la recherche d'opportunités pour appliquer et développer mes compétences dans des
          projets stimulants.{" "}
        </p>
      </div>
      <div className="presentation-container-link">
        <div className="presentation-container-picture">
          <img src={facePicture} alt="img" className="img-presentation"></img>
        </div>
        <div className="presentation-container-list">
          <ul>
            <li class="li-presentation">
              <i class="bi bi-linkedin"></i> LinkedIn : <a href="https://www.linkedin.com/in/gustave-l-28a050277/">Gustave LACAILLE</a>
            </li>
            <li class="li-presentation">
              <i class="bi bi-github"></i> GitHub : <a href="https://github.com/Goutcho">Goutcho</a>
            </li>
            <li class="li-presentation">
              <i class="bi bi-envelope-fill"></i> @Mail : <a href="mailto:glacaille.s@gmail.com">glacaille.s@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
