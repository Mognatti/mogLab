import { useEffect, useState } from "react";
export default function useWindowScroll() {
  const [Ypos, setYpos] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYpos(window.scrollY);
    });
  }, [window.scrollY]);

  return [{ Ypos }];
}
