import React from "react";
import Graph from "react-vis-network-graph";
import "./SkillsGalaxy.css";

export default function MySkillsGalaxy() {
  const graph = {
    nodes: [
      { id: 1, label: "", title: "Gustave Lacaille Samus, Etudiant & Developpeur WEB", shape: "square" },
      { id: 2, label: "JavaScript", title: "Langage de programmation", shape: "circle" },
      { id: 3, label: "PHP", title: "Langage de programmation", shape: "circle" },
      { id: 4, label: "Symfony", title: "Framework PHP", shape: "circle" },
      { id: 5, label: "Laravel", title: "Framework PHP", shape: "circle" },
      { id: 6, label: "HTML & CSS", title: "Technologies web de base pour le frontend", shape: "circle" },
      { id: 17, label: "DevOPS", title: "Méthode de conteneurisation et adaptation des projets en programmation", shape: "circle" },
      { id: 7, label: "Docker", title: "Outil de conteneurisation", shape: "circle" },
      { id: 8, label: "Git & GitHub", title: "Outils de contrôle de version et collaboration", shape: "circle" },
      { id: 9, label: "Python", title: "Langage de programmation", shape: "circle" },
      { id: 10, label: "Scrum & Agile", title: "Méthodologies de gestion de projet", shape: "circle" },
      { id: 11, label: "MongoDB", title: "Base de données NoSQL", shape: "circle" },
      { id: 12, label: "Blockchain & IA", title: "Technologies émergentes", shape: "circle" },
      { id: 13, label: "CMS", title: "Système de gestion de contenu (Presta, WordPress, Shopify)", shape: "circle" },
      { id: 14, label: "NumPy, Pandas & Flask", title: "Librairies de traitement des données en Python et framework backend", shape: "circle" },
      { id: 15, label: "ExpressJS, NodeJS", title: "Frameworks Backend JavaScript", shape: "circle" },
      { id: 16, label: "BootStrap / Tailwind", title: "Frameworks CSS", shape: "circle" },
      { id: 18, label: "Jupyter Notebook", title: "Logiciel de coworking en Python, gestion de data, Frameworks ...", shape: "circle" },
      { id: 19, label: "React, VueJS", title: "Frameworks FrontEnd JavaScript", shape: "circle" },
    ],
    edges: [
      { from: 2, to: 1 },
      { from: 3, to: 1 },
      { from: 4, to: 3 },
      { from: 5, to: 3 },
      { from: 6, to: 1 },
      { from: 7, to: 17 },
      { from: 8, to: 17 },
      { from: 9, to: 1 },
      { from: 10, to: 1 },
      { from: 14, to: 9 },
      { from: 11, to: 2 },
      { from: 12, to: 9 },
      { from: 13, to: 3 },
      { from: 15, to: 2 },
      { from: 16, to: 6 },
      { from: 17, to: 1 },
      { from: 18, to: 9 },
      { from: 19, to: 2 },
    ],
  };

  const options = {
    interaction: {
      navigationButtons: false,
      zoomView: false,
    },
    height: "900px",
    nodes: {
      shape: "box",
      size: 20,
      borderWidth: 1.5,
      color: {
        border: "#fff",
        background: "rgba(0, 0, 255, 0.5)",
        highlight: {
          border: "#fff",
          background: "rgba(0, 0, 255, 0.7)",
        },
      },
      font: { color: "#fff" },
      shadow: { enabled: true, color: "#FED500", size: 10, x: 0, y: 0 },
    },
    edges: {
      width: 1,
      color: {
        color: "#fff",
      },
      shadow: { enabled: true, color: "#FED500", size: 2, x: 0, y: 0 },
    },
  };

  return (
    <div className="skills-galaxy">
      <h2 className="title-galaxy" id="competences">
        Galaxie des compétences
      </h2>
      <div className="skills-galaxy-graph">
        <Graph graph={graph} options={options} />
      </div>
    </div>
  );
}
