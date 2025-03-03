import { useEffect, useState } from "react";

interface ScrollPosition {
  scrollY: number;
  scrollX: number;
  scrollDirection: "up" | "down" | "left" | "right" | null;
}

const useScroll = (): ScrollPosition => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lastScrollX, setLastScrollX] = useState(0);
  const [scrollData, setScrollData] = useState<ScrollPosition>({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: null,
  });

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const currentScrollX = window.scrollX;
    const directionY = currentScrollY > lastScrollY ? "down" : "up";
    const directionX = currentScrollX > lastScrollX ? "right" : "left";

    setScrollData({
      scrollY: currentScrollY,
      scrollX: currentScrollX,
      scrollDirection: currentScrollY !== lastScrollY ? directionY : directionX,
    });

    setLastScrollY(currentScrollY);
    setLastScrollX(currentScrollX);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, lastScrollX]);

  return scrollData;
};

export default useScroll;
