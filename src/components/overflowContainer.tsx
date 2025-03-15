import DragIcon from "@/icons/drag";
import clsx from "clsx";

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
        data-aos="fade-up"
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

export default OverflowContainer;
