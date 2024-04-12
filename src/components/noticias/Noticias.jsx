import React, { useRef } from "react";
import "./Noticias.scss";
import CardNoticias from "./CardNoticias";
import { Transition } from "../../Variants";

const Noticias = () => {
  return (
    <div className="newsContainer">
      <Transition
        titleClassName={"title"}
        transitionTime={1}
        effectDuration={0.5}
      >
        <div className="subTitle">
          <h1>
            Explora las últimas <b>noticias</b>
          </h1>
        </div>
      </Transition>
      <Transition
        titleClassName={"card"}
        transitionTime={1.5}
        effectDuration={1}
      >
        <CardNoticias />
      </Transition>
    </div>
  );
};

export default Noticias;
