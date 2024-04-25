// Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.1/font/bootstrap-icons.min.css"></link>
      <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          <div class="header-container">
            <h1 className="navbar-title js-scroll"> Gustave LACAILLE </h1>
            <h2 className="navbar-sub-title js-scroll"> Développeur Web </h2>
          </div>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                {" "}
                <a className="nav-link js-scroll" href="#home">
                  Acceuil
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link js-scroll" href="#parcours">
                  Parcours
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link js-scroll" href="#competences">
                  Compétences
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link js-scroll" href="#project">
                  Projets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
