"use client";
import React from "react";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbarbanner";
import { textVariant } from "@/constants/motion";

export const Banner = ({
  title,
  urlDesktop,
  urlMobile,
  description,
  infoheading1,
  infodescription1,
  infoheading2,
  infodescription2,
  infoheading3,
  infodescription3,
  infoheading4,
  infodescription4,
  white,
}) => {
  const { width } = useWindowSize();
  return (
    <div className="relative md:h-screen lg:h-auto">
      <Navbar white={white} />
      <motion.div
        className={`relative md:h-screen lg:h-auto`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {width < 480 ? (
          <Image
            className="w-full h-auto object-cover md:h-screen lg:h-auto"
            src={urlMobile}
            alt="model-y-image"
            width={750}
            height={1334}
            sizes="100vw"
            priority
          />
        ) : (
          <Image
            className="w-full h-auto object-cover md:h-screen lg:h-auto"
            src={urlDesktop}
            alt="model-y-image"
            width={1920}
            height={1080}
            sizes="100vw"
            priority
          />
        )}
        <div
          className={`${white === "true" ? "text-white" : "text-black"}  absolute top-[15%] left-[50%] -translate-x-1/2 -translate-y-[15%] font-medium overflow-hidden text-center`}
        >
          <motion.h1
            variants={textVariant(1)}
            className="text-3xl m-1 lg:text-4xl lg:my-[6px] font-medium overflow-hidden text-center"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={textVariant(1.4)}
            className={`text-sm font-medium lg:text-xl`}
          >
            {description}
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="max-[480px]:top-[70%] overflow-hidden absolute w-[100%] text-white top-[60%] flex items-center flex-col justify-center mx-8 md:top-[80%] md:flex-row "
        >
          <div className={`flex items-center overflow-hidden justify-center`}>
            <motion.div
              variants={textVariant(1)}
              className="mr-8 mb-4 md:mb-8 sm:mr-12 lg:mr-20"
            >
              <h2 className="text-sm overflow-hidden font-bold text-center mb-1 sm:text-xl lg:text-2xl">
                {infoheading1}
              </h2>
              <p className="text-center text-[8px] sm:text-[10px] md:text-[8px] lg:text-xs">
                {infodescription1}
              </p>
            </motion.div>
            <motion.div
              variants={textVariant(1.2)}
              className="mr-8 mb-4 md:mb-8 sm:mr-12 lg:mr-20"
            >
              <h2 className="text-sm overflow-hidden font-bold text-center mb-1 sm:text-xl lg:text-2xl">
                {infoheading2}
              </h2>
              <p className="text-center text-[8px] sm:text-[10px] md:text-[8px] lg:text-xs">
                {infodescription2}
              </p>
            </motion.div>
            <motion.div
              variants={textVariant(1.4)}
              className="mr-8 mb-4 md:mb-8 sm:mr-12 lg:mr-20"
            >
              <h2 className="text-sm overflow-hidden font-bold text-center mb-1 sm:text-xl lg:text-2xl">
                {infoheading3}
              </h2>
              <p className="text-center text-[8px] sm:text-[10px] md:text-[8px] lg:text-xs">
                {infodescription3}
              </p>
            </motion.div>
            <motion.div
              variants={textVariant(1.6)}
              className="mr-8 mb-8 md:mr-12 lg:mr-20"
            >
              <h2 className="text-sm overflow-hidden hidden font-bold text-center  mb-1 sm:text-xl md:block lg:text-2xl">
                {infoheading4}
              </h2>
              <p className="text-center text-[8px] hidden md:text-[8px] md:block lg:text-xs">
                {infodescription4}
              </p>
            </motion.div>
          </div>
          <motion.button
            variants={textVariant(1.8)}
            className="mr-14 w-[220px] text-[18px] font-medium border-2 px-4 py-1 rounded-[5px] sm:mb-10 lg:w-[240px] lg:mr-10 hover:bg-white hover:text-black hover:duration-700"
          >
            order now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
