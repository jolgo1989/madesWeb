import React, { useRef } from "react";
import "./Noticias.scss";
import CardNoticias from "./CardNoticias";
import { TitleTransition, CardTransition } from "../../Variants";

const Noticias = () => {
  return (
    <div className="titleContainer">
      <TitleTransition titleClassName={"title"}>
        <div className="subTitle">
          <h1>
            Explora las últimas <b>noticias</b>
          </h1>
        </div>

        <div className="textTitle">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            cum non, fugit ullam, dolorum eius
          </p>
        </div>
      </TitleTransition>
      <CardTransition titleClassName={"card"}>
        <CardNoticias />
      </CardTransition>
    </div>
  );
};

export default Noticias;
