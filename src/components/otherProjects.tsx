import Image from "@/components/image";
import { PlainArrowIcon } from "@/icons/arrow";
import Link from "next/link";
import Video from "./video";

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
            <Video
              src="https://res.cloudinary.com/alaoifeoluwa/video/upload/v1741559786/Tai%20portfolio/-27a3-4175-9d3f-3c8413fb2208_zjjlgo.mp4"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-2 gap-2">
            <div
              className="w-full h-[260px] bg-slate-500 rounded-2xl overflow-clip"
              data-aos="fade-up"
            >
              {/* second video */}
              <Video
                src="https://res.cloudinary.com/alaoifeoluwa/video/upload/v1741559824/Tai%20portfolio/-e216-4154-8038-211cebf17d62_vb8iai.mp4"
                className="w-full h-full"
              />
            </div>
            <div
              className="w-full h-[260px] bg-slate-500 rounded-2xl overflow-clip"
              data-aos="fade-up"
            >
              {/* third video */}
              <Video
                src="https://res.cloudinary.com/alaoifeoluwa/video/upload/v1741559719/Tai%20portfolio/-0773-4b57-bb2d-b56ace3f63c3_k7dslh.mp4"
                className="w-full h-full"
              />
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
            <Video
              src="https://res.cloudinary.com/alaoifeoluwa/video/upload/v1741559789/Tai%20portfolio/8344dcee772e869b835cdf9a646521290fbc0225_wcnaml.mp4"
              className="w-full h-full"
            />
          </div>
          <div
            className="w-full h-[245px] bg-slate-500 rounded-2xl overflow-clip mt-2"
            data-aos="fade-up"
          >
            <Video
              src="https://res.cloudinary.com/alaoifeoluwa/video/upload/v1741559720/Tai%20portfolio/-d2f3-460b-8ad7-874f34acd884_vrynp1.mp4"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-2 gap-2">
            <div
              className="w-full h-[260px] rounded-2xl overflow-clip"
              data-aos="fade-up"
            >
              <Video
                src="https://res.cloudinary.com/alaoifeoluwa/video/upload/v1741559718/Tai%20portfolio/a8caa2e4fad8986df9c11d06a3d8d1c009fbc328_pgc6il.mp4"
                className="w-full h-full scale-105"
              />
            </div>
            <div
              className="w-full h-[260px] rounded-2xl overflow-clip"
              data-aos="fade-up"
            >
              <Video
                src="https://res.cloudinary.com/alaoifeoluwa/video/upload/v1741559718/Tai%20portfolio/f8dd64bea884d6dd9a2dd70f0e7d485f9db18bb5_tyipvi.mp4"
                className="w-full h-full scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherProjects;
