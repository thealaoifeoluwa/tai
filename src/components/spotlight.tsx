import { ArrowLinkIcon, ArrowLeftIcon } from "@/icons/arrow";
import { spotlights } from "@/utils/data";
import Link from "next/link";
import { useRef } from "react";
import Image from "./image";

const Spotlight = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const showMore = (direction: "prev" | "next") => {
    if (containerRef.current) {
      const scrollAmount = 346 + 12; // article width + gap (min-w-[346px] + gap-3)
      containerRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-9 relative text-white sm:container" data-aos="fade-up">
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-scroll scrollbar scroll-smooth px-5 sm:px-0"
      >
        {spotlights.map((data, index) => (
          <article
            key={index}
            className="min-w-[307px] sm:min-w-[346px] w-[346px] h-[600px] min-h-[600px] sm:h-[680px] rounded-[32px] bg-[#949494] px-5 sm:px-7 py-8 relative overflow-clip group"
          >
            <Image
              src={data.bgImage}
              alt="cover image"
              className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-1000 group-hover:scale-110"
            />
            <h3 className="font-semibold text-xl sm:text-2xl relative">
              {data.title}
            </h3>
            <p className="mt-3.5 text-sm sm:text-base relative">{data.note}</p>
            <Link
              href={data.link}
              target="_blank"
              className="absolute right-5 bottom-5"
            >
              <ArrowLinkIcon />
            </Link>
          </article>
        ))}
      </div>

      <button
        onClick={() => showMore("prev")}
        className="absolute -left-10 top-[45%] -translate-y-1/2 hidden md:inline-block"
      >
        <ArrowLeftIcon />
      </button>
      <button
        onClick={() => showMore("next")}
        className="absolute -right-10 top-[45%] -translate-y-1/2 hidden md:inline-block"
      >
        <span className="rotate-180 inline-block">
          <ArrowLeftIcon />
        </span>
      </button>
    </div>
  );
};

export default Spotlight;
