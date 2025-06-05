import React from "react";
import { InfiniteMovingCards } from "./ui/InfinteMovingCards";
import { testimonials } from "./data";

const Experiences = () => {
  return (
    <section id="experiences">
    <div>
      <div className="py-10">
        <h1 className="heading">
          A small selection of {""}
          <span className="text-purple">Experiences</span>
        </h1>
        <div className="item-center flex flex-col">
          <div
            className="h-[50vh] md:h-[30rem] rounded-md
flex flex-col antialiased items-center relative
overflow-hidden"
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Experiences;
