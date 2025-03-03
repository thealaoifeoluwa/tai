import { Gradient1, Gradient2 } from "@/icons/gradient";

const GradientBg = () => {
  return (
    <div className="min-h-screen overflow-hidden w-full fixed pointer-events-none -z-10">
      <div className="relative">
        <span className="fixed left-0 bottom-0">
          <Gradient1 />
        </span>
        <span className="fixed right-0 top-0">
          <Gradient2 />
        </span>
      </div>
    </div>
  );
};

export default GradientBg;
