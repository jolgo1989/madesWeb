import React from "react";
import "./QuienesSomos.scss";
import ImgComponent from "./ImgComponent";
import { animate, motion, useInView } from "framer-motion";

// Definición de las variantes de animación para el componente Services
const variants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const QuienesSomos = () => {
  return (
    <motion.div
      className="about"
      variants={variants}
      initial={"initial"}
      animate={"animate"}
    >
      <motion.div className="titleAbout">
        <div className="title" variants={variants}>
          <h1>
            <b>Descubre</b> nuestra
          </h1>
        </div>

        <div className="title" variants={variants}>
          <h1>
            <b> Historia </b> y Valores
          </h1>
          <button variants={variants}>¿Quiénes Somos?</button>
        </div>
      </motion.div>
      <div className="listAbout">
        <ImgComponent />
      </div>
    </motion.div>
  );
};

export default QuienesSomos;
