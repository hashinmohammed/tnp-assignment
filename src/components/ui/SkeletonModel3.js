import React from "react";

const SkeletonModel3 = () => {
  return (
    <div className="overflow-y-auto bg-black h-screen animate-pulse">
      {/* Banner Section */}
      <div className="relative h-screen w-full bg-gray-900 flex flex-col justify-end pb-10 md:pb-20 items-center">
        {/* Title */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 -translate-y-[15%] flex flex-col items-center">
          <div className="h-8 md:h-10 w-48 md:w-64 bg-gray-800 rounded mb-2 md:mb-4"></div>
          <div className="h-4 md:h-6 w-64 md:w-96 bg-gray-800 rounded"></div>
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

        {/* Order Button */}
        <div className="h-10 w-[220px] bg-gray-800 rounded mt-8 md:mt-0 md:ml-10"></div>
      </div>

      {/* Beyond Section Skeleton */}
      <div className="max-w-[1000px] mx-auto my-12 px-4">
        <div className="flex flex-col md:flex-row mb-5">
          <div className="md:w-1/2 mb-4 md:mb-0 md:mr-24">
            <div className="h-4 w-20 bg-gray-800 rounded mb-2"></div>
            <div className="h-8 w-40 bg-gray-800 rounded"></div>
          </div>
          <div className="md:w-1/2">
            <div className="h-4 w-full bg-gray-800 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-800 rounded mb-2"></div>
            <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>

      {/* Car Info Banner Skeleton */}
      <div className="h-[60vh] bg-gray-900 w-full relative mb-12">
        <div className="absolute top-10 left-10 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="mb-4">
              <div className="h-6 w-32 bg-gray-800 rounded mb-2"></div>
              <div className="h-4 w-40 bg-gray-800 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Another Car Info Banner Skeleton */}
      <div className="h-[60vh] bg-gray-900 w-full relative mb-12"></div>

      {/* Video Section Skeleton */}
      <div className="h-[50vh] bg-gray-900 w-full flex items-center justify-center mb-12">
        <div className="text-gray-700">Video Placeholder</div>
      </div>

      {/* Specs Skeleton */}
      <div className="bg-gray-900 h-96 w-full mb-12"></div>
    </div>
  );
};

export default SkeletonModel3;
