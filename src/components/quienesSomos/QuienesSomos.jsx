import React from "react";
import { Transition, Icon } from "../../Variants"; // Importa el componente Transition desde el directorio Variants
import { Stack, Button } from "@mui/material"; // Importa los componentes Stack y Button desde Material-UI
import "./QuienesSomos.scss"; // Importa los estilos Sass para el componente QuienesSomos
import { FaCheck } from "react-icons/fa6"; // Importa el icono FaCheck de React Icons

// Componente funcional QuienesSomos que representa la sección "Acerca de nosotros"
const QuienesSomos = () => {
  return (
    <div className="about">
      {" "}
      {/* Contenedor principal con clase "about" */}
      <Transition
        titleClassName={"about__title"} // Clase para el título de la transición
        transitionTime={1} // Tiempo de transición
        effectDuration={0.5} // Duración del efecto de transición
      >
        <h1>
          <b>Sirviendo </b> desde 2008
        </h1>
      </Transition>
      <Transition
        titleClassName={"about__list"} // Clase para la lista de la transición
        transitionTime={1.5} // Tiempo de transición
        effectDuration={1} // Duración del efecto de transición
      >
        <div className="about__text">
          {" "}
          {/* Contenedor del texto con clase "about__text" */}
          <h1>Historia</h1> {/* Título de la sección Historia */}
          <h2>
            Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed
            vero dolor sea
          </h2>{" "}
          {/* Subtítulo */}
          <p>
            Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
            nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
            Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut.
            Labor diam sed ipsum et eirmod Takimata sed vero vero no sit sed,
            justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem
            eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit
            magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod
          </p>{" "}
          {/* Párrafo de texto */}
          <Icon href="">LEER MAS</Icon>
        </div>
        {/*Licencia <a href="https://www.freepik.com">designed by jannoon028 - Freepik.com</a> */}
        <img src="./public/2096.png" alt="teacher" /> {/* Imagen */}
        <div className="about__text">
          {/* Contenedor del texto con clase "about__text" */}
          <h1>Visión</h1> {/* Título de la sección Visión */}
          <p>
            Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
            nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
            Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut.
            Labor diam sed ipsum et eirmod Takimata sed vero vero no sit sed,
            justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem
            eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit
            magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod
          </p>
          {/* Párrafo de texto */}
          <div className="about__text-item">
            {/* Contenedor de los ítems de texto con clase "about__text-item" */}
            <li className="about__text-item-check">
              {" "}
              {/* Elemento de lista con clase "about__text-item-check" */}
              <FaCheck className="about__text-item-check-icon" />{" "}
              {/* Icono FaCheck */}
              Lorem ipsum dolor sit amet
            </li>{" "}
            {/* Texto del primer ítem */}
            <li className="about__text-item-check">
              {" "}
              {/* Elemento de lista con clase "about__text-item-check" */}
              <FaCheck className="about__text-item-check-icon" />{" "}
              {/* Icono FaCheck */}
              Lorem ipsum dolor sit amet
            </li>{" "}
            {/* Texto del segundo ítem */}
            <li className="about__text-item-check">
              {" "}
              {/* Elemento de lista con clase "about__text-item-check" */}
              <FaCheck className="about__text-item-check-icon" />{" "}
              {/* Icono FaCheck */}
              Lorem ipsum dolor sit amet
            </li>{" "}
            {/* Texto del tercer ítem */}
          </div>
          <a href="">LEER MAS</a>
        </div>
      </Transition>
    </div>
  );
};

export default QuienesSomos; // Exporta el componente QuienesSomos como el componente predeterminado
