import React, { useState } from "react";
import { InfiniteMovingCards } from "./ui/InfinteMovingCards";
import { testimonials, experienceData } from "./data";
import { ExternalLink, FileText } from "lucide-react";
import { cn } from '@/utils/cn';


const Experiences = () => {

  return (
    <section id="experiences">
      <div className="py-10">
        <h1 className="heading">
          A small selection of {""}
          <span className="text-purple">Experiences</span>
        </h1>
        <div className="item-center flex flex-col py-20 px-5 gap-10 md:gap-20 lg:gap-32">
          {/* Timeline */}
          <div className="relative mx-10">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple"></div>



            {experienceData.map((item, index) => (
              <div
                key={item.id}
                className="relative mb-12 last:mb-0 pb-12"
              >

                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute -left-2 top-0 w-4 h-4 rounded-full",
                    "border-4 border-background",
                    "transition-all duration-300",
                    item.id === item.id
                      ? "bg-purple-500 scale-125"
                      : "bg-purple-600"
                  )}
                />

                {/* Period */}
                <div className="ml-8 mb-4">
                  <span className="text-2xl font-semibold text-purple-400">
                    {item.period}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="ml-8 flex flex-row items-start ">
                  <div
                    className={cn(
                      "border rounded-lg p-4 transition-all duration-300 flex flex-row justify-between gap-4 cursor-pointer",
                    )}
                  >

                    <div className="w-3/5 flex flex-col gap-4">
                      {/* Role + Company */}
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {item.role}
                        </h3>

                        <p className="text-gray-400 text-lg">
                          {item.company} {item.location}
                        </p>
                      </div>

                      {/* Learning */}
                      {item.learning && (
                        <div className="mb-4">
                          <h4 className="text-xl font-semibold text-white mb-2">
                            Responsibilities and Learnings
                          </h4>

                          <p className="text-gray-400 text-lg leading-relaxed">
                            {item.learning}
                          </p>
                        </div>
                      )}

                      {/* Technologies */}
                      {item.tech && (
                        <div className="flex flex-wrap gap-2 mt-5">
                          {item.tech.map((technology) => (
                            <div
                              key={technology.name}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/60 bg-slate-800/30"
                            >
                              <img
                                src={technology.icon}
                                alt={technology.name}
                                className="w-4 h-4"
                              />

                              <span className="text-sm text-gray-300">
                                {technology.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>


                    <div className="w-2/5 flex items-center">
                      <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:overflow-y-auto lg:scrollbar-thin lg:scrollbar-thumb-slate-700/50 lg:scrollbar-track-slate-900/50 w-full">


                        <div
                          className={cn(
                            "rounded-xl overflow-hidden",
                            "border border-slate-700/50",
                            "bg-slate-950/50",
                            "backdrop-blur-sm",
                            "h-[540px]",
                          )}
                        >

                          {/* Preview Header */}
                          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700/50">

                            <div className="flex items-center gap-3">

                              <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                <FileText
                                  size={18}
                                  className="text-purple-400"
                                />
                              </div>

                              <div>
                                <h3 className="text-white font-semibold">
                                  Document Preview
                                </h3>

                                <p className="text-xs text-gray-500">
                                  {item.company}
                                </p>
                              </div>

                            </div>

                            <a
                              href={item.documents[0].url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                              title="Open PDF"
                            >
                              <ExternalLink size={17} />
                            </a>

                          </div>



                          <div className="bg-slate-900 w-full">
                            <iframe
                              key={item.documents[0].url}
                              src={`${item.documents[0].url}#toolbar=0&navpanes=0`}
                              className="w-full h-[540px] border-none"
                              title={item.documents[0].title}
                            />
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>


        </div>
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </section >
  );
};

export default Experiences;
