import PageBanner from "@/components/modules/PageBanner";
import Infovideo from "@/components/modules/Infovideo";
import Beyond from "@/components/modules/Beyond";
import Image from "@/components/modules/Images";
import Carinfobanner from "@/components/modules/Carinfobanner";
import Specs from "@/components/modules/Specs";
import Ordernow from "@/components/modules/Ordernow";

export const metadata = {
  title: "Model Y | Tesla",
};

const ModelY = () => {
  return (
    <div className="overflow-y-auto bg-black">
      <PageBanner
        title="Model Y"
        urlDesktop="https://res.cloudinary.com/doqeslffo/image/upload/v1770094546/model-y_qaw0je.jpg"
        urlMobile="https://res.cloudinary.com/doqeslffo/image/upload/v1770094546/model-y-mobile_rq1nxh.jpg"
        description="Schedule a Demo Drive"
        infoheading1="330 mi"
        infodescription1="Range (EPA est.)"
        infoheading2="76 cu ft"
        infodescription2="Cargo Space"
        infoheading3="AWD"
        infodescription3="Dual Motor"
        infoheading4="1,020 hp"
        infodescription4="Peak Power"
        white="true"
      />
      <Infovideo
        url="https://res.cloudinary.com/doqeslffo/image/upload/v1770094546/structure_zeey6l.jpg"
        semiheading="Safety"
        heading="Designed for Safety"
        description="Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards"
        video="false"
        reverse="false"
      />
      <Beyond
        Beyondheading="A Place For Everything"
        Beyondsemiheading="Utility"
        Beyonddescription="Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today."
        black="false"
      />
      <Image />
      <Carinfobanner
        urlDesktop="https://res.cloudinary.com/doqeslffo/image/upload/v1770094546/model-y-red_ex9mvk.jpg"
        infoheading1="2"
        infodescription1="Independent motors digitally control torque to the front and rear wheels"
        infoheading2="3.5 s"
        infodescription2="Quickest acceleration—from zero to 60 mph* in as little as 3.5 seconds"
        infoheading3="Weather"
        infodescription3="Unparalleled traction and control, in all weather conditions"
      />
      <Beyond
        Beyondheading="Dual Motor"
        Beyondsemiheading="All-Wheel Drive"
        Beyonddescription="Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road."
        black="false"
      />
      <Infovideo
        url="https://res.cloudinary.com/doqeslffo/video/upload/v1770094552/model-y_axm7z8.mp4"
        semiheading="Range"
        heading="Go Anywhere"
        description="Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. "
        video="true"
        reverse="false"
        suppressHydrationWarning
      />
      <Beyond
        Beyondheading="Future of Driving"
        Beyondsemiheading="Autopilot"
        Beyonddescription="Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving."
        black="false"
      />
      <Carinfobanner urlDesktop="https://res.cloudinary.com/doqeslffo/image/upload/v1770094546/model-y-interior_fsmmlk.jpg" />
      <Beyond
        Beyondheading="Built Around the Driver"
        Beyondsemiheading="Interior"
        Beyonddescription="With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky."
        black="false"
      />
      <Specs />
      <Ordernow
        Ordernowheading="Model S"
        url="https://res.cloudinary.com/doqeslffo/image/upload/v1770094547/model-y-ordernow_qnsjpp.jpg"
        black="false"
      />
    </div>
  );
};

export default ModelY;
