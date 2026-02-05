"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const VehicleCard = ({ title, description, imageUrl, dark, specs, slug }) => {
  return (
    <Link href={`/vehicles/${slug}`} className="block h-full">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`${
          dark
            ? "bg-white/5 backdrop-blur-md border-white/10"
            : "bg-gray-50 border-gray-200"
        } border rounded-xl overflow-hidden shadow-lg flex flex-col h-full cursor-pointer relative`}
      >
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
              className={`text-xs sm:text-sm mb-3 sm:mb-4 ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {description}
            </p>
          )}

          {/* Specs Grid */}
          {specs && (
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {specs.range && (
                <div
                  className={`p-2 sm:p-3 rounded-lg ${
                    dark ? "bg-white/5" : "bg-white"
                  }`}
                >
                  <p
                    className={`text-[10px] sm:text-xs ${
                      dark ? "text-gray-400" : "text-gray-500"
                    } mb-0.5`}
                  >
                    Range
                  </p>
                  <p
                    className={`text-sm sm:text-base font-semibold ${
                      dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {specs.range}
                  </p>
                </div>
              )}
              {specs.topSpeed && (
                <div
                  className={`p-2 sm:p-3 rounded-lg ${
                    dark ? "bg-white/5" : "bg-white"
                  }`}
                >
                  <p
                    className={`text-[10px] sm:text-xs ${
                      dark ? "text-gray-400" : "text-gray-500"
                    } mb-0.5`}
                  >
                    Top Speed
                  </p>
                  <p
                    className={`text-sm sm:text-base font-semibold ${
                      dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {specs.topSpeed}
                  </p>
                </div>
              )}
              {specs.acceleration && (
                <div
                  className={`p-2 sm:p-3 rounded-lg ${
                    dark ? "bg-white/5" : "bg-white"
                  }`}
                >
                  <p
                    className={`text-[10px] sm:text-xs ${
                      dark ? "text-gray-400" : "text-gray-500"
                    } mb-0.5`}
                  >
                    0-60 mph
                  </p>
                  <p
                    className={`text-sm sm:text-base font-semibold ${
                      dark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {specs.acceleration}
                  </p>
                </div>
              )}
              {specs.price && (
                <div
                  className={`p-2 sm:p-3 rounded-lg ${
                    dark ? "bg-white/5" : "bg-white"
                  } col-span-2`}
                >
                  <p
                    className={`text-xs sm:text-sm font-medium ${
                      dark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {specs.price}
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-auto">
            <button
              className={`w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                dark
                  ? "bg-white/10 text-white hover:bg-white/20 active:bg-white/30 backdrop-blur-sm"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400"
              }`}
            >
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default VehicleCard;
