"use client";
import React, { useState, useMemo } from "react";
import { Bannerinfos } from "@/constants/data";
import VehicleCard from "@/components/modules/VehicleCard";
import Navbar from "@/components/layout/Navbarbanner";

const VehiclesClient = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Vehicles", "Energy", "Accessories"];

  const filteredVehicles = useMemo(() => {
    return Bannerinfos.filter((info) => {
      const matchesCategory =
        activeCategory === "All" || info.category === activeCategory;
      const matchesSearch = info.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-tesla-dark text-white">
      <Navbar fixed={true} white={"false"} />
      <div className="pt-24 pb-12 px-6 lg:px-16 max-w-[1440px] mx-auto">
        <h1 className="text-4xl font-medium mb-2 text-center">Our Lineup</h1>
        <p className="text-gray-400 text-center mb-12">
          Explore our range of electric vehicles and energy products
        </p>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex gap-2 p-1 bg-white/5 rounded-lg backdrop-blur-sm overflow-x-auto max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
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
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 text-white placeholder-gray-500 backdrop-blur-sm transition-colors"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((info) => (
              <VehicleCard
                key={info.id}
                title={info.title}
                description={info.description}
                imageUrl={info.urlDesktop}
                dark={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">
              No results found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-blue-400 hover:text-blue-300 underline"
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
