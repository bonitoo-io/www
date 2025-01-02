import * as React from "react";
import { CaseStudyCard } from "./CaseStudyCard";
import { studies } from "@components/caseStudies/data";

const caseStudiesData = {
  heading: "Case studies",
  subheading: "projects that make us stand out",
  studies,
};

export const CaseStudies: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-28 w-full bg-neutral-800 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col -mb-6 w-full max-w-[1150px] max-md:mb-2.5 max-md:max-w-full">
        <h2 className="sr-only">Case Studies Section</h2>
        <p className="c-fg-green-500 self-center text-lg tracking-widest text-center uppercase text-stone-400">
          {caseStudiesData.subheading}
        </p>
        <h1 className="self-center mt-4 text-7xl font-bold leading-none text-center text-white max-md:max-w-full max-md:text-4xl">
          {caseStudiesData.heading}
        </h1>

        <div className="mt-32 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {caseStudiesData.studies.slice(0, 2).map((study, index) => (
              <CaseStudyCard key={`top-${index}`} {...study} />
            ))}
          </div>
        </div>

        <div className="mt-6 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {caseStudiesData.studies.slice(2).map((study, index) => (
              <CaseStudyCard key={`bottom-${index}`} {...study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
