// Importación del archivo de estilos Sass para este componente
import "./Noticias.scss";

// Importación del componente CardNoticias
import CardNoticias from "./CardNoticias";

// Importación del componente Transition desde el directorio "../../Variants"
import { Transition } from "../../Variants";

// Definición del componente funcional Noticias
const Noticias = () => {
  return (
    // Contenedor principal con la clase "news-container"
    <div className="news-container">
      {/* Transición para el título */}
      <Transition
        titleClassName={"title"} // Clase CSS para el título durante la transición
        transitionTime={1} // Tiempo de transición en segundos
        effectDuration={0.5} // Duración del efecto de transición en segundos
      >
        {/* Título principal */}
        <div className="sub-title">
          <h1>
            Explora las últimas <b>noticias</b>
          </h1>
        </div>
      </Transition>

      {/* Transición para las cartas de noticias */}
      <Transition
        titleClassName={"card"} // Clase CSS para las cartas durante la transición
        transitionTime={1.5} // Tiempo de transición en segundos
        effectDuration={1} // Duración del efecto de transición en segundos
      >
        {/* Renderización del componente CardNoticias */}
        <CardNoticias />
      </Transition>
    </div>
  );
};

// Exportación del componente Noticias
export default Noticias;
