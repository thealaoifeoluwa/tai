import NextImage from "next/image";

type ImageType = {
  src: string;
  className?: string;
  alt: string;
};
const Image = ({ alt, className, src }: ImageType) => {
  return (
    <NextImage
      alt={alt}
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      className={"w-auto h-auto " + className}
    />
  );
};

export default Image;
