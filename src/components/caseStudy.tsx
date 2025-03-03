import Image from "./image";

export const projects = [
  {
    title: "The Pienexa signal trade tool",
    description:
      "This case study focuses on designing the Nomba unified tool, enabling entrepreneurs to manage outlets, POS payments, and their business bank account, providing a seamless multichannel experience.",
    image: "/images/pienexa.svg",
    color: "#2E4DC0",
    imgContainerClassName: "justify-center items-center ml-10",
  },
  {
    title: "Noshride mobile and website",
    description:
      "This case study focuses on designing the Nomba unified tool, enabling entrepreneurs to manage outlets, POS payments, and their business bank account, providing a seamless multichannel experience.",
    image: "/images/noshride.svg",
    color: "#506400",
    imgContainerClassName: "justify-center items-center",
  },
  {
    title: "Runshift redefining workshift",
    description:
      "This case study focuses on designing the Nomba unified tool, enabling entrepreneurs to manage outlets, POS payments, and their business bank account, providing a seamless multichannel experience.",
    image: "/images/runshift.svg",
    color: "#175B57",
    imgContainerClassName: "justify-end items-end mt-10 pl-10",
  },
  {
    title: "Redesign BigiBrand’s Website",
    description:
      "This case study focuses on designing the Nomba unified tool, enabling entrepreneurs to manage outlets, POS payments, and their business bank account, providing a seamless multichannel experience.",
    image: "/images/bigibrand.svg",
    color: "#8A5916",
    imgContainerClassName: "justify-end items-end pl-5",
  },
];

const CaseStudy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 text-white">
      {projects.map((project, index) => (
        <article
          key={index}
          style={{ backgroundColor: project.color }}
          className="w-full rounded-3xl sm:rounded-[32px] backdrop-blur-md pt-5 sm:pt-9 border border-[#A6A6A659] overflow-hidden"
        >
          <div className="px-5 sm:px-7">
            <h1 className="font-semibold text-xl sm:text-3xl">
              {project.title}
            </h1>
            <p className="mt-5 font-medium text-xs sm:text-base">
              {project.description}
            </p>
          </div>
          <div className={"flex " + project.imgContainerClassName}>
            <Image
              src={project.image}
              alt={project.title}
              className="mt-5 !w-full"
            />
          </div>
        </article>
      ))}
    </div>
  );
};

export default CaseStudy;
