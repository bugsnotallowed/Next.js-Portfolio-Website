"use client";

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
  const middle = Math.ceil(images.length / 2);

  const firstPart = images.slice(0, middle);
  const secondPart = images.slice(middle);

  // Duplicate enough times for a seamless infinite loop
  const infiniteFirst = [...firstPart, ...firstPart, ...firstPart];
  const infiniteSecond = [...secondPart, ...secondPart, ...secondPart];

  return (
    <div className={cn("relative h-[40rem] w-full overflow-hidden", className)}>
      
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[hsl(240,10%,3.9%)] to-transparent z-10 pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[hsl(240,10%,3.9%)] to-transparent z-10 pointer-events-none" />

      <div className="h-full w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start max-w-7xl mx-auto gap-10 py-10 px-5">

          {/* LEFT COLUMN - MOVES UP */}
          <motion.div
            className="grid gap-10"
            animate={{
              y: ["0%", "-33.33%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {infiniteFirst.map((el, idx) => (
              <div key={`left-${idx}`}>
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg"
                  height={400}
                  width={700}
                  alt={`Portfolio image ${idx + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>

          {/* RIGHT COLUMN - MOVES DOWN */}
          <motion.div
            className="grid gap-10 pt-32"
            animate={{
              y: ["-33.33%", "0%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {infiniteSecond.map((el, idx) => (
              <div key={`right-${idx}`}>
                <Image
                  src={el}
                  className="h-80 w-full object-cover object-left-top rounded-lg"
                  height={400}
                  width={700}
                  alt={`Portfolio image ${idx + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};