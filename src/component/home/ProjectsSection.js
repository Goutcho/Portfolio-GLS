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
            J'ai collaboré avec une entreprise de maçonnerie pour renforcer leur présence en ligne en créant et en gérant un site vitrine sur mesure,
            mettant en valeur leurs services et réalisations avec un design moderne et une navigation intuitive. J'ai ensuite mis en place un site
            e-commerce via Prestashop pour diversifier leurs canaux de vente, avant de migrer vers Shopify pour répondre aux besoins évolutifs de
            l'entreprise.
            <br></br>
            <br></br>
            Cette transition a amélioré l'expérience utilisateur et intégré des outils de gestion des ventes plus performants, ce qui a permis à
            l'entreprise d'atteindre une clientèle plus large et d'augmenter ses ventes en ligne. Ce projet a démontré ma capacité à adapter des
            solutions technologiques efficaces pour répondre aux objectifs commerciaux.{" "}
          </p>
        </div>
        <div className="projects-container-1">
          <img className="project-img-2" src={projectImage2} alt="projet 2" />
          <p className="text-project-1">
            {" "}
            J'ai développé une application iOS en Swift qui fonctionne comme un Pokédex interactif, récupérant les données d'une API pour offrir une
            expérience utilisateur enrichie. Cette application permet aux utilisateurs de rechercher et de visualiser des informations détaillées sur
            divers Pokémon, incluant leurs caractéristiques, évolutions, et types. J'ai conçu une interface utilisateur intuitive et réactive,
            optimisée pour les appareils iOS, afin de garantir une navigation fluide et engageante.
            <br></br>
            <br></br>
            Egalement dévelopée une application de localisation pour l'université, permettant de suivre la position des étudiants à l'intérieur du
            périmètre du campus. Utilisant les services de localisation GPS et la technologie de géorepérage, l'application assure que les étudiants
            peuvent être localisés facilement et en toute sécurité lorsqu'ils se trouvent sur le campus{" "}
          </p>
        </div>
        <div className="projects-container-1">
          <img className="project-img-2" src={projectImage3} alt="project" />
          <p className="text-project-1">
            {" "}
            En plus de mes projets en développement d'applications, j'ai réalisé plusieurs scripts Python, notamment un qui extrait les métadonnées de
            fichiers audio et un autre qui utilise ChatGPT pour résumer le contenu audio. J'ai également conçu des algorithmes d'intelligence
            artificielle, incluant l'algorithme Minimax pour la prise de décision dans des jeux stratégiques, ainsi que l'algorithme Degrees IA pour
            analyser les degrés de séparation entre différentes entités.
            <br></br>
            <br></br>
            Ces projets, parmi d'autres, montrent ma capacité à résoudre des problèmes complexes et à appliquer l'IA pour développer des solutions
            innovantes. J'ai utilisé Jupyter pour développer et tester ces scripts, ce qui m'a permis de documenter et d'itérer rapidement mes
            processus de développement. Mon expérience variée en Python et en IA m'a permis d'explorer divers domaines technologiques et de contribuer
            à des projets diversifiés et stimulants.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
