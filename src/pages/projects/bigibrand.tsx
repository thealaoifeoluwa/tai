import Image from "@/components/image";
import OverflowContainer from "@/components/overflowContainer";
import {
  ArrowLeftIconAlt,
  BendArrowIcon,
  PlainArrowIcon,
  PlainArrowIconAlt,
} from "@/icons/arrow";
import DragIcon from "@/icons/drag";
import clsx from "clsx";
import Link from "next/link";
import Router from "next/router";

const Page = () => {
  return (
    <main>
      <section className="min-h-[540px] md:min-h-[636px] w-full bg-orange-500 rounded-b-2xl sm:rounded-b-3xl overflow-clip relative">
        <Image
          src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742336485/Tai%20portfolio/Bigibrand/Hero_tngtwt.svg"
          alt="Pienexa cover image"
          className="w-full h-full absolute inset-0 hidden sm:block"
        />
        <Image
          src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742336492/Tai%20portfolio/Bigibrand/Hero_small_tk1hat.svg"
          alt="Pienexa cover image"
          className="w-full h-full absolute inset-0 sm:hidden"
        />

        <div className="px-5 sm:container pt-28 md:pt-44" data-aos="fade-up">
          <button onClick={() => Router.push("/projects")}>
            <ArrowLeftIconAlt className="size-8 sm:size-11" />
          </button>

          <h1 className="mt-14 font-bold text-[40px] md:text-[50px] lg:text-[64px] text-white max-w-[706px]">
            A global brand-centric design agency
          </h1>

          <div className="flex gap-4 items-center mt-16 pb-10">
            <Link
              href="#"
              className="bg-black text-white text-xs sm:text-base rounded-2xl border border-[#A6A6A659] p-5 font-semibold text-nowrap"
            >
              See the live version
            </Link>
            <Link
              href="#"
              className="bg-black rounded-2xl border border-[#A6A6A659] p-2.5 font-semibold"
            >
              <PlainArrowIconAlt />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 sm:mt-20">
        <div className="px-5 sm:container">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="lg:max-w-[576px]">
              <h3
                className="font-semibold text-[20px] sm:text-[32px]"
                data-aos="fade-up"
              >
                Bigibrand— A global brand-centric design agency
              </h3>
              <p className="mt-2.5 sm:text-lg" data-aos="fade-up">
                Bigibrand, a leading design agency specializing in modern design
                solutions, aimed to undergo a complete rebrand and launch a new
                website to reflect its evolving vision.
              </p>
              <p className="mt-5 sm:text-lg" data-aos="fade-up">
                By delving into the agency’s story, industry experience, and
                branding goals, I designed a website that effectively
                communicates its identity and mission. The result is a
                compelling digital presence that enhances brand perception and
                drives higher conversions, positioning Bigibrand as the go-to
                partner for businesses building digital products.
              </p>
            </div>

            <div className="w-full h-fit lg:w-auto grid grid-cols-2 md:grid-cols-1 gap-4">
              <div data-aos="fade-up">
                <span className="text-xs text-[#BCBCBC] inline-block">
                  Role
                </span>
                <h5 className="font-medium sm:text-lg">UI Designer,</h5>
                <h5 className="font-medium sm:text-lg">Web Designer</h5>
              </div>

              <div data-aos="fade-up">
                <span className="text-xs text-[#BCBCBC] inline-block">
                  Industry
                </span>
                <h5 className="font-medium sm:text-lg">Design Agency</h5>
              </div>
              <div data-aos="fade-up">
                <span className="text-xs text-[#BCBCBC] inline-block">
                  Company
                </span>
                <h5 className="font-medium sm:text-lg">Bigibrand</h5>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3
              className="font-semibold text-[24px] sm:text-[32px]"
              data-aos="fade-up"
            >
              Getting Started —{" "}
              <span className="text-[#A3A3A3]">
                Defining the goal with the redesign
              </span>
            </h3>
            <p className="mt-5 sm:text-lg leading-relaxed" data-aos="fade-up">
              Bigibrand wanted more than just a website redesign—they needed a
              platform that clearly communicates their expertise, highlights
              their full range of services, and provides a seamless onboarding
              experience for clients. The goal was to create a website that not
              only informs but also engages and converts visitors effectively.
            </p>
          </div>
          <div className="mt-16">
            <h3
              className="font-semibold text-[24px] sm:text-[32px]"
              data-aos="fade-up"
            >
              How we got started —
              <span className="text-[#A3A3A3]">
                Building the Information Architecture
              </span>
            </h3>
            <p className="mt-5 sm:text-lg leading-relaxed" data-aos="fade-up">
              I started by building the Information Architecture to create a
              clear, intuitive structure that aligns with Bigibrand’s goals.
              This ensured seamless navigation and effective communication of
              their services, laying the foundation for a website that solves
              user challenges while introducing new services.
            </p>
          </div>
        </div>

        <OverflowContainer>
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742336481/Tai%20portfolio/Bigibrand/sitemap_tpccod.svg"
            alt="architecture design"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="mt-24 px-5 sm:container">
          <h3
            className="font-semibold text-[24px] sm:text-[32px]"
            data-aos="fade-up"
          >
            Making contents and components decisions —{" "}
            <span className="text-[#A3A3A3]">Low Fidelity Designs</span>
          </h3>
          <p className="mt-1 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            Understanding the goal of the agency with both the rebrand and also
            redesign of their website, I ensure visitor could easily navigate
            the new website to read about Bigibrand{"'"}s available services,
            about the agency{"'"}s team, the agency{"'"}s story and also access
            for their clients to start project quickly.
          </p>
        </div>

        <OverflowContainer>
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742336482/Tai%20portfolio/Bigibrand/Lowfi_pxv4ee.svg"
            alt="homepage design"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="mt-24 px-5 sm:container">
          <h3
            className="font-semibold text-[24px] sm:text-[32px] max-w-[856px]"
            data-aos="fade-up"
          >
            Collaborating with the brand team
          </h3>
          <p className="sm:text-lg text-[#A3A3A3] mt-6" data-aos="fade-up">
            This phase was crucial, as the agency wasn’t just redesigning its
            website—it was undergoing a full rebrand. Maintaining a consistent
            brand identity was essential. I collaborated closely with
            Bigibrand’s brand strategists and designers to ensure the new design
            accurately reflected their vision.
          </p>
          <p className="sm:text-lg text-[#A3A3A3] mt-2" data-aos="fade-up">
            I then moved on to build a style guide based on the brand elements
            shared with me, including the logo, typeface, and color palette.
            This guide was key to maintaining strong consistency across both the
            rebrand and the new website.
          </p>
        </div>

        <OverflowContainer>
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742336926/Tai%20portfolio/Bigibrand/Style_guide_jg7gu2.png"
            alt="style-guide design"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="mt-24 px-5 sm:container">
          <h3
            className="font-semibold text-[24px] sm:text-[32px] max-w-[856px]"
            data-aos="fade-up"
          >
            Designing the landing page
          </h3>
          <p className="sm:text-lg text-[#A3A3A3] mt-6" data-aos="fade-up">
            Stakeholders and the brand team emphasized the need for a strong
            brand presence on the landing screen, ensuring users instantly
            recognize the brand’s identity. I focused on implementing the brand
            elements boldly and cohesively, creating a visually striking and
            immersive experience.
          </p>
        </div>

        <OverflowContainer>
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742336488/Tai%20portfolio/Bigibrand/mockup1_dkxwda.png"
            alt="bigibrand website on macbook design"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="mt-24 px-5 sm:container">
          <h3
            className="font-semibold text-[24px] sm:text-[32px] max-w-[856px]"
            data-aos="fade-up"
          >
            Other pages
          </h3>
        </div>

        <OverflowContainer>
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742336494/Tai%20portfolio/Bigibrand/mockup2_nldehw.png"
            alt="bigibrand website on macbook design"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>
        <OverflowContainer>
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742336489/Tai%20portfolio/Bigibrand/mockup3_ed25oh.png"
            alt="bigibrand website on macbook design"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>
      </section>

      <div
        className="px-5 sm:container flex gap-5 md:justify-between items-center mt-32"
        data-aos="fade-up"
      >
        <Link
          href="/projects/pienexa"
          className="w-[290px] md:w-[70%] font-semibold text-[20px] md:text-[38px] xl:text-[54px] h-[90px] md:h-[180px] xl:h-[225px] flex justify-center items-center flex-wrap gap-1 sm:gap-3 border-2 md:border-4 border-[#A6A6A659] rounded-[24px] md:rounded-[50px] xl:rounded-[67px]"
        >
          <span className="text-[#A3A3A3]">Next Project:</span>
          Pienexa
        </Link>
        <Link
          href="/projects/pienexa"
          className="min-w-[70px] md:w-[20%] md:min-w-[160px] h-[70px] md:h-[160px] xl:h-[195px] flex justify-center items-center border-2 md:border-4 border-[#A6A6A659] rounded-[24px] md:rounded-[50px] xl:rounded-[67px]"
        >
          <span>
            <PlainArrowIcon className="size-10 md:size-16" />
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Page;
