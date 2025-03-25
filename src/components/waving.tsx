import clsx from "clsx";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const WavingHand = ({ className = "" }) => {
  return (
    <Image
      src="/icons/waving.png"
      alt="waving hand"
      width={40}
      height={40}
      className={twMerge(clsx("size-9 md:size-12 inline mb-3", className))}
    />
  );
};

export default WavingHand;
