import React from "react";
import "./QuienesSomos.scss";
import ImgComponent from "./imgComponent";

const QuienesSomos = () => {
  return (
    <div className="about">
      <div className="titleAbout">
        <div className="title">
          <h1>
            <b>Descubre</b> nuestra
          </h1>
        </div>

        <div className="title">
          <h1>
            <b> Historia </b> y Valores
          </h1>
          <button>¿Quiénes Somos?</button>
        </div>
      </div>
      <div className="listAbout">
        <ImgComponent />
      </div>
    </div>
  );
};

export default QuienesSomos;
