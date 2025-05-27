// import React from "react";
// import Image from "next/image";
// import { Spotlight } from "@/components/ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import MagicButton from "./ui/MagicButton";
// import { FaLocationArrow } from "react-icons/fa6";
// import { FaDownload } from "react-icons/fa";

// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36">
//       <div>
//         <Spotlight
//           className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="top-10 left-full h-[80vh] w-[50vw]"
//           fill="purple"
//         />
//         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
//       </div>

//       <div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
//         {/* Radial gradient for the container to give a faded look */}
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       </div>

//       {/* <div className="flex flex-row"> */}
//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//           <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
//             My Personal Portfolio - Dynamic Web Magic with Next.js
//           </h2>
//           <TextGenerateEffect
//             className="text-center text-[40px] md:text-5xl lg:text-6xl"
//             words="Transforming Concepts into Seamless Experiences"
//           />

//           <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
//             Hello, I&apos;m Adarsh Gupta. A Full Stack Web Developer.
//           </p>

//           <div className="flex flex-row gap-3">
//             <a href="#about">
//               <MagicButton
//                 title="Show My Work"
//                 icon={<FaLocationArrow />}
//                 position=""
//               />
//             </a>
//             <a href="/AdarshResume724.pdf" download={"AdarshResume724.pdf"}>
//               <MagicButton
//                 title="Download Resume"
//                 icon={<FaDownload />}
//                 position=""
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home">
    <div className="pb-10 pt-12">
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

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-6xl lg:max-w-[80vw] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start justify-center flex-1">
            <h2 className="uppercase tracking-widest text-xs text-center lg:text-left text-blue-100 max-w-80">
              My Personal Portfolio - Dynamic Web Magic with Next.js
            </h2>
            <TextGenerateEffect
              className="text-center lg:text-left text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Concepts into Seamless Experiences"
            />

            <p className="text-center lg:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hello, I&apos;m Adarsh Gupta. A Full Stack Web Developer.
            </p>

            <div className="flex flex-row gap-3">
              <a href="#about">
                <MagicButton
                  title="Show My Work"
                  icon={<FaLocationArrow />}
                  position=""
                />
              </a>
              <a href="/Adarsh_Resume20_9.pdf" download={"Adarsh_Resume20_9.pdf"}>
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
              {/* Glowing backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 blur-xl opacity-30 scale-110"></div>
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <Image
                  src="/casualprofilephoto2.png" // Replace with your actual image path
                  alt="Adarsh Gupta - Full Stack Web Developer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              {/* Glowing backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 blur-xl opacity-30 scale-220"></div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;