import Navbar from "@/components/layout/Navbarbanner";
import { Bannerinfos } from "@/constants/data";
import Banner from "@/components/modules/banners/Banner";
import VideoBanner from "@/components/modules/banners/VideoBanner";

const Hero = () => {
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
        {Bannerinfos.map((Bannerinfo) => {
          return (
            <Banner
              title={Bannerinfo.title}
              key={Bannerinfo.id}
              id={Bannerinfo.id}
              urlDesktop={Bannerinfo.urlDesktop}
              urlMobile={Bannerinfo.urlMobile}
              description={Bannerinfo.description}
              underline={Bannerinfo.underline}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
