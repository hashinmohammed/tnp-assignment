"use client";
import React, { useState, useMemo, useEffect } from "react";
import VehicleCard from "@/components/modules/cards/VehicleCard";
import Navbar from "@/components/layout/Navbarbanner";

const VehiclesClient = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Vehicles", "Energy", "Accessories"];

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        // Transform API data to match component structure
        const transformedData = data.map((item) => ({
          ...item,
          urlDesktop: item.url_desktop,
          urlMobile: item.url_mobile,
          specs: {
            range: item.range_val,
            topSpeed: item.top_speed,
            acceleration: item.acceleration,
            price: item.price,
          },
        }));

        setVehicles(transformedData);
      } catch (error) {
        console.error("Failed to fetch vehicles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((info) => {
      const matchesCategory =
        activeCategory === "All" || info.category === activeCategory;
      const matchesSearch = info.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, vehicles]);

  if (loading) {
    return (
      <div
        className="min-h-screen bg-white flex items-center justify-center"
        suppressHydrationWarning
      >
        <div className="animate-pulse flex flex-col items-center">
          <svg
            className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon w-[200px]"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"></path>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar fixed={true} white={"true"} />
      <div className="pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-16 max-w-[1440px] mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-2 text-center">
          Our Lineup
        </h1>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12 px-4">
          Explore our range of electric vehicles and energy products
        </p>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 items-stretch md:items-center justify-between">
          {/* Category Tabs */}
          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg overflow-x-auto w-full md:w-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-black text-white shadow-lg"
                    : "text-gray-600 hover:text-black hover:bg-gray-200 active:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search by model name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 sm:py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-sm sm:text-base text-gray-900 placeholder-gray-500 transition-colors"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Results Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredVehicles.map((info) => (
              <VehicleCard
                key={info.id}
                title={info.title}
                description={info.description}
                imageUrl={info.urlDesktop}
                dark={false}
                specs={info.specs}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-20 px-4">
            <p className="text-lg sm:text-xl text-gray-600 mb-2">
              No results found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-sm sm:text-base text-blue-600 hover:text-blue-700 underline active:text-blue-800 py-2 px-4"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehiclesClient;
