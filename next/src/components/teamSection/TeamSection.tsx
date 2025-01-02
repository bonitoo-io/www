import * as React from "react";
import { ImageGridRow } from "./ImageGridRow";
import { bottomRowImages, topRowImages } from "@components/teamSection/data";

export const TeamSection: React.FC = () => {
  return (
    <section
      className="flex flex-col justify-center items-center px-20 py-32 mt-32 w-full bg-neutral-800 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full"
      aria-labelledby="team-section-title"
    >
      <div className="flex flex-col -mb-6 w-full max-w-[1151px] max-md:mb-2.5 max-md:max-w-full">
        <h2 className="sr-only" id="team-section-title">
          Our Team Section
        </h2>
        <span
          className="self-start text-lg tracking-widest uppercase text-stone-400"
          role="text"
        >
          our team
        </span>
        <h3 className="self-start mt-4 text-5xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl">
          Pay us a visit & have some coffee!
        </h3>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <ImageGridRow images={topRowImages} />
        </div>
        <div className="mt-6 max-md:max-w-full">
          <ImageGridRow images={bottomRowImages} />
        </div>
      </div>
    </section>
  );
};
