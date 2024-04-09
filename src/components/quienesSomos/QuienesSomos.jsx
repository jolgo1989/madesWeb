import React, { useRef, useEffect } from "react";
import "./QuienesSomos.scss";
import ImgComponent from "./ImgComponent";
import { TitleTransition, CardTransition } from "../../Variants";

const QuienesSomos = () => {
  return (
    <div className="about">
      <TitleTransition titleClassName={"titleAbout"}>
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
      </TitleTransition>
      <CardTransition titleClassName={"listAbout"}>
        <ImgComponent />
      </CardTransition>
    </div>
  );
};

export default QuienesSomos;
