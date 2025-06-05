import React from "react";
import { projects } from "./data";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image"

const RecentProjects = () => {
  return (
    <section id="projects">
    <div className="py-10">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="px-4 py-4 pt-2 pb-0 gap-16 item-center justify-center flex flex-wrap mt-8">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <Image className="" src="/bg.png" width={1200}   // supply an intrinsic width/height
                  height={800}alt="bg-img" loading = "lazy"></Image>
                </div>
                <Image
                  src={img}
                  alt={title}
                  width={1200}   // supply an intrinsic width/height
                  height={800}
                  className="z-10 absolute bottom-0"
                ></Image>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image width={1200}   // supply an intrinsic width/height
                        height={800} src={icon} alt="icon5" className="p-2" loading = "lazy"/>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default RecentProjects;
