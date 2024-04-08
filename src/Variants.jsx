import React from "react";
import { motion } from "framer-motion";
/**
 * Variantes de animación para los íconos.
 * Estas variantes definen cómo se animan los íconos al interactuar con ellos.
 */
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

/**
 * Componente de ícono interactivo.
 * Este componente representa un ícono interactivo que puede ser animado al interactuar con él.
 * @param {string} href - La URL a la que se dirige el ícono al hacer clic.
 * @param {ReactNode} children - Los elementos hijos del componente.
 */
export const Icon = ({ href, children }) => {
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

/**
 * Componente de ícono de flecha.
 * Este componente representa un ícono de flecha que puede ser animado al interactuar con él.
 * @param {ReactNode} children - Los elementos hijos del componente.
 */
export const ArrowIcon = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      className="arrowicon"
      variants={iconsVariants}
      whileHover="hover"
      whileTap="pressed"
      animate="animate"
    >
      {children}
    </motion.a>
  );
};
