import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { forwardRef, useRef } from "react";
import NextImage from "next/image";

type VideoProps = React.ComponentPropsWithoutRef<"video"> & {
  className?: string;
};

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ className, src, ...props }, ref) => {
    const srcString = typeof src === "string" ? src : String(src);
    const isCloudVideo = srcString.includes("res.cloudinary.com");

    const lowResSrcImage = isCloudVideo
      ? srcString.replace(
          "/upload/",
          "/upload/h_50,e_blur:200,c_scale,q_auto,f_webp/"
        )
      : "";

    const videoRef = useRef<HTMLVideoElement>(null);
    const lowResImageRef = useRef<HTMLDivElement>(null); // Use div wrapper for NextImage

    const handleVideoLoaded = () => {
      if (videoRef.current) {
        videoRef.current.style.opacity = "1";
        videoRef.current.style.position = "static";
      }
      if (lowResImageRef.current) {
        lowResImageRef.current.style.opacity = "0";
        lowResImageRef.current.style.display = "none";
      }
    };

    return (
      <div className="relative h-full">
        {/* Lower resolution image */}
        {isCloudVideo && (
          <div
            ref={lowResImageRef}
            className="absolute inset-0 transition-opacity duration-300 z-[1]"
          >
            <NextImage
              src={lowResSrcImage}
              width={0}
              height={0}
              sizes="100vw"
              priority
              className={twMerge(clsx("w-full h-full object-cover", className))}
              alt="Low resolution placeholder"
            />
          </div>
        )}

        {/* Video */}
        <video
          {...props}
          ref={(node) => {
            // @ts-expect-error
            videoRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          src={src}
          className={twMerge(
            clsx(
              "w-full h-full object-cover transition-opacity duration-300 opacity-0",
              isCloudVideo && "absolute inset-0",
              className
            )
          )}
          muted
          autoPlay
          loop
          playsInline
          onCanPlay={handleVideoLoaded} // Switch to onCanPlay for reliability
        />
      </div>
    );
  }
);

Video.displayName = "Video";

export default Video;
