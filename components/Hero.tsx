import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { ParallaxScroll } from "./ui/ParallaxScrollDemo";
import { images } from "./data/index";
import { InfiniteScrollerPhotos } from "./ui/InfinteScrollerPhotos";

const Hero = () => {
  return (
    <section id="home">
      <div className="pb-10 pt-2 mx-2">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center relative z-10">
          <div className="max-w-[98vw] md:max-w-8xl lg:max-w-[80vw] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="flex flex-col items-center lg:items-start justify-center flex-1">
              <h2 className="uppercase tracking-widest text-xs text-center lg:text-left text-blue-100 max-w-80">
                My Personal Portfolio
              </h2>
              <TextGenerateEffect
                className="text-center lg:text-left text-[40px] md:text-5xl lg:text-6xl"
                words="Hi,👋"
              />
              <TextGenerateEffect
                className="text-center lg:text-left text-[36px] md:text-4xl lg:text-5xl"
                words="I'm Adarsh Gupta. A Full Stack Web Developer."
              />

              <p className="text-center lg:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Transforming Concepts into Seamless Experiences.
              </p>

              <div className="flex flex-row gap-3">
                <a href="#about">
                  <MagicButton
                    title="Show My Work"
                    icon={<FaLocationArrow />}
                    position=""
                  />
                </a>
                <a
                  href="/Adarsh_Resume_23_07.pdf"
                  download={"Adarsh_Resume_23_07.pdf"}
                >
                  <MagicButton
                    title="Download Resume"
                    icon={<FaDownload />}
                    position=""
                  />
                </a>
              </div>
            </div>


            {/* Profile Picture */}
            <div className="flex-shrink-0 lg:flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 blur-xl opacity-30 scale-110"></div>

                <ParallaxScroll images={images}/>
                {/* <InfiniteScrollerPhotos images={images} direction="down"
              speed="normal" pauseOnHover = {true} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
