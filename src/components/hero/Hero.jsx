import React from "react"; // Importación del módulo React
import "./Hero.scss"; // Importación del archivo de estilos Hero.scss
import {
  // Importación de iconos de la librería react-icons/fa6
  FaSquareXTwitter,
  FaSquareFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import SideBar from "../sidebar/SideBar"; // Importación del componente SideBar
import { ArrowIcon, Icon, TextHero } from "../../Variants"; // Importación de componentes personalizados

// Definición del componente Hero
const Hero = () => {
  return (
    <div className="hero">
      {/* Bloque principal del componente Hero */}
      <SideBar /> {/* Menú lateral */}
      {/* Inclusión del componente SideBar dentro del bloque hero */}
      <div className="hero__wrapper">
        {/* Elemento wrapper dentro del bloque hero */}
        <div className="hero__social">
          {/* Elemento social dentro del bloque hero */}
          {/* Íconos de redes sociales */}
          <Icon href="#" className="social__icon">
            {/* Elemento icon dentro de social */}
            <FaInstagram className="ico" /> {/* Ícono de Instagram */}
          </Icon>
          <Icon href="#" className="social__icon">
            {/* Elemento icon dentro de social */}
            <FaSquareFacebook /> {/* Ícono de Facebook */}
          </Icon>
          <Icon href="#" className="social__icon">
            {/* Elemento icon dentro de social */}
            <FaSquareXTwitter /> {/* Ícono de Twitter */}
          </Icon>
          <Icon href="#" className="social__icon">
            {/* Elemento icon dentro de social */}
            <FaYoutube /> {/* Ícono de Youtube */}
          </Icon>
        </div>
        {/* Contenido de texto */}
        <TextHero>
          {/* Componente TextHero dentro del bloque hero */}
          <h1 className="textContainer__title">MADES </h1>
          {/* Título del texto */}
          <h2 className="textContainer__subtitle">
            {/* Subtítulo del texto */}
            ETNOEDUCACIÓN DESDE EL TERRITORIO{" "}
          </h2>
          <p className="textContainer__description">
            {/* Descripción del texto */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            atque nobis illum, consequuntur excepturi voluptatum voluptates.
          </p>
          <ArrowIcon href={`#Contactenos`}>
            {/* Componente ArrowIcon */}
            <img src="public/arrow.png" alt="ArrowIcon" />
            {/* Ícono de flecha */}
          </ArrowIcon>
        </TextHero>
      </div>
    </div>
  );
};

export default Hero; // Exportación del componente Hero
