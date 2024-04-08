import React, { useRef, useEffect } from "react";
import "./QuienesSomos.scss";
import ImgComponent from "./ImgComponent";
import { motion, useInView, useAnimation } from "framer-motion";

// Definición de las variantes de animación para el componente Services

const QuienesSomos = () => {
  return (
    <div className="about">
      <motion.div
        className="titleAbout"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1,
          y: { duration: 0.5 },
        }}
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
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1.5,
          y: { duration: 1 },
        }}
      >
        <ImgComponent />
      </motion.div>
    </div>
  );
};

export default QuienesSomos;
