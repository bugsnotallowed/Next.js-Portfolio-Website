"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string;
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
  ref={scrollerRef}
  className={cn(
    "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
    start && "animate-scroll",
    pauseOnHover && "hover:[animation-play-state:paused]"
  )}
>
  {items.map((item, idx) => (
    <li
      className="w-[70vw] max-w-full relative
      rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-2 md:p-8 md:w-[60vw]"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
      key={item.name}
    >
      <blockquote className="flex flex-col md:flex-row gap-6 h-full">
        <div
          aria-hidden="true"
          className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
        ></div>
        
        {/* Left side - Experience content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="relative z-20 text-sm md:text-base leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
              {item.quote}
            </span>
          </div>
          
          <div className="relative z-20 mt-6 flex flex-row items-center">
            <span className="flex flex-col gap-1">
              <span className="text-sm md:text-base leading-[1.6] font-semibold text-neutral-300 dark:text-gray-200">
                {item.name}
              </span>
              <span className="text-xs md:text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                {item.title}
              </span>
            </span>
          </div>
        </div>

        {/* Right side - Image section */}
        <div className="flex-shrink-0 w-full md:w-48 lg:w-56 flex items-center justify-center">
          <div className="relative w-full h-32 md:h-40 lg:h-48 rounded-xl overflow-hidden border border-slate-700/50">
            {item.image ? (
              <img
                src={item.image}
                alt={`${item.name} - ${item.title}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            ) : (
              // Fallback placeholder if no image provided
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-slate-700 flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-400">Experience</span>
                </div>
              </div>
            )}
            
            {/* Subtle overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </blockquote>
    </li>
  ))}
</ul>
    </div>
  );
};
