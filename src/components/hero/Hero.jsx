import React from "react";
import "./Hero.scss";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaYoutube,
  FaInstagram,
  FaRegUser,
} from "react-icons/fa6";
import SideBar from "../sidebar/SideBar";
import { motion } from "framer-motion";

// Variantes de animación para el componente motion.div
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

const iconsVariants = {
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  pressed: { scale: 0.95 },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const Icon = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      variants={iconsVariants}
      whileHover="hover"
      whileTap="pressed"
      animate="animate"
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      {/* Menu */}
      <SideBar />
      <motion.div
        className="wrapper"
        variants={variants}
        initial={"initial"}
        animate={"animate"}
      >
        <div className="social">
          <Icon href="#">
            <FaInstagram />
          </Icon>
          <Icon href="#">
            <FaSquareFacebook />
          </Icon>
          <Icon href="#">
            <FaSquareXTwitter />
          </Icon>
          <Icon href="#">
            <FaYoutube />
          </Icon>
          <Icon href="#">
            <FaRegUser />
          </Icon>
        </div>

        <div className="textContainer">
          <h1>MADES </h1>
          <h2>ETNOEDUCACIÓN DESDE EL TERRITORIO </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            atque nobis illum, consequuntur excepturi voluptatum voluptates.
          </p>
          <motion.div
            className="arrowicon"
            variants={iconsVariants}
            whileHover="hover"
            whileTap={"pressed"} // Esto es opcional, pero añade una escala cuando se hace clic
            animate={"animate"} // Añadir esto para asegurarse de que la transición también se aplica cuando se retira el mouse
          >
            <img src="public/arrow.png" alt="ArrowIcon" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
