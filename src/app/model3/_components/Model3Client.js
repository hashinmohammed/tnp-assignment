"use client";
import React, { useEffect, useState } from "react";
import PageBanner from "@/components/modules/banners/PageBanner";
import Carinfobanner from "@/components/modules/banners/Carinfobanner";
import Beyond from "@/components/modules/features/Beyond";
import Infovideo from "@/components/modules/media/Infovideo";
import Specs from "@/components/modules/specs/Specs";
import Ordernow from "@/components/modules/actions/Ordernow";
import SkeletonModel3 from "@/components/ui/SkeletonModel3";

const Model3Client = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/model3");
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
    return <SkeletonModel3 />;
  }

  if (!data) {
    return (
      <div className="bg-black h-screen flex items-center justify-center text-white">
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
      <Beyond
        Beyondheading={data.beyond_1_heading}
        Beyondsemiheading={data.beyond_1_semi_heading}
        Beyonddescription={data.beyond_1_description}
        black="false"
      />
      <Carinfobanner
        urlDesktop={data.car_info_1_url}
        infoheading1={data.car_info_1_heading_1}
        infodescription1={data.car_info_1_desc_1}
        infoheading2={data.car_info_1_heading_2}
        infodescription2={data.car_info_1_desc_2}
        infoheading3={data.car_info_1_heading_3}
        infodescription3={data.car_info_1_desc_3}
      />
      <Carinfobanner
        urlDesktop={data.car_info_2_url}
        infoheading1={data.car_info_2_heading_1}
        infodescription1={data.car_info_2_desc_1}
        infoheading2={data.car_info_2_heading_2}
        infodescription2={data.car_info_2_desc_2}
        infoheading3={data.car_info_2_heading_3}
        infodescription3={data.car_info_2_desc_3}
      />
      <Beyond
        Beyondheading={data.beyond_2_heading}
        Beyondsemiheading={data.beyond_2_semi_heading}
        Beyonddescription={data.beyond_2_description}
        black="false"
      />
      <Infovideo
        url={data.infovideo_url}
        semiheading={data.infovideo_semi_heading}
        heading={data.infovideo_heading}
        description={data.infovideo_description}
        video="false"
        reverse="false"
      />
      <Beyond
        Beyondheading={data.beyond_3_heading}
        Beyondsemiheading={data.beyond_3_semi_heading}
        Beyonddescription={data.beyond_3_description}
        black="false"
      />
      <Carinfobanner urlDesktop={data.car_info_3_url} />
      <Beyond
        Beyondheading={data.beyond_4_heading}
        Beyondsemiheading={data.beyond_4_semi_heading}
        Beyonddescription={data.beyond_4_description}
        black="false"
      />
      <Specs />
      <Ordernow
        Ordernowheading={data.order_now_heading}
        url={data.order_now_url}
        black="false"
      />
    </div>
  );
};

export default Model3Client;
