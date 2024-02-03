import React, { useRef } from "react";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion, useCycle } from "framer-motion";
import "./sideBar.scss";
import UseDimension from "./usedimension/UseDimension";
import Links from "./links/Links";

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideBar = () => {
  // Hook useCycle para manejar el estado cíclico de isOpen
  const [isOpen, setIsOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = UseDimension(containerRef);
  return (
    // Contenedor animado usando Framer Motion
    <motion.nav
      className="sidebar"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="background"
        variants={variants}
        custom={height}
        ref={containerRef}
      >
        <Links />
      </motion.div>

      <ToggleButton toggle={() => setIsOpen()} />
      {/* Componente de botón de alternancia del menú */}
    </motion.nav>
  );
};

export default SideBar;
