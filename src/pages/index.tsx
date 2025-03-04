import CaseStudy from "@/components/caseStudy";
import Image from "@/components/image";
import Spotlight from "@/components/spotlight";
import { PlainArrowIcon } from "@/icons/arrow";
import MailIcon from "@/icons/mailIcon";
import VideoIcon from "@/icons/videoIcon";
import Link from "next/link";

export default function Home() {
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
          className="mt-3 text-[20px] sm:text-[36px] leading-[38px] sm:leading-[46px] text-[#949494] font-semibold"
          data-aos="fade-up"
        >
          I help businesses find the perfect balance between user needs &
          business objectives with a compelling{" "}
          <span className="text-black dark:text-white">product design</span>.
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
            <Link href="#" className="text-primary">
              Logos360
            </Link>
            , as the Lead Product designer where I manage a design team that
            contributes to making digital products more accessible to Nigerians.
            I also mentor designers around the world at{" "}
            <Link href="#" className="text-primary">
              BigiBrand
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-primary">
              ADPlist
            </Link>
          </h3>
        </div>

        <div className="mt-12 flex gap-6">
          <button
            data-aos="fade-up"
            className="bg-black dark:bg-white font-semibold flex gap-3 sm:gap-6 items-center p-3 sm:p-5 rounded-[10px] sm:rounded-2xl text-white dark:text-black"
          >
            <span className="inline-block -mb-1 text-xs sm:text-base text-nowrap">
              Email me
            </span>{" "}
            <MailIcon />
          </button>
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
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl sm:text-4xl text-[#949494]">
            Selected case studies
          </h2>
          <button className="bg-white dark:bg-black rounded-[10px] sm:rounded-2xl text-xs sm:text-base border border-[#A6A6A659] p-3 sm:p-5 font-semibold">
            More
          </button>
        </div>

        <CaseStudy />
      </section>

      <section className="py-16 sm:py-44 bg-[#F5F5F5] dark:bg-[#171717] backdrop-blur-md rounded-[32px]">
        <div className="">
          <div className="flex justify-between items-center px-5 sm:container">
            <h2 className="font-semibold text-xl sm:text-4xl w-[70%] sm:w-full">
              Moments, Contributions and spotlights
            </h2>
            <button className="bg-white dark:bg-black rounded-[10px] sm:rounded-2xl text-xs sm:text-base border border-[#A6A6A659] p-3 sm:p-5 font-semibold">
              More
            </button>
          </div>

          <Spotlight />
        </div>
      </section>

      <section className="py-20 sm:py-44">
        <div className="px-5 sm:container">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl sm:text-4xl">
              Other Projects
            </h2>
            <button className="bg-white dark:bg-black rounded-[10px] sm:rounded-2xl text-xs sm:text-base border border-[#A6A6A659] p-3 sm:p-5 font-semibold">
              More
            </button>
          </div>

          <div className="mt-9 flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-5 lg:items-end">
            <div className="lg:w-[700px] max-w-full">
              <div className="w-full h-[450px] bg-slate-500 rounded-2xl overflow-clip">
                {/* first video */}
              </div>
              <div className="flex flex-col sm:flex-row mt-2 gap-2">
                <div className="w-full h-[260px] bg-slate-500 rounded-2xl overflow-clip">
                  {/* second video */}
                </div>
                <div className="w-full h-[260px] bg-slate-500 rounded-2xl overflow-clip">
                  {/* third video */}
                </div>
              </div>
            </div>

            <div className="lg:w-[265px]">
              <h4 className="text-2xl font-semibold">
                Illustration system for Noshride Beta launch
              </h4>
              <p className="mt-5">
                Crafted and implemented a unique illustration system for
                Noshride website, seamlessly aligning with and enhancing the
                Noshride brand identity for a cohesive visual experience.
              </p>

              <div className="flex gap-4 items-center mt-16">
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
              <h4 className="text-2xl font-semibold">
                Illustration system for Transmit
              </h4>
              <p className="mt-5">
                Crafted and implemented a unique illustration system for
                Transmit website, seamlessly aligning with and enhancing the
                Noshride brand identity for a cohesive visual experience.
              </p>

              <div className="flex gap-4 items-center mt-16">
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
              <div className="w-full h-[200px] bg-slate-500 rounded-2xl overflow-clip">
                {/* first video */}
              </div>
              <div className="w-full h-[245px] bg-slate-500 rounded-2xl overflow-clip mt-2">
                {/* first video */}
              </div>
              <div className="flex flex-col sm:flex-row mt-2 gap-2">
                <div className="w-full h-[260px] bg-slate-500 rounded-2xl overflow-clip">
                  {/* second video */}
                </div>
                <div className="w-full h-[260px] bg-slate-500 rounded-2xl overflow-clip">
                  {/* third video */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
