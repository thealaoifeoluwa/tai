import Image from "@/components/image";
import { PlainArrowIcon } from "@/icons/arrow";
import Link from "next/link";

const OtherProjects = () => {
  return (
    <>
      <div className="mt-9 flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-5 lg:items-end">
        <div className="lg:w-[700px] max-w-full">
          <div
            className="w-full h-[450px] bg-slate-500 rounded-2xl overflow-clip"
            data-aos="fade-up"
          >
            {/* first video */}
          </div>
          <div className="flex flex-col sm:flex-row mt-2 gap-2">
            <div
              className="w-full h-[260px] bg-slate-500 rounded-2xl overflow-clip"
              data-aos="fade-up"
            >
              {/* second video */}
            </div>
            <div
              className="w-full h-[260px] bg-slate-500 rounded-2xl overflow-clip"
              data-aos="fade-up"
            >
              {/* third video */}
            </div>
          </div>
        </div>

        <div className="lg:w-[265px]">
          <h4 className="text-2xl font-semibold" data-aos="fade-up">
            Illustration system for Noshride Beta launch
          </h4>
          <p className="mt-5" data-aos="fade-up">
            Crafted and implemented a unique illustration system for Noshride
            website, seamlessly aligning with and enhancing the Noshride brand
            identity for a cohesive visual experience.
          </p>

          <div className="flex gap-4 items-center mt-16" data-aos="fade-up">
            <Link
              href="#"
              className="bg-white dark:bg-black rounded-2xl text-xs sm:text-base border border-[#A6A6A659] p-5 font-semibold text-nowrap"
            >
              See the live version
            </Link>
            <Link
              href="#"
              className="bg-white dark:bg-black rounded-2xl text-xs sm:text-base border border-[#A6A6A659] p-2.5 font-semibold"
            >
              <PlainArrowIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-36 flex flex-col lg:flex-row justify-between gap-10 lg:gap-5 lg:items-end">
        <div className="lg:w-[265px]">
          <h4 className="text-2xl font-semibold" data-aos="fade-up">
            Illustration system for Transmit
          </h4>
          <p className="mt-5" data-aos="fade-up">
            Crafted and implemented a unique illustration system for Transmit
            website, seamlessly aligning with and enhancing the Noshride brand
            identity for a cohesive visual experience.
          </p>

          <div className="flex gap-4 items-center mt-16" data-aos="fade-up">
            <Link
              href="#"
              className="bg-white dark:bg-black rounded-2xl text-xs sm:text-base border border-[#A6A6A659] p-5 font-semibold text-nowrap"
            >
              See the live version
            </Link>
            <Link
              href="#"
              className="bg-white dark:bg-black rounded-2xl text-xs sm:text-base border border-[#A6A6A659] p-2.5 font-semibold"
            >
              <PlainArrowIcon />
            </Link>
          </div>
        </div>

        <div className="lg:w-[700px] max-w-full">
          <div
            className="w-full h-[200px] bg-slate-500 rounded-2xl overflow-clip"
            data-aos="fade-up"
          >
            {/* first video */}
          </div>
          <div
            className="w-full h-[245px] bg-slate-500 rounded-2xl overflow-clip mt-2"
            data-aos="fade-up"
          >
            {/* first video */}
          </div>
          <div className="flex flex-col sm:flex-row mt-2 gap-2">
            <div
              className="w-full h-[260px] bg-slate-500 rounded-2xl overflow-clip"
              data-aos="fade-up"
            >
              {/* second video */}
            </div>
            <div
              className="w-full h-[260px] bg-slate-500 rounded-2xl overflow-clip"
              data-aos="fade-up"
            >
              {/* third video */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherProjects;
