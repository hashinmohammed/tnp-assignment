"use client";
import React, { useEffect, useState } from "react";
import PageBanner from "@/components/modules/banners/PageBanner";
import Infovideo from "@/components/modules/media/Infovideo";
import Beyond from "@/components/modules/features/Beyond";
import Image from "@/components/modules/media/Images";
import Carinfobanner from "@/components/modules/banners/Carinfobanner";
import Specs from "@/components/modules/specs/Specs";
import Ordernow from "@/components/modules/actions/Ordernow";
import SkeletonModelY from "@/components/ui/SkeletonModelY";

const ModelyClient = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/modely");
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
    return <SkeletonModelY />;
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
        video="false"
        reverse="false"
      />
      <Beyond
        Beyondheading={data.beyond_1_heading}
        Beyondsemiheading={data.beyond_1_semi_heading}
        Beyonddescription={data.beyond_1_description}
        black={data.beyond_1_black}
      />
      <Image />
      <Carinfobanner
        urlDesktop={data.car_info_banner_1_url}
        infoheading1={data.car_info_banner_1_h1}
        infodescription1={data.car_info_banner_1_d1}
        infoheading2={data.car_info_banner_1_h2}
        infodescription2={data.car_info_banner_1_d2}
        infoheading3={data.car_info_banner_1_h3}
        infodescription3={data.car_info_banner_1_d3}
      />
      <Beyond
        Beyondheading={data.beyond_2_heading}
        Beyondsemiheading={data.beyond_2_semi_heading}
        Beyonddescription={data.beyond_2_description}
        black={data.beyond_2_black}
      />
      <Infovideo
        url={data.infovideo_2_url}
        semiheading={data.infovideo_2_semi}
        heading={data.infovideo_2_heading}
        description={data.infovideo_2_desc}
        video="true"
        reverse="false"
        suppressHydrationWarning
      />
      <Beyond
        Beyondheading={data.beyond_3_heading}
        Beyondsemiheading={data.beyond_3_semi_heading}
        Beyonddescription={data.beyond_3_description}
        black={data.beyond_3_black}
      />
      <Carinfobanner urlDesktop={data.car_info_banner_2_url} />
      <Beyond
        Beyondheading={data.beyond_4_heading}
        Beyondsemiheading={data.beyond_4_semi_heading}
        Beyonddescription={data.beyond_4_description}
        black={data.beyond_4_black}
      />
      <Specs />
      <Ordernow
        Ordernowheading={data.order_now_heading}
        url={data.order_now_url}
        black={data.order_now_black}
      />
    </div>
  );
};

export default ModelyClient;
