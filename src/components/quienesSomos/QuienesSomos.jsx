import React from "react";
import "./QuienesSomos.scss";
import ImgComponent from "./ImgComponent";
import { animate, motion, useInView } from "framer-motion";

// Definición de las variantes de animación para el componente Services
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
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
      <div className="titleAbout">
        <motion.div className="title" variants={variants}>
          <h1>
            <b>Descubre</b> nuestra
          </h1>
        </motion.div>

        <motion.div className="title" variants={variants}>
          <h1>
            <b> Historia </b> y Valores
          </h1>
          <motion.button variants={variants}>¿Quiénes Somos?</motion.button>
        </motion.div>
      </div>
      <motion.div className="listAbout" variants={variants}>
        <ImgComponent />
      </motion.div>
    </motion.div>
  );
};

export default QuienesSomos;
