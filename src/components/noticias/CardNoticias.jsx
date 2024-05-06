import * as React from "react";
import { images } from "./NewsData"; // Importa el array de imágenes desde el archivo NewsData
import "./CardNoticias.scss"; // Importa los estilos Sass para el componente CardNoticias

// Componente funcional ImgCard que representa una tarjeta de imagen
const ImgCard = ({ image, size }) => {
  const className = `card-size-${size}`; // Calcula la clase de tamaño de la tarjeta
  return (
    <div className={`img-card ${className} img-card-container`}>
      {" "}
      {/* Contenedor de la tarjeta de imagen con clases dinámicas */}
      <img className="img-card__img" src={image.url} alt="green-iguana" />{" "}
      {/* Imagen con clase para estilos */}
      <h1 className="img-card__title">{image.title}</h1>{" "}
      {/* Título de la imagen con clase para estilos */}
      <p className="img-card__description">{image.typography}</p>{" "}
      {/* Descripción de la imagen con clase para estilos */}
      <a className="img-card__button" href="#">
        Leer más
      </a>{" "}
      {/* Botón para leer más con clase para estilos */}
    </div>
  );
};

// Componente funcional CardNoticias que renderiza las tarjetas de imagen
const CardNoticias = () => {
  return (
    <div className="card-noticias__container">
      {" "}
      {/* Contenedor de las tarjetas de imagen */}
      {images.map((image, index) => {
        // Itera sobre el array de imágenes
        let size = // Determina el tamaño de la tarjeta según el índice
          index % 5 === 0
            ? 1
            : index % 5 === 1
            ? 2
            : index % 5 === 2
            ? 3
            : index % 5 === 3
            ? 4
            : 5;

        return <ImgCard key={index} image={image} size={size} />; // Renderiza una tarjeta de imagen con sus propiedades
      })}
    </div>
  );
};

export default CardNoticias; // Exporta el componente CardNoticias como el componente predeterminado
