import React from "react";
import { InfiniteMovingCards } from "./ui/InfinteMovingCards";
import { testimonials } from "./data";
import { cn } from '@/utils/cn';

interface Tech {
  name: string;
  icon: string;
}

interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  learning?: string;
  tech?: Tech[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 'Internship',
    period: 'Jan 2026 - Present',
    role: 'Software Development Engineer Intern',
    company: 'Information Data System Pvt Ltd',
    location: 'Mumbai, Maharashtra - Paid',
    learning: "– Engineered and deployed production-ready features across enterprise platforms including Supply Chain Managemennt, DPDP-compliant Consent Management Platform, and Student EID Stack, delivering scalable frontend and backend functionality using modern full-stack technologies.– Diagnosed, debugged, and resolved 10+ production issues by analyzing application behavior, validating business logic, reproducing defects, and implementing robust fixes to improve system reliability, performance, and user experience. – Designed and implemented data-intensive features involving complex workflows, database operations, REST API integrations, and efficient data processing to support production-scale enterprise applications with high accuracy and maintainability.",
  }
];

const Experiences = () => {

  return (
    <section id="experiences">
      <div className="py-10">
        <h1 className="heading">
          A small selection of {""}
          <span className="text-purple">Experiences</span>
        </h1>
        <div className="item-center flex flex-col py-20">
          {/* Timeline */}
          <div className="relative mx-10">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-purple"></div>

            {experienceData.map((item, index) => (
              <div key={item.id} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full border-4 border-purple text-purple"></div>

                {/* Period */}
                <div className="ml-8 mb-4">
                  <span className="text-2xl font-semibold text-purple">
                    {item.period}
                  </span>
                </div>

                {/* Education Card */}
                <div className="ml-8">
                  <div
                    className={cn(
                      "border border-slate-700/50 rounded-lg p-6 transition-all duration-300",
                      "hover:border-purple-500/50 cursor-pointer",
                    )}
                  >
                    {/* Degree and Institution */}
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
                          Learnings
                        </h4>
                        <p className="text-gray-400 text-lg">
                          {item.learning}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
          <div
            className="h-[50vh] md:h-[30rem] rounded-md
flex flex-col antialiased items-center relative
overflow-hidden"
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="normal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
