import Image from "@/components/image";
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
      <section className="min-h-[540px] md:min-h-[636px] w-full bg-blue-900 rounded-b-2xl sm:rounded-b-3xl overflow-clip relative">
        <Image
          src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742332807/Tai%20portfolio/Pienexa/hero_mtckd0.svg"
          alt="Pienexa cover image"
          className="w-full h-full absolute inset-0 hidden sm:block"
        />
        <Image
          src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742332804/Tai%20portfolio/Pienexa/Hero_small_i5psnk.svg"
          alt="Pienexa cover image"
          className="w-full h-full absolute inset-0 sm:hidden"
        />

        <div className="px-5 sm:container pt-28 md:pt-44" data-aos="fade-up">
          <button onClick={() => Router.push("/projects")}>
            <ArrowLeftIconAlt className="size-8 sm:size-11" />
          </button>

          <h1 className="mt-14 font-bold text-[40px] md:text-[50px] lg:text-[64px] text-white">
            Enabling a convenient way to trade crypto internationally
          </h1>

          <div className="flex gap-4 items-center mt-16 pb-10">
            <Link
              href="https://www.figma.com/design/c0WPzXJ2YZrG4x8fmiDTTf/Pienexa?node-id=3-3690&t=TmPsGacx04UzTOpl-1"
              className="bg-black text-white text-xs sm:text-base rounded-2xl border border-[#A6A6A659] p-5 font-semibold text-nowrap"
              target="_blank"
            >
              See the Design
            </Link>
            <Link
              href="https://www.figma.com/design/c0WPzXJ2YZrG4x8fmiDTTf/Pienexa?node-id=3-3690&t=TmPsGacx04UzTOpl-1"
              className="bg-black rounded-2xl border border-[#A6A6A659] p-2.5 font-semibold"
              target="_blank"
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
                Pienexa - Seamless Trading
              </h3>
              <p className="mt-2.5 sm:text-lg" data-aos="fade-up">
                Pienexa is an emerging brand in Africa with a goal of building a
                trading platform with seamless experience.
              </p>
              <p className="mt-5 sm:text-lg" data-aos="fade-up">
                As a product designer, I collaborated with another product
                designer based in Milton Keynes, England, United Kingdom and
                work closely with the BigiBrand{"'"}s Brand team to create a
                revolutionary trading experience, crafting a strong brand
                strategy and visual identity for mobile and web.
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
                <h5 className="font-medium sm:text-lg">Cryptocurrency</h5>
              </div>
              <div data-aos="fade-up">
                <span className="text-xs text-[#BCBCBC] inline-block">
                  Company
                </span>
                <h5 className="font-medium sm:text-lg">Pienexa </h5>
              </div>
              <div data-aos="fade-up">
                <span className="text-xs text-[#BCBCBC] inline-block">
                  Other Collaboration
                </span>
                <Link
                  href="https://www.linkedin.com/in/simisoladeniran/"
                  target="_blank"
                  className="font-medium sm:text-lg block underline underline-offset-2"
                >
                  Adeniran Simi
                </Link>
                <Link
                  href="https://www.bigibrand.com/"
                  target="_blank"
                  className="font-medium text-lg block underline underline-offset-2"
                >
                  BigiBrand
                </Link>
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
              The cryptocurrency market in Nigeria and globally faces challenges
              such as high transaction fees, slow processing times, security
              risks, regulatory uncertainty, and poor user experience. Many
              exchanges charge fees as high as 5–10% per trade, making
              transactions costly for users. Withdrawal delays of several hours
              or even days prevent traders from taking advantage of market
              movements, leading to financial losses. Security remains a major
              concern, with over $3.8 billion lost to crypto hacks in 2022,
              exposing users to fraud and exchange failures.
            </p>
            <p className="mt-5 sm:text-lg leading-relaxed" data-aos="fade-up">
              Banking restrictions and limited access to fiat conversions create
              additional barriers for crypto adoption. In Nigeria, the 2021 ban
              on crypto transactions by financial institutions forced many users
              to rely on risky peer-to-peer (P2P) trading, increasing fraud
              cases. A survey revealed that 60% of crypto users struggle with
              complex exchange interfaces and poor customer support, making
              trading even more difficult.
            </p>
            <p className="mt-5 sm:text-lg leading-relaxed" data-aos="fade-up">
              Pienexa solves these issues by offering a low-cost, fast, and
              secure crypto exchange with transparent fees, quick transactions,
              strong security, and seamless fiat-to-crypto access. By
              prioritizing trust, accessibility, and compliance, Pienexa
              empowers users to trade crypto efficiently in Nigeria and
              worldwide.
            </p>
          </div>
        </div>

        <OverflowContainer>
          <div
            className="mt-11 h-[284px] flex flex-col justify-center xl:items-center"
            data-aos="fade-up"
          >
            <h4 className="text-4xl font-semibold text-nowrap w-full">
              How do we create a{" "}
              <span className="p-1 bg-[#0D98FF] inline-block relative">
                business tool
                <span className="absolute -top-20 right-10 font-normal text-sm text-nowrap">
                  WHAT (What do we want to achieve?)
                </span>
                <span className="absolute -top-14 right-20">
                  <BendArrowIcon />
                </span>
              </span>{" "}
              that provides{" "}
              <span className="p-1 bg-[#F9AF16] inline-block relative">
                traders
                <span className="absolute -top-20 right-10 font-normal text-sm text-nowrap">
                  WHOM (Who are we designing for?)
                </span>
                <span className="absolute -top-14 right-20">
                  <BendArrowIcon />
                </span>
              </span>
            </h4>
            <h4 className="text-4xl font-semibold p-1 bg-[#9848FE] mt-1 inline-block relative text-nowrap w-fit">
              seamless exchange and trading of fiat and crypto assets ?
              <span className="absolute -bottom-20 right-[10%] font-normal text-sm text-nowrap">
                WHY (Why is this necessary/important?)
              </span>
              <span className="absolute -bottom-14 right-1/4 rotate-180">
                <BendArrowIcon />
              </span>
              <span className="absolute -bottom-20 left-[15%] font-normal text-sm text-nowrap">
                WHERE (Where this will take place?)
              </span>
              <span className="absolute -bottom-14 left-1/4 rotate-180 scale-x-[-1]">
                <BendArrowIcon />
              </span>
            </h4>
          </div>
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
            We conducted a targeted survey focused on active crypto traders,
            including individuals trading on centralized exchanges and
            peer-to-peer (P2P) platforms. This survey was followed by in-depth
            interview call with twenty high-volume traders, allowing us to
            gather firsthand insights into their experiences, frustrations, and
            expectations from an ideal crypto exchange. This call helped us gain
            valuable information on what we wanted to Focus on for this MVP.
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
            We wanted to ensure we were meeting the perfect objective already
            set by the stakeholders, these objectives are:
          </p>
          <h6 className="sm:text-lg text-[#A3A3A3] mt-6" data-aos="fade-up">
            Business Objectives
          </h6>
          <ul className="sm:text-lg text-[#A3A3A3] list-disc ml-7">
            <li data-aos="fade-up">
              Build a secure and reliable crypto exchange that users can trust.
            </li>
            <li data-aos="fade-up">
              Reduce transaction costs to make crypto trading more accessible.
            </li>
            <li data-aos="fade-up">
              Ensure fast and seamless transactions to improve user experience.
            </li>
            <li data-aos="fade-up">
              Provide strong security measures to protect user funds.
            </li>
            <li data-aos="fade-up">
              Enable smooth fiat-to-crypto conversions despite banking
              restrictions.
            </li>
            <li data-aos="fade-up">
              Create an intuitive and user-friendly platform for both beginners
              and experienced traders.
            </li>
          </ul>
          <h6 className="sm:text-lg text-[#A3A3A3] mt-6" data-aos="fade-up">
            Intended Impact
          </h6>

          <ul className="sm:text-lg text-[#A3A3A3] list-disc ml-7">
            <li data-aos="fade-up">
              Enhance financial inclusion by making crypto trading accessible to
              more users.
            </li>
            <li data-aos="fade-up">
              Increase trader confidence with a secure and transparent platform.
            </li>
            <li data-aos="fade-up">
              Empower users with efficient and cost-effective transactions.
            </li>
            <li data-aos="fade-up">
              Foster wider adoption of cryptocurrency in Nigeria and globally.
            </li>
            <li data-aos="fade-up">
              Support economic growth by enabling easier access to digital
              assets.
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
          <span className="block mb-4 min-[1165px]:hidden" data-aos="fade-up">
            <DragIcon />
          </span>
          <h5
            className="px-6 py-5 sm:text-2xl text-white bg-[#3861FB] rounded-3xl inline-block"
            data-aos="fade-up"
          >
            Notes from stakeholders
          </h5>
        </div>

        <OverflowContainer className="!mt-5">
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742332738/Tai%20portfolio/Pienexa/stakeholders_krprmk.svg"
            alt="stakeholder note"
            className="mt-2 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="px-5 sm:container">
          <p className="mt-16 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            To enhance Pienexa’s crypto trading experience, we designed an
            intuitive UX/UI that ensures seamless navigation for transactions
            and fund management. We built a secure, accessible, and responsive
            platform, incorporating clear data visualization for better market
            insights.
          </p>
          <p className="mt-5 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            Our approach fosters user trust through a transparent interface,
            simplifies trading for increased adoption, and makes crypto
            accessible to users of all experience levels.
          </p>

          <div className="my-20 max-w-[856px] mx-auto">
            <h4
              className="font-semibold text-center text-[32px] sm:text-[45px]"
              data-aos="fade-up"
            >
              African traders can now trade fiat and crypto assets online,
              in-person with Pienexa’s integrated suite of products
            </h4>
          </div>

          <h3
            className="font-semibold text-[24px] sm:text-[32px]"
            data-aos="fade-up"
          >
            User Persona
          </h3>
          <p className="mt-1 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            After identifying Pienexa’s diverse user base and stakeholder roles,
            we prioritized active crypto traders, who form the majority of
            users, and developed personas to understand their needs, behaviors,
            and challenges. At the same time, we accounted for institutional
            users, organizations, and individuals with different permission
            levels to ensure a seamless, secure, and inclusive trading
            experience for all.
          </p>
        </div>

        <OverflowContainer>
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742332765/Tai%20portfolio/Pienexa/Persona_slikcd.svg"
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
            We then proceeded to visualize and structure the user flow and
            information architecture using a whiteboarding tool. This process
            helped us define the key interactions, navigation pathways, and
            overall user journey, ensuring a seamless and intuitive experience
            for all user types.
          </p>

          <h3
            className="font-semibold text-[24px] sm:text-[32px] mt-14"
            data-aos="fade-up"
          >
            User Flow
          </h3>
          <p className="mt-1 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            To ensure smooth functioning of a complex system involving multiple
            users with different permissions, it was important to establish a
            comprehensive user flow to establish a seamless workflow that
            seamlessly transitions from one feature of the product to the next.
          </p>
        </div>

        <OverflowContainer>
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742332799/Tai%20portfolio/Pienexa/Pienexa_App_User_flow_hs65hk.svg"
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
            Designing the component library
          </h3>
          <p className="mt-4 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            To enhance Pienexa’s design system, I built a new component library
            from scratch to align with the brand identity and product goals.
            This involved creating over 70% of the components, including
            buttons, input fields, navigation systems, card selectors, and more,
            ensuring a consistent, modern, and user-friendly experience.
          </p>
          <p className="mt-5 sm:text-lg" data-aos="fade-up">
            See some of the designed brand identity and components below:
          </p>
        </div>

        <OverflowContainer>
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742332803/Tai%20portfolio/Pienexa/Design_system_kyzpin.svg"
            alt="design system"
            className="mt-14 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <OverflowContainer>
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742332815/Tai%20portfolio/Pienexa/Other_ui_component_vtovwq.svg"
            alt="ui component"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="px-5 sm:container">
          <h3
            className="font-semibold text-[24px] sm:text-[32px] mt-14"
            data-aos="fade-up"
          >
            Designing the Pienexa mobile app
          </h3>
          <p className="mt-4 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            One of the key design principles I established was ensuring
            inclusivity, recognizing that this product serves diverse user
            types, cultures, and age groups. Expanding its reach meant designing
            to accommodate different needs, making the platform accessible and
            user-friendly for all.
          </p>
          <p className="mt-5 sm:text-lg" data-aos="fade-up">
            See what the Pienexa mobile app design look like below:
          </p>
        </div>

        <OverflowContainer>
          <Image
            src="https://res.cloudinary.com/alaoifeoluwa/image/upload/v1742332808/Tai%20portfolio/Pienexa/mobile_screens_ijhvpm.svg"
            alt="mobile screens"
            className="mt-12 inline-block min-w-[1057px]"
            data-aos="fade-up"
          />
        </OverflowContainer>

        <div className="px-5 sm:container">
          {/* <p className="mt-14 sm:text-lg text-[#A3A3A3]" data-aos="fade-up">
            Since the redesign of the app, Pienexa has been able to go into new
            markets. Launching in new countries like China. The Pienexa mobile
            app is also widely used in Canada, India, Nigeria, Ghana, United
            Kingdom, Kenya. with Access to sending money to over 35 countries in
            the world.
          </p> */}
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
            One of the biggest challenges was time, as Pienexa aimed for a rapid
            launch. Meeting this tight deadline was demanding, but despite the
            pressure, we successfully completed the design on time and handed it
            off to the engineering team for development.
          </p>
        </div>
      </section>

      <div
        className="px-5 sm:container flex gap-5 md:justify-between items-center mt-32"
        data-aos="fade-up"
      >
        <Link
          href="/projects/noshride"
          className="w-[290px] md:w-[70%] font-semibold text-[20px] md:text-[38px] xl:text-[54px] h-[90px] md:h-[180px] xl:h-[225px] flex justify-center items-center flex-wrap gap-1 sm:gap-3 border-2 md:border-4 border-[#A6A6A659] rounded-[24px] md:rounded-[50px] xl:rounded-[67px]"
        >
          <span className="text-[#A3A3A3]">Next Project:</span>
          Noshride
        </Link>
        <Link
          href="/projects/noshride"
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

const OverflowContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <span
        className={clsx(
          "block -mb-8 mt-10 min-[1165px]:hidden px-5 sm:container",
          className
        )}
      >
        <DragIcon />
      </span>
      <div className="overflow-x-scroll scrollbar px-5 sm:container">
        {children}
      </div>
    </>
  );
};

export default Page;
