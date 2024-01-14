import { useEffect, useState } from "react";
export default function useWindowScroll() {
  const [Ypos, setYpos] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setYpos(window.scrollY);
    });
  }, [window.scrollY]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return [{ Ypos, scrollToTop }];
}
