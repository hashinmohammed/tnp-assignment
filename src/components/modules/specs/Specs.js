"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Specs = () => {
  const [specs, setSpecs] = useState(0);
  const [data, setData] = useState({
    plaidGroup1: [],
    plaidGroup2: [],
    modelSGroup1: [],
    modelSGroup2: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/specs");
        const allSpecs = await res.json();

        setData({
          plaidGroup1: allSpecs.filter(
            (s) => s.model_name === "Model S Plaid" && s.column_group === 1,
          ),
          plaidGroup2: allSpecs.filter(
            (s) => s.model_name === "Model S Plaid" && s.column_group === 2,
          ),
          modelSGroup1: allSpecs.filter(
            (s) => s.model_name === "Model S" && s.column_group === 1,
          ),
          modelSGroup2: allSpecs.filter(
            (s) => s.model_name === "Model S" && s.column_group === 2,
          ),
        });
      } catch (error) {
        console.error("Failed to fetch specs:", error);
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
          className="md:w-[800px] h-auto w-full"
          src="https://res.cloudinary.com/doqeslffo/image/upload/v1770032618/model-s-specs_wynrka.jpg"
          alt="car-specs"
          width={800}
          height={450}
        />
      </div>
      <div className="my-16 ">
        <h1 className="text-white text-center text-2xl font-bold">
          Model S Specs
        </h1>
        <div className="flex my-4 mx-2 items-center justify-center">
          <button
            onClick={() => {
              setSpecs(0);
            }}
            className={`overflow-hidden text-white w-[180px] text-[14px] py-2 mr-4 border-2 ${specs === 0 ? "border-white" : "border-[#3b3b3b]"} font-medium rounded-[5px]`}
          >
            Model S Plaid
          </button>
          <button
            onClick={() => {
              setSpecs(1);
            }}
            className={`overflow-hidden text-white w-[180px] text-[14px] py-2 mr-4 border-2 ${specs === 1 ? "border-white" : "border-[#3b3b3b]"} font-medium rounded-[5px]`}
          >
            Model S
          </button>
        </div>
        {specs === 0 && (
          <div className="flex items-center justify-center">
            <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
              {data.plaidGroup1.map((spec) => {
                return (
                  <div key={spec.id} className="my-3">
                    <h1 className="font-bold text-xl">{spec.heading}</h1>
                    <p className="text-sm">{spec.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
              {data.plaidGroup2.map((spec) => {
                return (
                  <div key={spec.id} className="my-3">
                    <h1 className="font-bold text-xl">{spec.heading}</h1>
                    <p className="text-sm">{spec.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {specs === 1 && (
          <div className="flex items-center justify-center">
            <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
              {data.modelSGroup1.map((spec) => {
                return (
                  <div key={spec.id} className="my-3">
                    <h1 className="font-bold text-xl">{spec.heading}</h1>
                    <p className="text-sm">{spec.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-white flex flex-col w-[140px] justify-evenly mx-4 lg:w-[170px]">
              {data.modelSGroup2.map((spec) => {
                return (
                  <div key={spec.id} className="my-3">
                    <h1 className="font-bold text-xl">{spec.heading}</h1>
                    <p className="text-sm">{spec.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Specs;
