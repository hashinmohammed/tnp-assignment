"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const VehicleCard = ({ title, description, imageUrl, dark }) => {
  const { ref, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "100px",
  });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.02 }}
      className={`${
        dark
          ? "bg-white/5 backdrop-blur-md border-white/10"
          : "bg-gray-50 border-gray-200"
      } border rounded-xl overflow-hidden shadow-lg flex flex-col h-full`}
    >
      {hasBeenVisible ? (
        <>
          <div className="relative h-40 sm:h-48 w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4 sm:p-6 flex flex-col flex-grow">
            <h3
              className={`text-lg sm:text-xl font-bold mb-2 ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h3>
            {description && (
              <p
                className={`text-xs sm:text-sm mb-4 sm:mb-6 flex-grow ${
                  dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {description}
              </p>
            )}
            <div className="flex gap-2 sm:gap-3 mt-auto">
              <button className="flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-md bg-[#3368ff] text-white text-xs sm:text-sm font-medium hover:bg-blue-600 active:bg-blue-700 transition-colors">
                Order Now
              </button>
              <button
                className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  dark
                    ? "bg-white/10 text-white hover:bg-white/20 active:bg-white/30 backdrop-blur-sm"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400"
                }`}
              >
                Learn More
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="h-full min-h-[300px] sm:min-h-[340px] flex items-center justify-center">
          <div className="animate-pulse">
            <div
              className={`h-4 w-32 rounded ${dark ? "bg-gray-700" : "bg-gray-300"}`}
            ></div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default VehicleCard;
