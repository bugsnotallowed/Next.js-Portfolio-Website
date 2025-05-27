import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { socialMedia } from "@/components/data";
import MagicButton from "@/components/ui/MagicButton";
import { FocusCards } from "./ui/FocusCards";
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-2" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div> */}

      <div className="flex mt-10 md:flex-row flex-col z-10 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adarsh Gupta
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.src}>
                <Image src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
