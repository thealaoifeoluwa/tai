import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

const useSetup = () => {
  const lenis = useLenis();
  const pathname = usePathname();

  // INITIALIZE ANIMATE ON SCROLL
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: true,
    });
  }, []);

  // FIX SCROLL TO TOP ERROR WHEN ENTERING ANOTHER PAGE
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  // LIGHT AND DARK MODE
  const [darkMode, setDarkMode] = useState(null as null | boolean);

  useEffect(() => {
    // Check localStorage first
    const storedTheme = localStorage.getItem("tai.design-theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    } else {
      // Default to system theme
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(systemDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode === null) return; // Avoid running on initial mount
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tai.design-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tai.design-theme", "light");
    }
  }, [darkMode]);

  return { darkMode, setDarkMode };
};

export default useSetup;
