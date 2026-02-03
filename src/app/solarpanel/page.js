import PageBanner from "@/components/modules/banners/PageBanner";
import Infovideo from "@/components/modules/media/Infovideo";
import Carinfobanner from "@/components/modules/banners/Carinfobanner";
import Beyond from "@/components/modules/features/Beyond";
import Roofspecs from "@/components/modules/specs/Roofspecs";

export const metadata = {
  title: "Solar panel | Tesla",
};

const Solarpanel = () => {
  return (
    <div className="overflow-y-auto bg-black">
      <PageBanner
        title="Solar for Existing Roofs"
        urlDesktop="https://res.cloudinary.com/doqeslffo/image/upload/v1770094990/solarpanel_huwts0.jpg"
        urlMobile="https://res.cloudinary.com/doqeslffo/image/upload/v1770094990/solarpanel-mobile_pzcq86.jpg"
        description=" Lowest Cost Solar Panels"
        infoheading1="Panel"
        infodescription1="Convert Sunlight to Energy"
        infoheading2="$"
        infodescription2="Guaranteed Lowest Price for Solar"
        infoheading3="24/7"
        infodescription3="Energy Monitoring"
        infoheading4="1,020 hp"
        infodescription4="Peak Power"
        white="false"
      />
      <Infovideo
        url="https://res.cloudinary.com/doqeslffo/video/upload/v1770094993/panel_pxfzhk.mp4"
        semiheading="Design"
        heading="Sliik and Durable"
        description="Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Schedule a virtual consultation with an Energy Advisor to learn more."
        video="true"
        reverse="true"
        FMR="false"
        suppressHydrationWarning
      />
      <Carinfobanner urlDesktop="https://res.cloudinary.com/doqeslffo/image/upload/v1770094991/batteryback_fjdqzz.jpg" />
      <Beyond
        Beyondheading="Order and Installation"
        Beyondsemiheading="Power On"
        Beyonddescription="With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence."
        black="false"
      />
      <Infovideo
        url="https://res.cloudinary.com/doqeslffo/image/upload/v1770095197/solarproduction_atxssj.jpg"
        semiheading="Efficiency"
        heading="Maximum Solar Production"
        description="Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Glass solar tiles and architectural-grade steel tiles, vent covers and ridge caps come together to form a roof that is both durable and powerful."
        video="false"
        reverse="true"
        FMR="false"
        suppressHydrationWarning
      />
      <Carinfobanner urlDesktop="https://res.cloudinary.com/doqeslffo/image/upload/v1770095195/stock_ipc0wi.jpg" />
      <Roofspecs />
    </div>
  );
};

export default Solarpanel;
