"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  textVariant,
  buttonVariant,
  buttonrightVariant,
} from "@/constants/motion";

export const VideoBanner = ({ title, videoSource, description, underline }) => {
  return (
    <motion.div
      className="snap-start h-screen relative overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSource} type="video/webm" />
      </video>
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-[20%] text-center font-medium overflow-hidden">
        <motion.h1
          variants={textVariant(1)}
          className="text-3xl m-1 lg:text-4xl lg:my-[6px] font-medium overflow-hidden text-center text-white"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={textVariant(1.4)}
          className={`${underline ? "border-b border-white hover:border-b-2 transition duration-200" : ""} text-xs lg:text-sm text-white`}
        >
          {description}
        </motion.p>
      </div>
      <div className="absolute top-[80%] left-[50%] -translate-x-1/2 -translate-y-[80%] flex flex-col md:flex-row font-medium overflow-hidden text-center">
        <motion.button
          variants={buttonVariant(1.8)}
          className="bg-tesla-gray backdrop-blur-[8px] my-2 mx-4 w-[240px] rounded-[5px] py-2 px-2 text-white lg:w-[340px]"
        >
          Custom Order
        </motion.button>
        <motion.button
          variants={buttonrightVariant(1.8)}
          className="bg-[#3368ff] backdrop-blur-[8px] my-2 mx-4 w-[240px] rounded-[5px] py-2 px-2 text-white lg:w-[340px]"
        >
          View Inventory
        </motion.button>
      </div>
    </motion.div>
  );
};

export default VideoBanner;
