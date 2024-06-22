"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/components/data/confetti.json";
import MagicButton from "@/components/ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  spareImgClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  spareImgClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("adarsh.signin173@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "gradient...",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            ></img>
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn(
                spareImgClassName,
                "object-cover, object-center, w-full h-full"
              )}
            ></img>
          )}
        </div>
      </div>

      {id === 3 && (
        <div className="flex gap-1 lg-gap-5 w-fit absolute -right-3 lg:-right-1">
          <div className="flex px-2 flex-col gap-3 lg:gap-5">
            {["React.js", "Javascript", "Next.js"].map((item) => (
              <span
                key={item}
                className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text.center bg-[#10132E]"
              >
                {item}
              </span>
            ))}
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
          </div>
          <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
            {["Vue.js", "Express", "Django"].map((item) => (
              <span
                key={item}
                className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text.center bg-[#10132E]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {id === 6 && (
        <div className="mt-5 relative">
          <div className="absolute -bottom-5 right-0">
            <Lottie
              options={{
                loop: copied,
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />

            <MagicButton
              title={copied ? "Email Copied" : "Copy my Email"}
              icon={<IoCopyOutline />}
              position="left"
              //otherClasses=""
              handleClick={handleCopy}
            />
          </div>
        </div>
      )}

      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
        {/* remove mb-2 mt-2 */}
        <div
          className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};
