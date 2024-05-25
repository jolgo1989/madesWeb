import { useState, useEffect } from "react";

/**
 * Hook personalizado para detectar si el dispositivo tiene un cursor fino.
 *
 * Este hook utiliza la API de `matchMedia` para verificar si el dispositivo
 * tiene un puntero fino (generalmente asociado con un cursor de ratón).
 *
 * @returns {boolean} - Retorna `true` si el dispositivo tiene un cursor fino, de lo contrario `false`.
 */
const MediaMotion = () => {
  // Estado para almacenar si el dispositivo tiene un cursor fino
  const [hasCursor, setHasCursor] = useState(false);

  useEffect(() => {
    /**
     * Función para verificar si el dispositivo tiene un cursor fino.
     *
     * Utiliza `window.matchMedia` para comprobar la condición `(pointer: fine)`
     * y actualiza el estado `hasCursor` en consecuencia.
     */
    const checkCursor = () => {
      setHasCursor(window.matchMedia("(pointer: fine)").matches);
    };

    // Verificar inicialmente si el dispositivo tiene un cursor fino
    checkCursor();

    // Añadir un event listener para verificar el tamaño de la ventana (resize)
    window.addEventListener("resize", checkCursor);

    // Eliminar el event listener al desmontar el componente
    return () => window.removeEventListener("resize", checkCursor);
  }, []);

  // Retornar el estado que indica si el dispositivo tiene un cursor fino
  return hasCursor;
};

export default MediaMotion;
