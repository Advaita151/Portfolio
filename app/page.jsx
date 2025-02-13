import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <div>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24 ">
            <div className="text-center xl:text-left order-2 lg:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6">
                Hello I'm <br />{" "}
                <span className="text-accent">Advaita Vedanta</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I excel at crafting elegant digital experiences using full stack
                development tools and I am proficient in various programming
                language
              </p>
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-none mb-8 lg:mb-0">
              <Photo></Photo>
            </div>

          </div>
        </div>
        <Stats></Stats>
      </section>
    </div>
  );
};

export default Home;
