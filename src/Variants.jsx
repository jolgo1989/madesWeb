import React from "react";
import { motion } from "framer-motion";

/**
 * Componente de ícono interactivo.
 * Este componente representa un ícono interactivo que puede ser animado al interactuar con él.
 * @param {string} href - La URL a la que se dirige el ícono al hacer clic.
 * @param {ReactNode} children - Los elementos hijos del componente.
 */
export const Icon = ({ href, children }) => {
  return (
    // definir cómo se animan los íconos al interactuar con ellos.
    <motion.a
      href={href}
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
      className="textContainer"
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

export const TitleTransition = ({ children, titleClassName }) => {
  return (
    <motion.div
      className={titleClassName}
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "linear",
        duration: 1,
        y: { duration: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
};

export const CardTransition = ({ children, titleClassName }) => {
  return (
    <motion.div
      className={titleClassName}
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "linear",
        duration: 1.5,
        y: { duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};
