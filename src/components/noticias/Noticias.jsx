import React from "react";
import "./Noticias.scss";
import CardNoticias from "./CardNoticias";

const Noticias = () => {
  return (
    <div className="titleContainer">
      <div className="title">
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
      </div>
      <CardNoticias />
    </div>
  );
};

export default Noticias;
