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
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaSquareFacebook />
          </a>
          <a href="#">
            <FaSquareXTwitter />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaRegUser />
          </a>
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
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="public/arrow.png" alt="ArrowIcon" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
