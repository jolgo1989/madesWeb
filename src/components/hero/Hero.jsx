import React from "react";
import "./Hero.scss";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import SideBar from "../sidebar/SideBar";
import { ArrowIcon, Icon, TextHero } from "../../Variants";

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

        <TextHero>
          <h1>MADES </h1>
          <h2>ETNOEDUCACIÓN DESDE EL TERRITORIO </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            atque nobis illum, consequuntur excepturi voluptatum voluptates.
          </p>
          <ArrowIcon href={`#Contactenos`}>
            <img src="public/arrow.png" alt="ArrowIcon" />
          </ArrowIcon>
        </TextHero>
      </div>
    </div>
  );
};

export default Hero;
