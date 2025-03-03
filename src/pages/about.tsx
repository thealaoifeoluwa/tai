import Image from "@/components/image";
import { PlainArrowIcon } from "@/icons/arrow";
import { certifications, volunteering } from "@/utils/data";
import Link from "next/link";

const Page = () => {
  return (
    <main className="sm:pt-36 xl:pt-56">
      <section className="sm:container flex flex-col sm:flex-row justify-center 2xl:justify-end relative">
        <Image
          src="/images/me.png"
          alt="Alao Ifeoluwa"
          className="min-w-full sm:min-w-[400px] sm:relative left-[13%] 2xl:static rounded-b-2xl sm:rounded-b-[32px] sm:rounded-t-[32px]"
        />

        <div className="static sm:absolute left-[7%] md:left-[15%] 2xl:left-10 top-1/2 sm:-translate-y-1/2 mt-6 sm:mt-0">
          <h1 className="text-[30px] lg:text-[40px] 2xl:text-[60px] font-semibold sm:text-center px-5">
            Hola👋
          </h1>
          <div className="2xl:mt-5 text-sm lg:text-base 2xl:text-lg sm:bg-[#EDEDED] dark:sm:bg-[#121212] rounded-3xl px-5 lg:px-8 py-5 lg:py-10 sm:w-[300px] lg:w-[376px]">
            <p className="font-medium">
              My Name is Ifeoluwa Alao. I{"'"}m a designer that is BIG on
              solving problems based on the data available or gotten from user
              research/user testing.
            </p>
            <p className="font-medium mt-5">
              My idea is not just making decisions, but making those decisions
              based on key data or insights i{"'"}m able to get my hands on.
              This makes me do good design, because good design is good
              business.
            </p>
            <p className="font-medium mt-5">
              Outside of my day to day work, I{"'"}m also a gamer, football fan,
              and a <button className="text-primary">mentor.</button>
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 sm:mt-32 px-5 sm:container">
        <h2 className="text-[32px] md:text-[48px] font-semibold md:text-center">
          Highlighting Timeline & Impact
        </h2>
        <p className="mt-4 max-w-[548px] lg:text-lg md:text-center mx-auto">
          Over the past 6 years, I{"'"}ve transformed user experiences across
          different projects. Get a glimpse into my work journey.
        </p>

        <div className="mt-6 pb-32 sm:pb-60 relative lg:text-lg">
          <span className="w-[1px] bg-[#00FF44] h-full absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2" />

          <article className="pl-7 sm:pl-14 flex justify-end pt-20 relative">
            <span className="size-6 rounded-full bg-[#00FF44] absolute top-1/2 -left-3 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2" />
            <div className="md:w-[320px] lg:w-[407px]">
              <p>
                Lead Product Designer at SunFi <br />
                2023 - Present • Nigeria <br />
                I currently lead a design team that contributes to making solar
                power more accessible to Nigerians through Financing, powering
                homes through a reliable energy source, and at the same time
                increasing Jobs in Nigeria by designing products that allow us
                partner with solar installers and manufacturers
                <br />
                <br />
                Senior Associate at Fourthcanvas <br />
                2021 - Present • Nigeria <br />
                So far contributed to the success of brands through Fouthcanvas.
                Companies such as:‍
                <br />
                <br />
                1.  Nomba - Helped the company design its new website &
                webapp/mobile app to strengthen it expansion that helped them
                raise a $30 million pre-Series B.
                <br />
                <br />
                2.  Parkway - Helped the company unveil its rebrand to support
                strategic vision for Fintech startups.
                <br />
                <br />
                3.  Ventures Platform — Helped redesign the company’s website to
                back founders building the future of Africa
              </p>
            </div>
          </article>

          <article className="pl-7 sm:pl-14 flex mt-32 sm:mt-40 relative">
            <span className="size-6 rounded-full bg-[#00FF44] absolute top-1/2 -left-3 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2" />
            <div className="md:w-[320px] lg:w-[407px]">
              <p>
                Contract product designer at Anchor <br />
                2022 - 2023 • Nigeria
                <br />
                <br />
                I contributed to the company raising a $1m Pre-seed round from
                major African VCs and also get into the Y Combinator Summer
                batch 2022 with the re-design of the public beta API
                infrastructure for launch to ensure a very solid user experience
                for end users or consumers — collaborating with managers to
                design prototypes to test, validate assumptions and solutions.
                <br />
                <br />
                Founding Product Designer at Rex Africa <br />
                2021 - 2022 • Nigeria
                <br />
                <br />I helped the company (Savyt) with strategic research and
                re-designed the public beta to deliver high quality experiences
                for different user personal use cases, which later got acquired
                by Rex Africa (https://www.rexafrica.com/) in 2021 after the
                launch allowing the product reach its full potential.
              </p>
            </div>
          </article>

          <article className="pl-7 sm:pl-14 flex justify-end mt-32 sm:mt-40 relative">
            <span className="size-6 rounded-full bg-[#00FF44] absolute top-1/2 -left-3 md:left-1/2 -translate-y-1/2 md:-translate-x-1/2" />
            <div className="md:w-[320px] lg:w-[407px]">
              <p>
                Visual Designer at Daydreams <br />
                2019 - 2020 • Nigeria
                <br />
                <br />
                Customer Experience Designer at Voltacharger 2019 - 2020 •
                Australia (Remote)
                <br />
                <br />
                I contributed to the company raising over $300,000 on two
                different product Campaigns through indiegogo.
                <br />
                <br />
                1. $84,940 in Sept 2019
                <br />
                <br />
                2. $244,699 in Oct 2020
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="py-16 sm:py-28 bg-[#F5F5F5] dark:bg-[#171717] backdrop-blur-md rounded-[32px]">
        <div className="px-5 sm:container">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-primary md:text-center">
            Volunteering
          </h2>

          <div className="mt-3 sm:mt-6 w-full space-y-2">
            {volunteering.map((data, index) => (
              <Box key={index} data={data} />
            ))}
          </div>

          <h2 className="text-[32px] md:text-[40px] font-semibold text-primary md:text-center mt-28">
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
    <article className="px-5 py-4 bg-[#D1D1D1] dark:bg-[#2E2E2E] rounded-3xl md:rounded-[32px] border border-[#A6A6A659] flex justify-between items-start md:items-center">
      <div className="font-semibold  md:text-[24px] lg:text-[28px]">
        <h4>{title}</h4>
        <span className="text-[#A3A3A3]">{date}</span>
      </div>

      <div className="pt-10 md:mt-0">
        <Link
          href={link}
          className="p-2 md:p-3 lg:p-5 rounded-xl md:rounded-2xl lg:rounded-3xl grid place-content-center bg-white dark:bg-black hover:bg-primary dark:hover:bg-primary transition-all duration-500"
        >
          <PlainArrowIcon className="size-3.5 md:size-9" />
        </Link>
      </div>
    </article>
  );
};

export default Page;
