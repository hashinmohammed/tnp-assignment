"use client";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

const Photo = ({ urlDesktop, urlMobile }) => {
  const { width } = useWindowSize();
  return (
    <div className="relative">
      {width < 480 ? (
        <Image
          className="w-screen h-screen object-cover"
          src={urlMobile}
          alt="model-y-image"
          fill
          sizes="100vw"
          priority
        />
      ) : (
        <Image
          className="w-screen object-cover md:h-screen lg:h-auto"
          src={urlDesktop}
          alt="model-y-image"
          fill
          sizes="100vw"
          priority
        />
      )}
    </div>
  );
};

export default Photo;
