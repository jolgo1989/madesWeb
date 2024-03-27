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
import { ArrowIcon, Icon, HeroTransition } from "./HeroVariants";

const Hero = () => {
  return (
    <div className="hero">
      {/* Menu */}
      <SideBar />
      <HeroTransition>
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
          <ArrowIcon>
            <img src="public/arrow.png" alt="ArrowIcon" />
          </ArrowIcon>
        </div>
      </HeroTransition>
    </div>
  );
};

export default Hero;
