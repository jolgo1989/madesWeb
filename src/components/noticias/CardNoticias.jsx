import * as React from "react";
import { images } from "./NewsData";

import "./CardNoticias.scss";

const ImgCard = ({ image, size }) => {
  const className = `card-size-${size}`;
  return (
    <div className={`${className} card-container  `}>
      <img className="card-img" src={image.url} alt="green-iguana" />
      <h1 className="card-title">{image.title}</h1>
      <p className="card-description">{image.Typography}</p>
      <a className="card-btn" href="">
        Leer mas
      </a>
    </div>
  );
};

const CardNoticias = () => {
  return (
    <div className="container">
      {images.map((image, index) => {
        // lógica para asignar tamaños
        // Por ejemplo, asignar tamaños basados en el índice:
        let size;
        if (index % 5 === 0) {
          size = 1; // Tamaño pequeño
        } else if (index % 5 === 1) {
          size = 2; // Tamaño mediano
        } else if (index % 5 === 2) {
          size = 3; // Tamaño mediano
        } else if (index % 5 === 3) {
          size = 4;
        } else {
          size = 5;
        }

        return <ImgCard key={index} image={image} size={size} />;
      })}
    </div>
  );
};

export default CardNoticias;
