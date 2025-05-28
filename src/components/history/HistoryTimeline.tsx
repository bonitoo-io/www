import * as React from "react";
import { TimelineItem } from "./TimelineItem";
import { timelineData } from "@data/history";

export const HistoryTimeline: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center px-20 py-32 w-full bg-neutral-800 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <section className="flex flex-col items-start -mb-6 w-full max-w-[1150px] max-md:mb-2.5 max-md:max-w-full">
        <h1 className="c-fg-green-500 font-normal text-lg tracking-widest uppercase">
          history
        </h1>
        <h2 className="mt-4 text-5xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl">
          Our successful path
        </h2>
        <div className="flex flex-col self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full">
          {timelineData.items.map((item, index) => (
            <div key={index} className={index > 0 ? "mt-32 max-md:mt-10" : ""}>
              <TimelineItem {...item} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
