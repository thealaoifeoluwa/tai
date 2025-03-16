import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { forwardRef, useRef } from "react";
import NextImage from "next/image";

type VideoProps = React.ComponentPropsWithoutRef<"video"> & {
  className?: string;
};

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ className, src, ...props }, ref) => {
    // Safely convert `src` to a string
    const srcString = typeof src === "string" ? src : String(src);
    const isCloudVideo = srcString.includes("res.cloudinary.com");

    // Generate lowResSrc only for Cloudinary images
    const lowResSrcImage = isCloudVideo
      ? srcString.replace(
          "/upload/",
          // "/upload/w_100,h_100,e_blur:200,c_thumb,q_auto,f_jpg/"
          // "/upload/w_100,h_100,c_fill,e_blur:200,q_auto,f_jpg/"
          "/upload/h_50,e_blur:200,c_scale,q_auto,f_webp/"
        )
      : "";

    const videoRef = useRef<HTMLVideoElement>(null);
    const lowResImageRef = useRef<HTMLImageElement>(null);

    // Handle video loading complete
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
          <NextImage
            src={lowResSrcImage}
            ref={lowResImageRef}
            width={0}
            height={0}
            sizes="100vw"
            priority
            className={twMerge(
              clsx(
                "w-full h-auto min-h-[100px] object-cover transition-opacity duration-300 z-[1]",
                className
              )
            )}
            alt="Low resolution placeholder"
          />
        )}

        {/* Video */}
        <video
          {...props}
          ref={(node) => {
            // @ts-expect-error message
            // Assign the ref to videoRef
            videoRef.current = node;

            // Forward the ref to the parent if needed
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          src={src}
          className={twMerge(
            clsx(
              "w-full h-full object-cover transition-opacity duration-300",
              isCloudVideo && "absolute inset-0 opacity-0",
              className
            )
          )}
          muted
          autoPlay
          loop
          playsInline
          // onContextMenu={(e) => e.preventDefault()}
          onLoadedData={handleVideoLoaded}
        />
      </div>
    );
  }
);

Video.displayName = "Video";

export default Video;
