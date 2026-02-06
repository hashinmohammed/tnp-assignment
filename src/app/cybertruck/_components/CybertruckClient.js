"use client";
import React, { useEffect, useState } from "react";
import PageBanner from "@/components/modules/banners/PageBanner";
import { textVariant } from "@/constants/motion";
import { motion } from "framer-motion";
import Beyond from "@/components/modules/features/Beyond";
import Carinfobanner from "@/components/modules/banners/Carinfobanner";
import Ordernow from "@/components/modules/actions/Ordernow";
import SkeletonCybertruck from "@/components/ui/SkeletonCybertruck";

const CybertruckClient = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cybertruck");
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
    return <SkeletonCybertruck />;
  }

  if (!data) {
    return (
      <div className="bg-tesla-dark h-screen flex items-center justify-center text-white">
        Failed to load data.
      </div>
    );
  }

  return (
    <div className="overflow-y-auto bg-tesla-dark">
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
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="h-[20vh] bg-black flex items-center justify-center overflow-hidden text-white"
      >
        <motion.h1
          variants={textVariant(1.6)}
          className="text-xl font-medium overflow-hidden sm:text-3xl lg:text-4xl"
        >
          {data.section_heading}
        </motion.h1>
      </motion.div>
      <Carinfobanner
        urlDesktop={data.car_info_url_desktop}
        infoheading1={data.car_info_heading_1}
        infodescription1={data.car_info_desc_1}
        infoheading2={data.car_info_heading_2}
        infodescription2={data.car_info_desc_2}
        infoheading3={data.car_info_heading_3}
        infodescription3={data.car_info_desc_3}
      />
      <Beyond
        Beyondheading={data.beyond_1_heading}
        Beyondsemiheading={data.beyond_1_semi_heading}
        Beyonddescription={data.beyond_1_description}
        black={data.beyond_1_black}
      />
      <Beyond
        Beyondheading={data.beyond_2_heading}
        Beyondsemiheading={data.beyond_2_semi_heading}
        Beyonddescription={data.beyond_2_description}
        black={data.beyond_2_black}
      />
      <Ordernow
        Ordernowheading={data.order_now_heading}
        url={data.order_now_url}
        black={data.order_now_black}
      />
    </div>
  );
};

export default CybertruckClient;
