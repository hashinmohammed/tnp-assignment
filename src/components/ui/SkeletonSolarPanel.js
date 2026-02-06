const SkeletonSolarPanel = () => {
  return (
    <div className="bg-tesla-dark w-full animate-pulse overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full bg-gray-800">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="h-12 w-64 bg-gray-700 rounded" />
          <div className="h-6 w-48 bg-gray-700 rounded" />
        </div>
        <div className="absolute bottom-10 left-0 w-full flex flex-col md:flex-row justify-center items-center gap-8 pb-10">
          <div className="flex gap-8 text-white">
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-20 bg-gray-700 rounded" />
              <div className="h-4 w-24 bg-gray-700 rounded" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-16 bg-gray-700 rounded" />
              <div className="h-4 w-24 bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-6 py-12 space-y-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="h-8 w-1/3 bg-gray-700 rounded" />
            <div className="h-4 w-full bg-gray-700 rounded" />
            <div className="h-4 w-5/6 bg-gray-700 rounded" />
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-96 rounded-lg bg-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonSolarPanel;
