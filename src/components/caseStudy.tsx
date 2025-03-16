import Link from "next/link";
import Image from "./image";

export const projects = [
  {
    title: "The Pienexa signal trade tool",
    description:
      "This case study focuses on designing the Nomba unified tool, enabling entrepreneurs to manage outlets, POS payments, and their business bank account, providing a seamless multichannel experience.",
    image:
      "https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742129621/Tai%20portfolio/pienexa_krsltl.svg",
    color: "#2E4DC0",
    imgContainerClassName: "justify-center items-center ml-10",
    link: "/projects/pienexa",
  },
  {
    title: "Noshride mobile and website",
    description:
      "This case study focuses on designing the Nomba unified tool, enabling entrepreneurs to manage outlets, POS payments, and their business bank account, providing a seamless multichannel experience.",
    image:
      "https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742129595/Tai%20portfolio/noshride_rzwzrd.svg",
    color: "#506400",
    imgContainerClassName: "justify-center items-center",
    link: "/projects/noshride",
  },
  {
    title: "Runshift redefining workshift",
    description:
      "This case study focuses on designing the Nomba unified tool, enabling entrepreneurs to manage outlets, POS payments, and their business bank account, providing a seamless multichannel experience.",
    image:
      "https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742129618/Tai%20portfolio/runshift_nfjddn.svg",
    color: "#175B57",
    imgContainerClassName: "justify-end items-end mt-10 pl-10",
    link: "/projects/runshift",
  },
  {
    title: "Redesign BigiBrand’s Website",
    description:
      "This case study focuses on designing the Nomba unified tool, enabling entrepreneurs to manage outlets, POS payments, and their business bank account, providing a seamless multichannel experience.",
    image:
      "https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742129624/Tai%20portfolio/bigibrand_uqzypj.svg",
    color: "#8A5916",
    imgContainerClassName: "justify-end items-end pl-5",
    link: "/projects/bigibrand",
  },
];

const CaseStudy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 text-white">
      {projects.map((project, index) => (
        <Link
          href={project.link}
          key={index}
          style={{ backgroundColor: project.color }}
          className="w-full rounded-3xl sm:rounded-[32px] backdrop-blur-md pt-5 sm:pt-9 border border-[#A6A6A659] relative overflow-hidden"
          data-aos="fade-up"
        >
          <Image
            src="/images/texture.png"
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
          <div className={"flex relative " + project.imgContainerClassName}>
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
