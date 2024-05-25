import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Transition, Icon } from "../../Variants";
import { items } from "./ProjectData";
import "./Proyectos.scss";

// Componente para un solo elemento del portafolio
const Single = ({ items }) => {
  const ref = useRef();

  // Hook para obtener el progreso del desplazamiento
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  // Transformación para animar la posición en Y según el progreso del desplazamiento
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="proyectos__single">
      <div className="proyectos__single-container">
        <div className="proyectos__single-imageContainer" ref={ref}>
          <img src={items.img} alt="" className="proyectos__single-image" />
        </div>
        <motion.div className="proyectos__single-textContainer" style={{ y }}>
          <h2 className="proyectos__single-title">{items.title}</h2>
          <p className="proyectos__single-desc">{items.desc}</p>
          <Icon href="" className="proyectos__single-icon">
            LEER MAS
          </Icon>
        </motion.div>
      </div>
    </section>
  );
};

const Proyectos = () => {
  const ref = useRef();

  // Hook para obtener el progreso del desplazamiento
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  // Animación de muelle para escalar la barra de progreso
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="Proyectos" className="proyectos" ref={ref}>
      <div className="proyectos__progress">
        <h1 className="proyectos__progress-title">
          <b>Nuevos Proyectos</b> etnoeducativos
        </h1>
        <motion.div
          style={{ scaleX }}
          className="proyectos__progress-bar"
        ></motion.div>
      </div>
      <Transition transitionTime={1.5} effectDuration={1}>
        {items.map((item) => (
          <Single items={item} key={item.id} />
        ))}
      </Transition>
    </div>
  );
};

export default Proyectos;
