"use client";
import React, { useEffect, useState } from "react";
import PageBanner from "@/components/modules/banners/PageBanner";
import Infovideo from "@/components/modules/media/Infovideo";
import Carinfobanner from "@/components/modules/banners/Carinfobanner";
import Beyond from "@/components/modules/features/Beyond";
import Roofspecs from "@/components/modules/specs/Roofspecs";
import SkeletonSolarPanel from "@/components/ui/SkeletonSolarPanel";

const PanelClient = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/solarpanel");
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <SkeletonSolarPanel />;
  }

  if (!data) {
    return (
      <div className="bg-tesla-dark h-screen flex items-center justify-center text-white">
        Failed to load data.
      </div>
    );
  }

  return (
    <div className="overflow-y-auto bg-black">
      <PageBanner
        title={data.banner_title}
        urlDesktop={data.banner_url_desktop}
        urlMobile={data.banner_url_mobile}
        description={data.banner_description}
        infoheading1={data.banner_info_heading_1}
        infodescription1={data.banner_info_desc_1}
        infoheading2={data.banner_info_heading_2}
        infodescription2={data.banner_info_desc_2}
        infoheading3={data.banner_info_heading_3}
        infodescription3={data.banner_info_desc_3}
        infoheading4={data.banner_info_heading_4}
        infodescription4={data.banner_info_desc_4}
        white={data.banner_white}
      />
      <Infovideo
        url={data.infovideo_1_url}
        semiheading={data.infovideo_1_semi}
        heading={data.infovideo_1_heading}
        description={data.infovideo_1_desc}
        video="true"
        reverse="true"
        FMR="false"
        suppressHydrationWarning
      />
      <Carinfobanner urlDesktop={data.car_info_banner_1_url} />
      <Beyond
        Beyondheading={data.beyond_1_heading}
        Beyondsemiheading={data.beyond_1_semi_heading}
        Beyonddescription={data.beyond_1_description}
        black={data.beyond_1_black}
      />
      <Infovideo
        url={data.infovideo_2_url}
        semiheading={data.infovideo_2_semi}
        heading={data.infovideo_2_heading}
        description={data.infovideo_2_desc}
        video="false"
        reverse="true"
        FMR="false"
        suppressHydrationWarning
      />
      <Carinfobanner urlDesktop={data.car_info_banner_2_url} />
      <Roofspecs />
    </div>
  );
};

export default PanelClient;
