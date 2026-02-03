"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Roofspecs = () => {
  const [data, setData] = useState({
    group1: [],
    group2: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/specs?model=Solar Roof");
        const allSpecs = await res.json();

        setData({
          group1: allSpecs.filter((s) => s.column_group === 1),
          group2: allSpecs.filter((s) => s.column_group === 2),
        });
      } catch (error) {
        console.error("Failed to fetch roof specs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 text-white">
        Loading Specs...
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div>
        <Image
          className="md:w-[800px] h-auto"
          src="https://res.cloudinary.com/doqeslffo/image/upload/v1770095199/roof_rrhu8j.png"
          alt="car-specs"
          width={800}
          height={450}
        />
      </div>
      <div className="my-16 ">
        <h1 className="text-white text-center text-2xl font-bold">
          Solar Roof Specs
        </h1>
        <div className="flex items-center justify-center mt-6">
          <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
            {data.group1.map((spec) => (
              <div key={spec.id} className="my-3">
                <h1 className="font-bold text-xl">{spec.heading}</h1>
                <p className="text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
          <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
            {data.group2.map((spec) => (
              <div key={spec.id} className="my-3">
                <h1 className="font-bold text-xl">{spec.heading}</h1>
                <p className="text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roofspecs;
