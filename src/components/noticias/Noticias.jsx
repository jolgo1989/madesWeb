import React from "react";
import "./Noticias.scss";
import CardNoticias from "./CardNoticias";
import { animate, motion, useInView } from "framer-motion";

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

const Noticias = () => {
  return (
    <div className="titleContainer">
      <motion.div
        className="title"
        variants={titleVariants}
        initial={"initial"}
        animate={"animate"}
      >
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
      </motion.div>
      <motion.div
        variants={variants}
        initial={"initial"}
        animate={"animate"}
        className="card"
      >
        <CardNoticias />
      </motion.div>
    </div>
  );
};

export default Noticias;
