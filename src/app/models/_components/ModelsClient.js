"use client";
import React, { useEffect, useState } from "react";
import PageBanner from "@/components/modules/banners/PageBanner";
import { textVariant } from "@/constants/motion";
import { motion } from "framer-motion";
import Photo from "@/components/common/photo";
import Video from "@/components/modules/media/Video";
import Carinfo from "@/components/modules/features/Carinfo";
import Carinfobanner from "@/components/modules/banners/Carinfobanner";
import Beyond from "@/components/modules/features/Beyond";
import Electricpowertrain from "@/components/modules/specs/Electricpowertrain";
import Infovideo from "@/components/modules/media/Infovideo";
import Features from "@/components/modules/features/Features";
import Specs from "@/components/modules/specs/Specs";
import Ordernow from "@/components/modules/actions/Ordernow";
import SkeletonModels from "@/components/ui/SkeletonModels";

const ModelsClient = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/models");
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
    return <SkeletonModels />;
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
      <Photo
        urlDesktop={data.photo_url_desktop}
        urlMobile={data.photo_url_mobile}
      />
      <Video />
      <Carinfo
        carinfoheading1={data.car_info_1_heading}
        carinfodescription1={data.car_info_1_desc}
        carinfourl1={data.car_info_1_url}
        carinfoheading2={data.car_info_2_heading}
        carinfodescription2={data.car_info_2_desc}
        carinfourl2={data.car_info_2_url}
        carinfoheading3={data.car_info_3_heading}
        carinfodescription3={data.car_info_3_desc}
        carinfourl3={data.car_info_3_url}
        video="true"
        reverse="false"
      />
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
        Beyondheading={data.beyond_1_heading}
        Beyondsemiheading={data.beyond_1_semi_heading}
        Beyonddescription={data.beyond_1_description}
        black={data.beyond_1_black}
      />
      <Electricpowertrain
        url1={data.ep_url_1}
        epheading1={data.ep_heading_1}
        epdescription1={data.ep_desc_1}
        epstatheading11={data.ep_stat_h11}
        epstatheading12={data.ep_stat_h12}
        epstatheading13={data.ep_stat_h13}
        epstatdescription11={data.ep_stat_d11}
        epstatdescription12={data.ep_stat_d12}
        epstatdescription13={data.ep_stat_d13}
        url2={data.ep_url_2}
        epheading2={data.ep_heading_2}
        epdescription2={data.ep_desc_2}
        epstatheading21={data.ep_stat_h21}
        epstatheading22={data.ep_stat_h22}
        epstatheading23={data.ep_stat_h23}
        epstatdescription21={data.ep_stat_d21}
        epstatdescription22={data.ep_stat_d22}
        epstatdescription23={data.ep_stat_d23}
      />
      <Carinfobanner urlDesktop={data.car_info_banner_2_url} />
      <Beyond
        Beyondheading={data.beyond_2_heading}
        Beyondsemiheading={data.beyond_2_semi_heading}
        Beyonddescription={data.beyond_2_description}
        black={data.beyond_2_black}
      />
      <Carinfo
        carinfoheading1={data.car_info_4_heading}
        carinfodescription1={data.car_info_4_desc}
        carinfourl1={data.car_info_4_url}
        carinfoheading2={data.car_info_5_heading}
        carinfodescription2={data.car_info_5_desc}
        carinfourl2={data.car_info_5_url}
        carinfoheading3={data.car_info_6_heading}
        carinfodescription3={data.car_info_6_desc}
        carinfourl3={data.car_info_6_url}
        video="false"
        reverse="true"
      />
      <Infovideo
        url={data.infovideo_url}
        semiheading={data.infovideo_semi_heading}
        heading={data.infovideo_heading}
        description={data.infovideo_description}
        video="true"
        reverse="false"
      />
      <Beyond
        Beyondheading={data.beyond_3_heading}
        Beyondsemiheading={data.beyond_3_semi_heading}
        Beyonddescription={data.beyond_3_description}
        black={data.beyond_3_black}
      />
      <Features
        url1={data.ep_url_1}
        Featureheading="Features"
        Featuredescription="Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:"
        Feature1="Navigate on Autopilot"
        Feature1Description="Active guidance from on-ramp to off-ramp"
        Feature2="Auto Lane Change"
        Feature2Description="Automatically change lanes while driving on the highway"
        Feature3="Summon"
        Feature3Description="Automatically retrieve your car"
        Feature4="Autopark"
        Feature4Description="Parallel and perpendicular parking with a single touch"
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

export default ModelsClient;
