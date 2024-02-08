import { useState, useEffect } from "react";

// Custom hook to get the current window width.
export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};
