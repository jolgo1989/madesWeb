/**
 * Variantes de animación para el componente del héroe.
 * Estas variantes definen la animación de entrada del héroe.
 */
const heroVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
};

/**
 * Componente de transición del héroe.
 * Este componente envuelve el contenido del héroe y define la animación de entrada.
 * @param {ReactNode} children - Los elementos hijos del componente.
 */

export const HeroTransition = ({ children }) => {
  return (
    <motion.div
      className="wrapper"
      variants={heroVariants}
      initial={"initial"}
      animate={"animate"}
    >
      {children}
    </motion.div>
  );
};
