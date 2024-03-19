import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Stack, Button } from "@mui/material";
import "./Proyectos.scss";

// Datos para los elementos del portafolio
const items = [
  {
    id: 1,
    title: "Proyecto#1",
    img: "https://images.pexels.com/photos/3894383/pexels-photo-3894383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum asperiores itaque similique nisi impedit, illum architecto ratione consequatur aspernatur velit eveniet saepe! Molestias quisquam officia recusandae accusantium porro, alias dolores.",
  },
  {
    id: 2,
    title: "Proyecto#2",
    img: "https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum asperiores itaque similique nisi impedit, illum architecto ratione consequatur aspernatur velit eveniet saepe! Molestias quisquam officia recusandae accusantium porro, alias dolores.",
  },
  {
    id: 3,
    title: "Proyecto#3",
    img: "https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum asperiores itaque similique nisi impedit, illum architecto ratione consequatur aspernatur velit eveniet saepe! Molestias quisquam officia recusandae accusantium porro, alias dolores.",
  },
  {
    id: 4,
    title: "Proyecto#4",
    img: "https://images.pexels.com/photos/4262167/pexels-photo-4262167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum asperiores itaque similique nisi impedit, illum architecto ratione consequatur aspernatur velit eveniet saepe! Molestias quisquam officia recusandae accusantium porro, alias dolores.",
  },
  // Agregar más elementos según sea necesario
];

// Componente para un solo elemento del portafolio
const Single = ({ items }) => {
  const ref = useRef();

  // Hook para obtener el progreso del desplazamiento
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  // Transformación para animar la posición en Y según el progreso del desplazamiento
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [
      -300,
      300 /* Velocidad a la animación al momento de desplazarnos en el eje Y */,
    ]
  );

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={items.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{items.title}</h2>
            <p>{items.desc}</p>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Read more</Button>
            </Stack>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const Proyectos = () => {
  const ref = useRef();

  // Hook para obtener el progreso del desplazamiento
  const { scrollYProgress } = useScroll({
    // "end end" significa que la animación debe comenzar cuando el borde inferior del contenedor (referenciado por ref) coincide con el borde inferior del viewport.
    // "start start" significa que la animación debe finalizar cuando el borde superior del contenedor coincide con el borde superior del viewport.
    target: ref,
    offset: ["end end", "start start"], // La animación comienza cuando el borde inferior del contenedor coincide con el borde inferior del viewport.
  });

  // Animación de muelle para escalar la barra de progreso
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="proyectos" ref={ref}>
      <div className="progress">
        <h1>Proyectos</h1>
        {/* Div con animación de escala en X basada en el progreso del desplazamiento */}
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {/* Mapeo a través del array de items y renderizando cada componente Single */}
      <motion.div variants={variants} initial={"initial"} animate={"animate"}>
        {items.map((item) => (
          <Single items={item} key={item.id} />
        ))}
      </motion.div>
    </div>
  );
};

export default Proyectos;
