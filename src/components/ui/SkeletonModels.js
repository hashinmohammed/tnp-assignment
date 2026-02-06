import React from "react";

const SkeletonModels = () => {
  return (
    <div className="overflow-y-auto bg-tesla-dark h-screen animate-pulse">
      {/* Banner Section */}
      <div className="relative h-screen w-full bg-gray-900 flex flex-col justify-end pb-10 md:pb-20 items-center">
        {/* Title */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-[15%] flex flex-col items-center">
          <div className="h-8 md:h-10 w-48 md:w-64 bg-gray-800 rounded mb-2 md:mb-4"></div>
          <div className="h-4 md:h-6 w-32 md:w-48 bg-gray-800 rounded"></div>
        </div>

        {/* Info Specs */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-10 items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="h-6 w-16 bg-gray-800 rounded"></div>
              <div className="h-4 w-24 bg-gray-800 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Interior Section */}
      <div className="h-[20vh] bg-black flex items-center justify-center">
        <div className="h-8 w-64 bg-gray-800 rounded"></div>
      </div>
      <div className="relative h-[60vh] w-full bg-gray-800"></div>

      {/* Video Section Placeholder */}
      <div className="h-[50vh] bg-gray-900 w-full mb-10"></div>

      {/* Car Info Features */}
      <div className="max-w-[1200px] mx-auto my-12 px-4 space-y-12">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="w-full md:w-1/2 h-64 bg-gray-800 rounded-xl"></div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="h-6 w-48 bg-gray-800 rounded mb-4"></div>
              <div className="h-4 w-full bg-gray-800 rounded mb-2"></div>
              <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Specs Skeleton */}
      <div className="bg-gray-900 h-96 w-full mb-12"></div>
    </div>
  );
};

export default SkeletonModels;
