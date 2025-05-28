import * as React from "react";
import { JobCard } from "./JobCard";
import { careers } from "../../data/careers";

export function OpenPositions() {
  return (
    <main
      id="open-positions"
      className="flex flex-col justify-center items-center px-20 py-32 w-full bg-white text-neutral-800 max-md:px-5 max-md:py-24 max-md:max-w-full"
    >
      <section className="flex flex-col items-start -mb-6 w-full max-w-[1150px] max-md:mb-2.5 max-md:max-w-full">
        <span className="c-fg-green-500 text-lg tracking-widest uppercase">
          Become part of our team
        </span>
        <h1 className="mt-4 text-5xl font-bold leading-none max-md:text-4xl">
          Open positions
        </h1>
        <div
          className="flex flex-col self-stretch mt-14 w-full max-md:mt-10 max-md:max-w-full"
          role="list"
        >
          {careers.map((position, index) => (
            <div
              key={position.title}
              className={index > 0 ? "mt-6" : ""}
              role="listitem"
            >
              <JobCard position={position} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
