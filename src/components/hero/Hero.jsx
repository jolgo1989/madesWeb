import React from "react";
import "./Hero.scss";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import SideBar from "../sidebar/SideBar";
import { ArrowIcon, Icon } from "../../Variants";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      {/* Menu */}
      <SideBar />
      <div className="wrapper">
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
        </div>

        <motion.div
          className="textContainer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1>MADES </h1>
          <h2>ETNOEDUCACIÓN DESDE EL TERRITORIO </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            atque nobis illum, consequuntur excepturi voluptatum voluptates.
          </p>
          <ArrowIcon href={`#Contactenos`}>
            <img src="public/arrow.png" alt="ArrowIcon" />
          </ArrowIcon>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
