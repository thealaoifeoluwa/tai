import CaseStudy from "@/components/caseStudy";
import OtherProjects from "@/components/otherProjects";
import Spotlight from "@/components/spotlight";
import MailIcon from "@/icons/mailIcon";
import VideoIcon from "@/icons/videoIcon";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "product design",
        "creative design",
        "web design",
        "app design",
        "brand design",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      backDelay: 3000,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <main className="pt-[120px] sm:pt-[200px]">
      {/* HERO SECTION */}
      <section className="px-5 sm:container">
        <h1
          className="text-[28px] sm:text-[36px] leading-[38px] sm:leading-[46px] font-semibold"
          data-aos="fade-up"
        >
          Hi,👋 <br />
          I’m Ifeoluwa Alao.
        </h1>
        <h2
          className="mt-3 text-[20px] sm:text-[34px] leading-[38px] sm:leading-[46px] text-[#949494] font-semibold"
          data-aos="fade-up"
        >
          I help businesses find the perfect balance between user needs &
          business objectives with a compelling{" "}
          <span className="text-black dark:text-white" ref={typedRef}></span>.
        </h2>

        <div className="flex md:flex-row flex-col gap-10 justify-between mt-8 leading-[25px] font-light">
          <h3 className="md:max-w-[500px]" data-aos="fade-up">
            As a Product Designer with more than 6 years of specialized
            experience in product design, I excel at transforming abstract ideas
            into visually stunning designs. My portfolio spans a variety of
            sectors, including Edtech, Fintech, E-commerce, and Data Analytics.
          </h3>
          <h3 className="md:max-w-[500px]" data-aos="fade-up">
            I currently work at{" "}
            <Link
              href="https://www.logos360.co.uk/"
              target="_blank"
              className="text-primary"
            >
              Logos360
            </Link>
            , as the Lead Product designer where I manage a design team that
            contributes to making digital products more accessible to Nigerians.
            I also mentor designers around the world at{" "}
            <Link
              href="https://www.bigibrand.com/"
              target="_blank"
              className="text-primary"
            >
              BigiBrand
            </Link>{" "}
            and{" "}
            <Link
              href="https://adplist.org/mentors/alao-ifeoluwa-ai"
              target="_blank"
              className="text-primary"
            >
              ADPlist
            </Link>
          </h3>
        </div>

        <div className="mt-12 flex gap-6">
          <Link
            href="mailto:alaoifeoluwa@gmail.com"
            data-aos="fade-up"
            className="bg-black dark:bg-white font-semibold flex gap-3 sm:gap-6 items-center p-3 sm:p-5 rounded-[10px] sm:rounded-2xl text-white dark:text-black"
          >
            <span className="inline-block -mb-1 text-xs sm:text-base text-nowrap">
              Email me
            </span>{" "}
            <MailIcon />
          </Link>
          <button
            data-aos="fade-up"
            className="bg-transparent font-semibold flex gap-3 sm:gap-6 items-center p-3 sm:p-5 rounded-[10px] sm:rounded-2xl border border-[#A6A6A6]"
          >
            <span className="inline-block -mb-1 text-xs sm:text-base text-nowrap">
              Watch me talk about myself
            </span>
            <VideoIcon />
          </button>
        </div>
      </section>

      <section className="pt-28 pb-20 sm:pb-44 px-5 sm:container">
        <div className="flex justify-between items-center" data-aos="fade-up">
          <h2 className="font-semibold text-xl sm:text-4xl text-[#949494]">
            Selected case studies
          </h2>
          <Link
            href="/projects"
            className="bg-white dark:bg-black rounded-[10px] sm:rounded-2xl text-xs sm:text-base border border-[#A6A6A659] p-3 sm:p-5 font-semibold"
          >
            More
          </Link>
        </div>

        <CaseStudy />
      </section>

      <section className="py-16 sm:py-44 bg-[#F8F8F8] dark:bg-[#171717] backdrop-blur-md rounded-[32px]">
        <div className="">
          <div
            className="flex justify-between items-center gap-5 px-5 sm:container"
            data-aos="fade-up"
          >
            <h2 className="font-semibold text-xl sm:text-4xl w-[70%] sm:w-full">
              Moments, Contributions and spotlights
            </h2>
            <Link
              href="/about"
              className="bg-white dark:bg-black rounded-[10px] sm:rounded-2xl text-xs sm:text-base border border-[#A6A6A659] p-3 sm:p-5 font-semibold"
            >
              More
            </Link>
          </div>

          <Spotlight />
        </div>
      </section>

      <section className="py-20 sm:py-44">
        <div className="px-5 sm:container">
          <div className="flex justify-between items-center" data-aos="fade-up">
            <h2 className="font-semibold text-xl sm:text-4xl text-[#949494]">
              Other Projects
            </h2>
            <Link
              href="/projects"
              className="bg-white dark:bg-black rounded-[10px] sm:rounded-2xl text-xs sm:text-base border border-[#A6A6A659] p-3 sm:p-5 font-semibold"
            >
              More
            </Link>
          </div>

          <OtherProjects />
        </div>
      </section>
    </main>
  );
}
