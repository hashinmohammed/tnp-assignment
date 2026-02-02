"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const VehicleCard = ({ title, description, imageUrl, dark }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {description && (
          <p className="text-gray-300 text-sm mb-6 flex-grow">{description}</p>
        )}
        <div className="flex gap-3 mt-auto">
          <button className="flex-1 py-2 px-4 rounded-md bg-[#3368ff] text-white text-sm font-medium hover:bg-blue-600 transition-colors">
            Order Now
          </button>
          <button className="flex-1 py-2 px-4 rounded-md bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
