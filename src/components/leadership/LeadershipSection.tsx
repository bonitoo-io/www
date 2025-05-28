import * as React from "react";
import { TeamMemberCard } from "./TeamMemberCard";
import { TeamSectionProps } from "./types";
import { leadershipData } from "@data/leadership";

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="ourTeam"
      className="flex flex-col justify-center items-center px-20 py-32 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full"
      aria-labelledby="leadership-title"
    >
      <div className="flex flex-col -mb-6 w-full max-w-[1150px] max-md:mb-2.5 max-md:max-w-full">
        <div className="c-fg-green-500 self-start text-lg tracking-widest uppercase">
          {leadershipData.subtitle}
        </div>
        <h1
          id="leadership-title"
          className="self-start mt-4 text-5xl font-bold leading-none text-neutral-800 max-md:text-4xl"
        >
          {leadershipData.title}
        </h1>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {leadershipData.members.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full"
              >
                <TeamMemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {leadershipData.members.slice(3).map((member, index) => (
                <div
                    key={index}
                    className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full"
                >
                  <TeamMemberCard {...member} />
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
