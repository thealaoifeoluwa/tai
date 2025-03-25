import Image from "@/components/image";
import WavingHand from "@/components/waving";
import { PlainArrowIcon } from "@/icons/arrow";
import { certifications, volunteering } from "@/utils/data";
import Link from "next/link";

const Page = () => {
  return (
    <main className="sm:pt-36 xl:pt-56">
      <section className="sm:container flex flex-col sm:flex-row justify-center 2xl:justify-end relative">
        <Image
          src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742342986/Tai%20portfolio/alao-ifeoluwa_pdrvwe.png"
          alt="Alao Ifeoluwa"
          className="min-w-full sm:min-w-[400px] sm:relative scale-105 sm:scale-100 left-[13%] 2xl:static rounded-b-2xl sm:rounded-b-[32px] sm:rounded-t-[32px]"
        />

        <div className="static sm:absolute left-[7%] md:left-[15%] 2xl:left-10 top-1/2 sm:-translate-y-1/2 mt-10 sm:mt-0">
          <h1
            className="text-[30px] lg:text-[40px] 2xl:text-[60px] font-semibold sm:text-center px-5"
            data-aos="fade-up"
          >
            Hola <WavingHand className="md:size-16 mb-6" />
          </h1>
          <div
            data-aos="fade-up"
            className="2xl:mt-5 text-sm lg:text-base 2xl:text-lg sm:bg-[#EDEDED] dark:sm:bg-[#121212] rounded-3xl px-5 lg:px-8 py-5 lg:py-10 sm:w-[300px] lg:w-[376px]"
          >
            <p className="font-medium">
              I{"'"}m Ifeoluwa Alao, a product designer who combines data,
              research, and creativity to craft intuitive, high-impact
              experiences. I focus on usability, engagement, and business
              growth, ensuring design not only looks good but also solves real
              problems and delivers results.
            </p>
            <p className="font-medium mt-5">
              I believe that great design is a powerful business tool, shaping
              products that truly resonate with users.
            </p>
            <p className="font-medium mt-5">
              Beyond work, I{"'"}m a sci-fi and animation fan and a passionate
              &nbsp;
              <Link
                target="_blank"
                href="https://adplist.org/mentors/alao-ifeoluwa-ai"
                className="text-primary"
              >
                mentor, &nbsp;
              </Link>
              always eager to share knowledge and inspiring others.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 sm:mt-32 px-5 sm:container">
        <h2
          className="text-[32px] md:text-[48px] font-semibold md:text-center"
          data-aos="fade-up"
        >
          Highlighting Timeline & Impact
        </h2>
        <p
          className="mt-4 max-w-[548px] lg:text-lg md:text-center mx-auto"
          data-aos="fade-up"
        >
          Over the past 6 years, I{"'"}ve transformed user experiences across
          different projects. Get a glimpse into my work journey.
        </p>

        <div
          className="mt-6 pb-32 sm:pb-60 relative lg:text-lg"
          data-aos="fade-up"
        >
          <span className="w-[1px] bg-[#00FF44] h-full absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2" />

          <article className="pl-7 sm:pl-14 flex justify-end pt-20 relative">
            <span className="size-6 rounded-full bg-[#00FF44] absolute top-1/2 -left-3 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2" />
            <div className="md:w-[320px] lg:w-[407px]">
              <p data-aos="fade-up">
                Lead Product Designer at Logos360<br />
                <span className="text-zinc-500 font-semibold">2023 - Present • United Kingdom</span> <br />
                I currently work at Logos360, as the Lead Product designer where I manage a design 
                team that contributes to making digital products more accessible. 
                <br />
                <br />
                Creative Director at BigiBrand <br />
                 <span className="text-zinc-500 font-semibold">2021 - Present • Nigeria</span><br />
                So far contributed to the success of brands through BigiBrand.
                Companies such as:‍
                <br />
                <br />
                1.  Pienexa - Designed the company's new website, web app, and mobile app for a cryptocurrency platform,
                 increasing user engagement by 30% and mobile app downloads by 20%, driving market expansion.
                <br />
                <br />
                2.  Transmit - Helped the company unveil its rebrand to support
                strategic vision for a digital radio advertisment and won the most
                Innovative AdTech Company at 2024 Brandcom Awards.
                <br />
                <br />
                3.  Otherfaces.tech — Led a team of five(5) on design thinking, user 
                research and usability testing to build a platform
                where non-coding techies can follow a career
                roadmap and read the stories of leaders in their field.
              </p>
            </div>
          </article>

          <article className="pl-7 sm:pl-14 flex mt-32 sm:mt-40 relative">
            <span className="size-6 rounded-full bg-[#00FF44] absolute top-1/2 -left-3 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2" />
            <div className="md:w-[320px] lg:w-[407px]">
              <p data-aos="fade-up">
                Contract Product Designer at Renevation lab <br />
                <span className="text-zinc-500 font-semibold">2022 - 2025 • United State</span>
                <br />
                <br />
                I contributed to the company to build a product worthy of Y Combinator application — collaborating with managers to
                design prototypes to test, validate assumptions and solutions.
                <br />
                <br />
                Contract Product Designer at Pedagogic Hub <br />
                <span className="text-zinc-500 font-semibold">2022 - 2023  • Nigeria</span><br />
                <br />Redesigned the e-learning platform, which resulted in
                a 30% increase in user satisfaction and a 10%
                decrease in bounce rate.
                <br />
                <br />
                Designed brand identity guideline, created social
                media design templates for the junior designer
                on the team and organizes training session for a
                design team of three (3).
              </p>
            </div>
          </article>

          <article className="pl-7 sm:pl-14 flex justify-end mt-32 sm:mt-40 relative">
            <span className="size-6 rounded-full bg-[#00FF44] absolute top-1/2 -left-3 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2" />
            <div className="md:w-[320px] lg:w-[407px]">
              <p data-aos="fade-up">
                Visual Designer at Ensapuh <br />
                <span className="text-zinc-500 font-semibold">2020 - 2022 • Nigeria</span>
                <br />
                <br />
                Creators and Creations - Community Lead <br />
                <span className="text-zinc-500 font-semibold">2019 - Present • Nigeria (Remote)</span>
                <br />
                <br />
                Formed an active community of +150 creatives where
                projects are reviewed, corrected and creative
                resources are being shared for personal development.
                <br />
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="py-16 sm:py-28 bg-[#F8F8F8] dark:bg-[#171717] backdrop-blur-md rounded-[32px]"
        data-aos="fade-up"
      >
        <div className="px-5 sm:container">
          <h2
            className="text-[32px] md:text-[40px] font-semibold text-primary md:text-center"
            data-aos="fade-up"
          >
            Volunteering
          </h2>

          <div className="mt-3 sm:mt-6 w-full space-y-2">
            {volunteering.map((data, index) => (
              <Box key={index} data={data} />
            ))}
          </div>

          <h2
            className="text-[32px] md:text-[40px] font-semibold text-primary md:text-center mt-28"
            data-aos="fade-up"
          >
            Certifications
          </h2>

          <div className="mt-3 sm:mt-6 w-full space-y-2">
            {certifications.map((data, index) => (
              <Box key={index} data={data} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const Box = ({ data }: { data: (typeof volunteering)[0] }) => {
  const { link, date, title } = data;
  return (
    <article
      data-aos="fade-up"
      className="px-5 py-5 bg-[#D1D1D1] dark:bg-[#2E2E2E] rounded-3xl md:rounded-[32px] border border-[#A6A6A659] flex justify-between items-start md:items-center"
    >
      <div className="font-semibold md:text-[24px] lg:text-[28px]">
        <h4>{title}</h4>
        <span className="text-[#A3A3A3]">{date}</span>
      </div>

      <div className="pt-10 md:pt-0">
        <Link
          href={link}
          target="_blank"
          className="p-2 md:p-3 lg:p-7 rounded-xl md:rounded-2xl lg:rounded-3xl grid place-content-center bg-white dark:bg-black hover:bg-primary dark:hover:bg-primary transition-all duration-500"
        >
          <PlainArrowIcon className="size-3.5 md:size-10" />
        </Link>
      </div>
    </article>
  );
};

export default Page;
