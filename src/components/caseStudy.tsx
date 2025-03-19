import Link from "next/link";
import Image from "./image";
import { projects } from "@/utils/data";

const CaseStudy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 text-white">
      {projects.map((project, index) => (
        <Link
          href={project.link}
          key={index}
          style={{ backgroundColor: project.color }}
          className="w-full min-h-[400px] rounded-3xl sm:rounded-[32px] backdrop-blur-md pt-5 sm:pt-9 border border-[#A6A6A659] relative overflow-hidden group"
          data-aos="fade-up"
        >
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742344090/Tai%20portfolio/texture_iytbnb.svg"
            alt="texture image"
            className="absolute inset-0 !w-full !h-full"
          />
          <div className="px-5 sm:px-7 relative">
            <h1 className="font-semibold text-xl sm:text-3xl">
              {project.title}
            </h1>
            <p className="mt-5 font-medium text-xs sm:text-base">
              {project.description}
            </p>
          </div>
          <div
            className={
              "flex relative transition-all duration-1000 group-hover:scale-110 " +
              project.imgContainerClassName
            }
          >
            <Image
              src={project.image}
              alt={project.title}
              className="mt-5 !w-full"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CaseStudy;
