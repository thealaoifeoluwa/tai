import clsx from "clsx";
import NextImage from "next/image";
import { twMerge } from "tailwind-merge";

type ImageType = {
  src: string;
  alt: string;
  className?: string;
  // Include all NextImage props by extending its type
} & React.ComponentProps<typeof NextImage>;

const Image = ({ src, alt, className, ...props }: ImageType) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={twMerge(clsx(`w-auto h-auto object-cover`, className))}
      {...props}
    />
  );
};

export default Image;
