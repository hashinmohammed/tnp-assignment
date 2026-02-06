"use client";
import PageBanner from "@/components/modules/banners/PageBanner";
import { textVariant } from "@/constants/motion";
import { motion } from "framer-motion";
import Beyond from "@/components/modules/features/Beyond";
import Carinfobanner from "@/components/modules/banners/Carinfobanner";
import Ordernow from "@/components/modules/actions/Ordernow";

const CybertruckClient = () => {
  return (
    <div className="overflow-y-auto bg-tesla-dark">
      <PageBanner
        title="Cybertruck"
        urlDesktop="https://res.cloudinary.com/doqeslffo/image/upload/v1770028690/cybertruck-landing_dtk5lr.jpg"
        urlMobile="https://res.cloudinary.com/doqeslffo/image/upload/v1770028690/cybertruck-landing_dtk5lr.jpg"
        description="Better Utility Than a Truck with More Performance Than a Sports Car"
        infoheading1="340 mi"
        infodescription1="Range (EPA est.)"
        infoheading2="2.6s"
        infodescription2="0-60 mph"
        infoheading3="11,000 lbs"
        infodescription3="Towing Capacity"
        infoheading4="845 hp"
        infodescription4="Peak Power"
        white="false"
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
          Built for Any Planet
        </motion.h1>
      </motion.div>
      <Carinfobanner
        urlDesktop="https://res.cloudinary.com/doqeslffo/image/upload/v1770028683/cybertruck_ze1mff.jpg"
        infoheading1="Shatter"
        infodescription1="Resistant Glass"
        infoheading2="Stainless"
        infodescription2="Steel Exoskeleton"
        infoheading3="Durable"
        infodescription3="And rugged"
      />
      <Beyond
        Beyondheading="Exoskeleton"
        Beyondsemiheading="Safety"
        Beyonddescription="Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass."
        black="true"
      />
      <Beyond
        Beyondheading="Utility"
        Beyondsemiheading="Versatile"
        Beyonddescription="With up to 3,500 pounds of payload capacity and adjustable air suspension, Cybertruck is the most powerful tool we have ever built, engineered with 100 cubic feet of exterior, lockable storage — including a magic tonneau cover that is strong enough to stand on."
        black="false"
      />
      <Ordernow
        Ordernowheading="Cybertruck"
        url="https://res.cloudinary.com/doqeslffo/image/upload/v1770028685/cybertruck-last_ahdv7s.jpg"
        black="false"
      />
    </div>
  );
};

export default CybertruckClient;
