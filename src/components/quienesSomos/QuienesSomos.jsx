import React, { useRef, useEffect } from "react";
import "./QuienesSomos.scss";
import ImgComponent from "./ImgComponent";
import { TitleTransition } from "../../Variants";

const QuienesSomos = () => {
  return (
    <div className="about">
      <TitleTransition
        titleClassName={"titleAbout"}
        transitionTime={1}
        effectDuration={0.5}
      >
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
      <TitleTransition
        titleClassName={"listAbout"}
        transitionTime={1.5}
        effectDuration={1}
      >
        <ImgComponent />
      </TitleTransition>
    </div>
  );
};

export default QuienesSomos;
