import React, { useRef, useEffect } from "react";
import "./QuienesSomos.scss";
import ImgComponent from "./ImgComponent";
import { Transition } from "../../Variants";

const QuienesSomos = () => {
  return (
    <div className="about">
      <Transition
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
      </Transition>
      <Transition
        titleClassName={"listAbout"}
        transitionTime={1.5}
        effectDuration={1}
      >
        <ImgComponent />
      </Transition>
    </div>
  );
};

export default QuienesSomos;
