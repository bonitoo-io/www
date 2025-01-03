import * as React from "react";
import { TeamMemberProps } from "./types";
import Image from "next/image";

export const TeamMemberCard: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
}) => {
  return (
    <div className="flex overflow-hidden flex-col grow justify-center w-full bg-white rounded-3xl border border-solid border-stone-300 min-h-[285px] max-md:mt-5">
      <div className="flex flex-col flex-1 w-full">
        <Image
          loading="lazy"
          src={image}
          alt={`${name} - ${role}`}
          className={`object-cover w-full`}
        />
      </div>
      <div className="flex flex-col p-8 w-full text-neutral-800 max-md:px-5">
        <div className="flex justify-between items-start w-full text-2xl font-bold">
          <div className="flex-1 shrink w-full min-w-[240px]">{name}</div>
        </div>
        <div className="mt-3.5 w-full text-base rounded-none max-md:pr-5">
          {role}
        </div>
      </div>
    </div>
  );
};
