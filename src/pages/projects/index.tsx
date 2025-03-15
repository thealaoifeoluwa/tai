import CaseStudy from "@/components/caseStudy";
import OtherProjects from "@/components/otherProjects";

const Page = () => {
  return (
    <main className="pt-[120px] sm:pt-[200px]">
      <section className="px-5 sm:container">
        <h2 className="font-semibold text-xl sm:text-4xl text-[#949494]">
          UXUI Case Studies
        </h2>

        <CaseStudy />
      </section>

      <section className="py-20 sm:py-44">
        <div className="px-5 sm:container">
          <h2 className="font-semibold text-xl sm:text-4xl text-[#949494]">
            Other Projects
          </h2>

          <OtherProjects />
        </div>
      </section>
    </main>
  );
};

export default Page;
