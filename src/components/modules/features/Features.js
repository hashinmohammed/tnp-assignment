"use client";
import { useCarousel } from "@/hooks/useCarousel";
import { motion } from "framer-motion";
import { textVariant } from "@/constants/motion";
import TabButton from "@/components/ui/TabButton";

const Features = ({
  Featureheading,
  Featuredescription,
  Feature1,
  Feature1Description,
  Feature2,
  Feature2Description,
  Feature3,
  Feature3Description,
  Feature4,
  Feature4Description,
}) => {
  const slides = [
    {
      url: "https://res.cloudinary.com/doqeslffo/video/upload/v1770032659/navigate-on-autopilot_cmmocr.mp4",
    },
    {
      url: "https://res.cloudinary.com/doqeslffo/video/upload/v1770032649/auto-lane-change_d4odql.mp4",
    },
    {
      url: "https://res.cloudinary.com/doqeslffo/video/upload/v1770032621/summon_an0g70.mp4",
    },
    {
      url: "https://res.cloudinary.com/doqeslffo/video/upload/v1770032651/autopark_mz3d18.mp4",
    },
  ];

  const { currentIndex, nextSlide, goToSlide } = useCarousel(slides.length);

  return (
    <div className="bg-white pt-14 py-10">
      <div className="max-w-[1000px] mx-auto my-16 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex-1/2 mx-5 max-w-[700px] sm:mr-24 overflow-hidden"
        >
          <motion.h1
            variants={textVariant(1)}
            className="font-bold text-2xl overflow-hidden mb-5 mt-1 sm:text-3xl md:font-medium"
          >
            {Featureheading}
          </motion.h1>
          <motion.p
            variants={textVariant(1.2)}
            className="text-sm text-gray-700 overflow-hidden"
          >
            {Featuredescription}
          </motion.p>
        </motion.div>
      </div>

      <div>
        <div className="max-w-[90vw] mx-auto mb-14 rounded-2xl bg-white max-h-[100vh] overflow-hidden">
          <video
            className="object-contain w-[100%] h-[100%]"
            autoPlay
            muted
            src={`${slides[currentIndex].url}`}
            onEnded={() => nextSlide()}
            alt="model-s-battery"
            suppressHydrationWarning
          />
        </div>

        <div className="flex justify-center max-w-[90vw] mx-auto flex-wrap">
          <div className="flex justify-center max-w-[90vw] mx-auto flex-wrap">
            <TabButton
              isActive={currentIndex === 0}
              onClick={() => goToSlide(0)}
              className="max-w-[250px] min-w-[170px]"
            >
              <h1 className="font-bold text-xl mb-2 sm:text-2xl">{Feature1}</h1>
              <p className="text-xs">{Feature1Description}</p>
            </TabButton>
            <TabButton
              isActive={currentIndex === 1}
              onClick={() => goToSlide(1)}
              className="max-w-[250px] min-w-[170px]"
            >
              <h1 className="font-bold text-xl mb-2 sm:text-2xl">{Feature2}</h1>
              <p className="text-xs">{Feature2Description}</p>
            </TabButton>
            <TabButton
              isActive={currentIndex === 2}
              onClick={() => goToSlide(2)}
              className="max-w-[250px] min-w-[170px]"
            >
              <h1 className="font-bold text-xl mb-2 sm:text-2xl">{Feature3}</h1>
              <p className="text-xs">{Feature3Description}</p>
            </TabButton>
            <TabButton
              isActive={currentIndex === 3}
              onClick={() => goToSlide(3)}
              className="max-w-[250px] min-w-[170px]"
            >
              <h1 className="font-bold text-xl mb-2 sm:text-2xl">{Feature4}</h1>
              <p className="text-xs">{Feature4Description}</p>
            </TabButton>
          </div>
        </div>
      </div>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={textVariant(0.7)}
        className="my-4 overflow-hidden text-sm text-center text-gray-500"
      >
        * With rollout subtracted
      </motion.p>
    </div>
  );
};

export default Features;
