"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";

import { cn } from "../../utils/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  // const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  // Duplicate images for infinite scroll effect
  const infiniteFirst = [...firstPart, ...secondPart, ...firstPart];
  const infiniteSecond = [...secondPart, ...firstPart, ...secondPart];
  const infiniteThird = [...thirdPart, ...thirdPart, ...thirdPart];

  return (
    <div className={cn("relative h-[40rem] w-full", className)}>
      {/* Top gradient blur */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[hsl(240,10%,3.9%)] to-transparent z-10 pointer-events-none" />

      {/* Bottom gradient blur */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(240,10%,3.9%)] to-transparent z-10 pointer-events-none" />
      <div
        className={cn(
          "h-[40rem] items-start overflow-y-auto w-full",
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
          className
        )}
        ref={gridRef}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-start  max-w-9xl mx-auto gap-10 py-10 px-5"
          ref={gridRef}
        >
          <div className="grid gap-10">
            {infiniteFirst.map((el, idx) => (
              <motion.div
                style={{ y: translateFirst }} // Apply the translateY motion value here
                key={"grid-1" + idx}
              >
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="700"
                  alt="thumbnail"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid py-32 gap-10">
            {infiniteSecond.map((el, idx) => (
              <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="700"
                  alt="thumbnail"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
          {/* <div className="grid gap-10">
            {infiniteThird.map((el, idx) => (
              <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="700"
                  alt="thumbnail"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};
