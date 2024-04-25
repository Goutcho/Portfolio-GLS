import React from "react";
import rocket from "../../img/rocket-img.svg";
import "./RocketLoader.css";

const RocketLoader = () => {
  return (
    <div className="div-fusee">
      <div className="ligne">
        <img className="fusee" src={rocket} alt="Fusée Logo" />
      </div>
    </div>
  );
};

export default RocketLoader;
