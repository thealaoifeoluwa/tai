import useScroll from "@/hooks/useScroll";
import useSetup from "@/hooks/useSetup";
import { CloseIcon, OpenIcon } from "@/icons/menu";
import {
  BehanceIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  XIcon,
} from "@/icons/socials";
import { MoonIcon, SunIcon } from "@/icons/theme";
import { useLenis } from "@studio-freight/react-lenis";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import GradientBg from "./gradientBg";

const Header = () => {
  const lenis = useLenis();
  const { darkMode, setDarkMode } = useSetup();
  const { scrollDirection, scrollY } = useScroll();

  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const loader = document.querySelector("#loader");
    if (!loader?.classList.contains("close")) return;

    if (openDropdown) {
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
      lenis?.stop();
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.height = "";
      lenis?.start();
    }
  }, [openDropdown, lenis]);

  return (
    <>
      <header
        className={clsx(
          "px-3 fixed left-0 w-full z-40 transition-all duration-300 ease-in-out",
          scrollY > 250 && scrollDirection === "down"
            ? "-top-[120px]"
            : "top-0",
          scrollY > 20 ? "py-4 px-5 md:px-10" : "py-1"
        )}
      >
        <div
          className={clsx(
            "py-3 lg:py-6 px-3 lg:px-8 mx-auto transition-all duration-300",
            scrollY > 20
              ? "bg-[#DBDBDB87] dark:bg-[#38383887] w-[300px] md:w-full max-w-full backdrop-blur-2xl rounded-[30px] lg:rounded-[50px]"
              : "w-full bg-transparent"
          )}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-3.5 md:gap-5 items-center">
              <Link href="/" className="font-bold text-base md:text-2xl">
                Tai.design
              </Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="scale-[0.8] md:scale-100 -mt-1"
              >
                {darkMode ? <MoonIcon /> : <SunIcon />}
              </button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setOpenDropdown(true)}
            >
              <OpenIcon />
            </button>

            <div className="md:flex gap-7 hidden">
              <Link
                href="/projects/pienexa"
                className="hover:text-primary font-medium"
              >
                Projects
              </Link>
              <Link href="/about" className="hover:text-primary font-medium">
                About
              </Link>
              <button className="hover:text-primary font-medium">Resume</button>
            </div>

            <div className="hidden md:flex gap-4">
              <button>
                <LinkedinIcon />
              </button>
              <button>
                <MailIcon />
              </button>
              <button>
                <XIcon />
              </button>
              <button>
                <InstagramIcon />
              </button>
              <button>
                <BehanceIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DROPDOWN LINKS */}
      <div
        className={clsx(
          "fixed top-0 h-screen overflow-hidden w-full px-4 bg-white dark:bg-black md:hidden z-50 transition-all duration-300",
          openDropdown ? "left-0 opacity-100" : "left-[110%] opacity-0"
        )}
      >
        <GradientBg />
        <div className="flex justify-between items-center py-5">
          <div className="flex gap-3.5 md:gap-5 items-center">
            <Link href="/" className="font-bold text-base md:text-2xl">
              Tai.design
            </Link>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="scale-[0.8] md:scale-100 -mt-1"
            >
              {darkMode ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

          <button className="p-2" onClick={() => setOpenDropdown(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="mt-7 flex flex-col gap-2 justify-between h-[calc(90%_-_20px)]">
          <div className="flex flex-col items-center justify-between h-[40%]">
            <Link href="/projects/pienexa" className="text-[52px] font-medium">
              Project
            </Link>
            <Link href="/about" className="text-[52px] font-medium">
              About
            </Link>
            <button className="text-[52px] font-medium">Resume</button>
          </div>

          <div className="flex justify-center gap-4 mt-[15%]">
            <button>
              <LinkedinIcon />
            </button>
            <button>
              <MailIcon />
            </button>
            <button>
              <XIcon />
            </button>
            <button>
              <InstagramIcon />
            </button>
            <button>
              <BehanceIcon />
            </button>
          </div>

          <Link
            href="mailto:alaoifeoluwa@gmail.com"
            className="text-[#A6A6A659] text-center text-[42px] font-medium"
          >
            Start a project
          </Link>

          <div className="flex justify-center -mb-10">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </>
  );
};

const ArrowIcon = () => (
  <svg
    width="16"
    height="153"
    viewBox="0 0 16 153"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.7071 0.292892C8.31658 -0.0976257 7.68341 -0.0976257 7.29289 0.292892L0.928926 6.65686C0.538401 7.04738 0.538401 7.68054 0.928926 8.07108C1.31945 8.46159 1.95262 8.46159 2.34314 8.07108L7.99999 2.41422L13.6568 8.07108C14.0474 8.46159 14.6805 8.46159 15.0711 8.07108C15.4616 7.68054 15.4616 7.04738 15.0711 6.65686L8.7071 0.292892ZM9 153L8.99999 1L6.99999 1L7 153L9 153Z"
      fill="#A6A6A6"
      fill-opacity="0.35"
    />
  </svg>
);

export default Header;
