"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbarbanner";
import Banner from "@/components/modules/banners/Banner";
import VideoBanner from "@/components/modules/banners/VideoBanner";

const Hero = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setBanners(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar fixed={true} white={"false"} />
      <div className="snap-y snap-mandatory h-screen">
        <VideoBanner
          title="Tesla"
          videoSource="https://res.cloudinary.com/doqeslffo/video/upload/v1770028747/vid_qdtssu.webm"
          description="Schedule a Demo Drive"
          underline={true}
        />
        {loading ? (
          <div className="h-screen w-screen flex items-center justify-center bg-black text-white snap-start">
            <p>Loading Vehicles...</p>
          </div>
        ) : (
          banners.map((banner) => (
            <Banner
              title={banner.title}
              key={banner.id}
              id={banner.id}
              urlDesktop={banner.url_desktop}
              urlMobile={banner.url_mobile}
              description={banner.description}
              underline={banner.underline}
              range={banner.range_val}
              topSpeed={banner.top_speed}
              acceleration={banner.acceleration}
              slug={banner.slug}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Hero;
