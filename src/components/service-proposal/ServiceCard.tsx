import * as React from "react";
import { ServiceCardProps } from "./types";
import Image from "next/image";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex flex-wrap gap-7 items-start w-full max-md:max-w-full">
      <div
        className="green500 flex gap-2 justify-center items-center px-4 w-16 h-16 rounded-xl"
        role="img"
        aria-label={`Icon for ${title}`}
      >
        <Image
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain self-stretch my-auto w-8 aspect-square"
        />
      </div>
      <div className="flex flex-col flex-1 shrink basis-8 min-w-[240px] text-neutral-800 max-md:max-w-full">
        <h3 className="text-lg font-bold max-md:max-w-full">{title}</h3>
        <p className="mt-4 text-base max-md:max-w-full">{description}</p>
      </div>
    </article>
  );
};
