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

const Page = () => {
  return (
    <main>
      <section className="min-h-[540px] md:min-h-[636px] w-full bg-green-900 rounded-b-2xl sm:rounded-b-3xl">
        <div className="px-5 sm:container pt-28 md:pt-44" data-aos="fade-up">
          <button>
            <ArrowLeftIconAlt className="size-8 sm:size-11" />
          </button>

          <h1 className="mt-14 font-bold text-[40px] md:text-[50px] lg:text-[64px] text-white max-w-[825px]">
            Simplifying shifts, payroll, and reports for efficiency.
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
                Project background
              </h3>
              <p className="mt-2.5 sm:text-lg" data-aos="fade-up">
                This project focuses on designing the Noshride mobile delivery
                app with a user-centered approach, applying cognitive science
                principles to enhance user understanding and create a more
                intuitive, efficient experience.
              </p>
            </div>

            <div className="w-full lg:w-auto grid grid-cols-2 md:grid-cols-1 gap-4">
              <div data-aos="fade-up">
                <span className="text-xs text-[#BCBCBC] inline-block">
                  Role
                </span>
                <h5 className="font-medium sm:text-lg">UX/UI Designer</h5>
              </div>

              <div data-aos="fade-up">
                <span className="text-xs text-[#BCBCBC] inline-block">
                  Industry
                </span>
                <h5 className="font-medium sm:text-lg">Management</h5>
              </div>
              <div data-aos="fade-up">
                <span className="text-xs text-[#BCBCBC] inline-block">
                  Company
                </span>
                <h5 className="font-medium sm:text-lg">Runshift 360 </h5>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3
              className="font-semibold text-[24px] sm:text-[32px]"
              data-aos="fade-up"
            >
              Getting Started —{" "}
              <span className="text-[#A3A3A3]">Defining the Problem</span>
            </h3>
            <p className="mt-5 sm:text-lg leading-relaxed" data-aos="fade-up">
              The food delivery market faces several challenges, including high
              delivery fees, long wait times, inconsistent food quality, limited
              healthy options, and poor user experience. Many services charge
              excessive fees, making food delivery expensive. Delays during peak
              hours cause frustration, while incorrect or missing items further
              impact customer satisfaction.
            </p>
            <p className="mt-5 sm:text-lg leading-relaxed" data-aos="fade-up">
              Accessibility and transparency are also major concerns. Hidden
              charges, unclear delivery estimates, and a lack of personalized
              meal recommendations make ordering difficult. A study found that
              65% of users abandon their carts due to high fees or complicated
              checkout processes, highlighting the need for a more seamless
              experience.
            </p>
            <p className="mt-5 sm:text-lg leading-relaxed" data-aos="fade-up">
              Noshride solves these issues by offering a fast, affordable, and
              user-friendly food delivery platform. With real-time order
              tracking, transparent pricing, and AI-powered meal
              recommendations, we make ordering food effortless. Our curated
              restaurant selection ensures quality and variety, while our
              optimized delivery system reduces wait times. By prioritizing
              convenience, reliability, and customer satisfaction, Noshride
              transforms food delivery into a hassle-free experience.
            </p>
          </div>
        </div>

        <OverflowContainer>
          <Image
            src="/images/projects/noshride/how-do-we.svg"
            alt="mobile screens"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="mt-24 px-5 sm:container">
          <h3
            className="font-semibold text-[24px] sm:text-[32px]"
            data-aos="fade-up"
          >
            Asking Important Questions —{" "}
            <span className="text-[#A3A3A3]">Market Research and Insights</span>
          </h3>
          <p className="mt-1 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            I led the research team on targeted survey that focused on frequent
            food delivery users, including busy professionals, students, and
            families. This was followed by in-depth interviews with twenty
            regular users, allowing us to gather firsthand insights into their
            experiences, frustrations, and expectations from an ideal food
            delivery app. These insights were crucial in shaping the key focus
            areas for Noshride’s MVP.
          </p>

          <h3
            className="font-semibold text-[24px] sm:text-[32px] mt-10 max-w-[856px]"
            data-aos="fade-up"
          >
            Notes from Stakeholders —{" "}
            <span className="text-[#A3A3A3]">
              Understanding the business objective & Impact
            </span>
          </h3>
          <p className="sm:text-lg text-[#A3A3A3] mt-6" data-aos="fade-up">
            I wanted to ensure we were meeting the perfect objective already set
            by the stakeholders, these objectives are:
          </p>
          <h6 className="sm:text-lg text-[#A3A3A3] mt-6" data-aos="fade-up">
            Business Objectives
          </h6>
          <ul className="sm:text-lg text-[#A3A3A3] list-disc ml-7">
            <li data-aos="fade-up">
              Seamless User Experience – Provide fast, intuitive, and
              hassle-free food delivery.
            </li>
            <li data-aos="fade-up">
              Affordable & Fast Deliveries – Optimize logistics to reduce costs
              and wait times.
            </li>
            <li data-aos="fade-up">
              Diverse Restaurant Partnerships – Expand options with quality
              restaurant collaborations.
            </li>
            <li data-aos="fade-up">
              Customer Loyalty & Retention – Offer rewards, personalized
              recommendations, and top-tier support.
            </li>
            <li data-aos="fade-up">
              Transparent & Trustworthy Service – Ensure clear pricing, reliable
              tracking, and accurate orders.
            </li>
            <li data-aos="fade-up">
              Scalability & Market Expansion – Grow into suburban and
              underserved regions.
            </li>
            <li data-aos="fade-up">
              Tech-Driven Optimization – Use AI and data analytics for
              efficiency and personalization.
            </li>
          </ul>
          <h6 className="sm:text-lg text-[#A3A3A3] mt-6" data-aos="fade-up">
            Intended Impact
          </h6>

          <ul className="sm:text-lg text-[#A3A3A3] list-disc ml-7">
            <li data-aos="fade-up">
              Better User Experience – Fast, reliable, and stress-free food
              delivery.
            </li>
            <li data-aos="fade-up">
              More Affordable Options – Lower costs and fair pricing for users.
            </li>
            <li data-aos="fade-up">
              Restaurant Growth – Increased visibility and revenue for partners.
            </li>
            <li data-aos="fade-up">
              Job Creation – More opportunities for delivery personnel.
            </li>
            <li data-aos="fade-up">
              Community Engagement – Connecting users with their favorite local
              restaurants.
            </li>
          </ul>

          <h6 className="sm:text-lg text-[#A3A3A3] mt-6" data-aos="fade-up">
            Some other feedback we got from the stakeholders are:
          </h6>
        </div>
      </section>

      {/* NOTE FROM STAKEHOLDERS */}
      <section className="mt-16">
        <div className="px-5 sm:container">
          <span className="block mb-4 min-[1165px]:hidden">
            <DragIcon />
          </span>
          <h5
            className="px-6 py-5 sm:text-2xl text-white bg-[#004613] rounded-3xl inline-block"
            data-aos="fade-up"
          >
            Notes from stakeholders
          </h5>
        </div>

        <OverflowContainer className="!mt-5">
          <Image
            src="/images/projects/noshride/stakeholder-note.svg"
            alt="stakeholder note"
            className="mt-2 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="mt-16 px-5 sm:container">
          <h3
            className="font-semibold text-[24px] sm:text-[32px]"
            data-aos="fade-up"
          >
            Ideating — 
            <span className="text-[#A3A3A3]">Our Solution</span>
          </h3>

          <p className="mt-4 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            To enhance Noshride’s mobile food delivery experience, we designed
            an intuitive and responsive app that ensures seamless navigation,
            quick ordering, and real-time tracking. The mobile-first approach
            prioritizes ease of use, with a clean interface, transparent
            pricing, and personalized meal recommendations.
          </p>
          <p className="mt-5 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            The design fosters user trust by making ordering effortless,
            optimizing speed and convenience, and ensuring a smooth, hassle-free
            food delivery experience for all users.
          </p>

          <div className="my-20 max-w-[540px] mx-auto">
            <h4
              className="font-semibold text-center text-[32px] sm:text-[45px]"
              data-aos="fade-up"
            >
              Users can now order food effortlessly with Noshride’s seamless and
              intuitive mobile app.
            </h4>
          </div>

          <h3
            className="font-semibold text-[24px] sm:text-[32px]"
            data-aos="fade-up"
          >
            User Persona
          </h3>
          <p className="mt-1 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            After identifying Noshride’s diverse user base, we prioritized
            frequent food delivery users, including busy professionals,
            students, and families, and developed personas to understand their
            needs, behaviors, and challenges. At the same time, we considered
            restaurant partners, delivery personnel, and different user roles to
            ensure a seamless, efficient, and inclusive food delivery experience
            for all.
          </p>
        </div>

        <OverflowContainer>
          <Image
            src="/images/projects/noshride/persona.svg"
            alt="user persona"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="px-5 sm:container">
          <h3
            className="font-semibold text-[24px] sm:text-[32px] mt-16"
            data-aos="fade-up"
          >
            Moving Forward
          </h3>
          <p className="mt-1 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            We then visualized and structured the user flow and information
            architecture using a whiteboarding tool. This process helped us
            define key interactions, navigation pathways, and the overall user
            journey, ensuring a seamless and intuitive experience for customers,
            restaurant vendors, and delivery riders on Noshride’s mobile app.
          </p>

          <h3
            className="font-semibold text-[24px] sm:text-[32px] mt-14"
            data-aos="fade-up"
          >
            User Flow
          </h3>
          <p className="mt-1 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            To ensure the smooth operation of Noshride’s ecosystem, which
            involves customers, restaurant vendors, and delivery riders, we
            established a comprehensive user flow. This seamless workflow
            ensures effortless transitions between key app features, enhancing
            efficiency and user experience for all stakeholders.
          </p>
        </div>

        <OverflowContainer>
          <Image
            src="/images/projects/noshride/userflow.svg"
            alt="userflow"
            className="mt-14 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="px-5 sm:container">
          <h3
            className="font-semibold text-[24px] sm:text-[32px] mt-14"
            data-aos="fade-up"
          >
            Designing the brand identity
          </h3>
          <p className="mt-4 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            I designed Noshride’s brand identity to reflect speed, reliability,
            and convenience. A bold logo, vibrant colors, and custom
            illustrations create an engaging and intuitive experience, ensuring
            consistency across all touchpoints.
          </p>
          <p className="mt-5 sm:text-lg" data-aos="fade-up">
            See what the Noshride brand identity looks like below:
          </p>
        </div>

        <OverflowContainer>
          <Image
            src="/images/projects/noshride/brand.png"
            alt="brand identity"
            className="mt-14 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="px-5 sm:container">
          <h3
            className="font-semibold text-[24px] sm:text-[32px] mt-14"
            data-aos="fade-up"
          >
            Designing the onboarding screens
          </h3>
          <p className="mt-4 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            Designed intuitive onboarding screens for Noshride to ensure a fast
            and seamless signup process for customers, vendors, and riders. With
            a clean UI, auto-filled suggestions, and clear CTAs, users can get
            started quickly, reducing friction and drop-off rates.
          </p>
          <p className="mt-5 sm:text-lg" data-aos="fade-up">
            See what the Noshride mobile app design looks like below:
          </p>
        </div>

        <OverflowContainer>
          <Image
            src="/images/projects/noshride/screen1.png"
            alt="mobile screens"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <OverflowContainer>
          <Image
            src="/images/projects/noshride/screen2.png"
            alt="mobile screens"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="px-5 sm:container">
          <h3
            className="font-semibold text-[24px] sm:text-[32px] mt-14"
            data-aos="fade-up"
          >
            Learning & Challenges
          </h3>
          <p className="mt-5 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            I’ve always understood that design is an ongoing process. Building
            the Pienexa mobile app reinforced the importance of inclusivity,
            highlighting the need to create a design that serves diverse age
            groups, cultures, and user types seamlessly.
          </p>
          <p className="mt-5 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            One of the biggest challenges was time, as Noshride aimed for a
            rapid launch. Meeting this tight deadline was demanding, but despite
            the pressure, we successfully completed the design on time and
            handed it off to the engineering team for development.
          </p>
        </div>
      </section>

      <div
        className="px-5 sm:container flex gap-5 md:justify-between items-center mt-32"
        data-aos="fade-up"
      >
        <span className="w-[290px] md:w-[70%] font-semibold text-[20px] md:text-[38px] xl:text-[54px] h-[90px] md:h-[180px] xl:h-[225px] flex justify-center items-center flex-wrap gap-1 sm:gap-3 border-2 md:border-4 border-[#A6A6A659] rounded-[24px] md:rounded-[50px] xl:rounded-[67px]">
          <span className="text-[#A3A3A3]">Next Project:</span>
          Runshift
        </span>
        <button className="min-w-[70px] md:w-[20%] md:min-w-[160px] h-[70px] md:h-[160px] xl:h-[195px] flex justify-center items-center border-2 md:border-4 border-[#A6A6A659] rounded-[24px] md:rounded-[50px] xl:rounded-[67px]">
          <span>
            <PlainArrowIcon className="size-10 md:size-16" />
          </span>
        </button>
      </div>
    </main>
  );
};

export default Page;
