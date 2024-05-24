import { useState, useEffect } from "react";

const MediaMotion = () => {
  const [hasCursor, setHasCursor] = useState(false);

  useEffect(() => {
    const checkCursor = () => {
      setHasCursor(window.matchMedia("(pointer: fine)").matches);
    };

    checkCursor();

    window.addEventListener("resize", checkCursor);
    return () => window.removeEventListener("resize", checkCursor);
  }, []);

  return hasCursor;
};

export default MediaMotion;
