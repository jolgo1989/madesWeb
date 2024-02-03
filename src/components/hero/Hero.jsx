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
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    //Animación imagen scroll
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      {/* Menu */}
      <SideBar />
      <div className="wrapper">
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

        <motion.div
          initial="initial"
          animate="animate"
          className="textContainer"
        >
          <motion.h1 variants={textVariants}>MADES </motion.h1>
          <motion.h2 variants={textVariants}>
            ETNOEDUCACIÓN DESDE EL TERRITORIO
          </motion.h2>
          <motion.p variants={textVariants}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            atque nobis illum, consequuntur excepturi voluptatum voluptates.
            Maiores ut voluptatum impedit quod.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
