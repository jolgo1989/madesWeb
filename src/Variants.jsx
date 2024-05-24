import React from "react";
import { color, motion } from "framer-motion";
import MediaMotion from "./MediaMotion";

/**
 * Componente de ícono interactivo.
 * Este componente representa un ícono interactivo que puede ser animado al interactuar con él.
 * @param {string} href - La URL a la que se dirige el ícono al hacer clic.
 * @param {ReactNode} children - Los elementos hijos del componente.
 */
export const Icon = ({ href, children }) => {
  const mediaQuery = MediaMotion();
  const animationProps = mediaQuery
    ? {
        whileHover: {
          scale: 1.1,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        },
        whileTap: { scale: 0.95 },
        animate: {
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        },
      }
    : { whileTap: { color: "#23aea8" } };
  return (
    // definir cómo se animan los íconos al interactuar con ellos.
    <motion.a href={href} {...animationProps}>
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
      className="textContainer__arrowIcon"
      whileHover={{
        scale: 1.1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
    >
      {children}
    </motion.a>
  );
};

export const TextHero = ({ children }) => {
  return (
    <motion.div
      className="hero__textContainer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export const Transition = ({
  children,
  titleClassName,
  transitionTime,
  effectDuration,
}) => {
  return (
    <motion.div
      className={titleClassName}
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "linear",
        duration: transitionTime,
        y: { duration: effectDuration },
      }}
    >
      {children}
    </motion.div>
  );
};
