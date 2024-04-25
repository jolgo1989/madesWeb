import React from "react";
import ImgComponent from "./ImgComponent";
import { Transition, Icon } from "../../Variants";
import { Stack, Button } from "@mui/material";
import "./QuienesSomos.scss";
import { FaCheck } from "react-icons/fa6";

const QuienesSomos = () => {
  return (
    <div className="about">
      <Transition
        titleClassName={"titleAbout"}
        transitionTime={1}
        effectDuration={0.5}
      >
        <h1>
          <b>Sirviendo </b> desde 2008
        </h1>
      </Transition>
      <Transition
        titleClassName={"listAbout"}
        transitionTime={1.5}
        effectDuration={1}
      >
        <div className="textAbout">
          <h1>Historia</h1>
          <h2>
            Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed
            vero dolor sea
          </h2>
          <p>
            Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
            nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
            Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut.
            Labor diam sed ipsum et eirmod
          </p>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Read more</Button>
          </Stack>
        </div>
        {/*Licencia <a href="https://www.freepik.com">designed by jannoon028 - Freepik.com</a> */}
        <img src="./public/2096.png" alt="teacher" />
        <div className="textAbout">
          <h1>Visión</h1>
          <p>
            Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
            nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.
            Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut.
            Labor diam sed ipsum et eirmod
          </p>
          <div className="textItem">
            <li>
              <FaCheck className="hola" />
              Lorem ipsum dolor sit amet
            </li>
            <li>
              <FaCheck /> Lorem ipsum dolor sit amet
            </li>
            <li>
              <FaCheck /> Lorem ipsum dolor sit amet
            </li>
          </div>

          <Stack Stack spacing={2} direction="row">
            <Button variant="contained">Read more</Button>
          </Stack>
        </div>
      </Transition>
    </div>
  );
};

export default QuienesSomos;
