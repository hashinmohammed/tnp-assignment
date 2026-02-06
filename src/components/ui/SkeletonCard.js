import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-lg flex flex-col h-full animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-40 sm:h-48 w-full bg-gray-300"></div>

      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        {/* Title Skeleton */}
        <div className="h-6 sm:h-7 bg-gray-300 rounded w-3/4 mb-3"></div>

        {/* Description Skeletons */}
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-4 sm:mb-5"></div>

        {/* Specs Grid Skeleton */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
          <div className="p-2 sm:p-3 rounded-lg bg-white h-16 sm:h-20"></div>
          <div className="p-2 sm:p-3 rounded-lg bg-white h-16 sm:h-20"></div>
          <div className="p-2 sm:p-3 rounded-lg bg-white h-16 sm:h-20"></div>
          <div className="p-2 sm:p-3 rounded-lg bg-white h-16 sm:h-20 col-span-2"></div>
        </div>

        {/* Button Skeleton */}
        <div className="mt-auto">
          <div className="h-9 sm:h-10 bg-gray-200 rounded-md w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
