import React, { useRef, useEffect } from "react";
import "./QuienesSomos.scss";
import ImgComponent from "./ImgComponent";
import { Transition } from "../../Variants";
import Contacts from "../contacto/contacts";

const QuienesSomos = () => {
  return (
    <div className="about">
      <Transition
        titleClassName={"titleAbout"}
        transitionTime={1}
        effectDuration={0.5}
      >
        <div className="principalTitle">
          <h1>
            <b>SOBRE </b> NOSOTROS
          </h1>
        </div>
        <div className="secundaryTitle">
          <h1>
            <b>HACIENDO HISTORIA </b> DESDE 2014
          </h1>
        </div>
      </Transition>
      <div
        className="listAbout"
        // titleClassName={"listAbout"}
        // transitionTime={1.5}
        // effectDuration={1}
      >
        <div className="textAbout">
          <h1>Historia</h1>
          <h2>
            Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed
            vero dolor sea
          </h2>
          <p>
            Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
            nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
            Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut.
            Labor diam sed ipsum et eirmod
          </p>
        </div>
        {/*Licencia <a href="https://www.freepik.com">designed by jannoon028 - Freepik.com</a> */}
        <img src="./public/2096.png" alt="teacher" />
        <div className="textAbout">
          <h1>Visión</h1>
          <p>
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
            justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
