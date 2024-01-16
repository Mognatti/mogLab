import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.outerWidth);
    });
  }, [window.outerWidth]);

  return [{ windowWidth }];
}
