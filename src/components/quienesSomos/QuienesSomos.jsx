import React from "react";
import "./QuienesSomos.scss";
import ImgComponent from "./ImgComponent";
import { animate, motion, useInView } from "framer-motion";

// Definición de las variantes de animación para el componente Services
const titleVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const QuienesSomos = () => {
  return (
    <div className="about">
      <motion.div
        className="titleAbout"
        variants={titleVariants}
        initial={"initial"}
        animate={"animate"}
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
      </motion.div>
      <motion.div
        className="listAbout"
        variants={variants}
        initial={"initial"}
        animate={"animate"}
      >
        <ImgComponent />
      </motion.div>
    </div>
  );
};

export default QuienesSomos;
