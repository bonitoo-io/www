import * as React from "react";
import { TimelineItemProps } from "./types";
import Image from "next/image";

export const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed,
  backgroundColor,
}) => {
  const content = (
    <div className="flex flex-col grow shrink self-stretch my-auto text-white min-w-[240px] w-[473px] max-md:max-w-full">
      <div className="text-lg tracking-widest uppercase text-stone-400 max-md:max-w-full">
        {year}
      </div>
      <div className="mt-4 text-3xl font-bold max-md:max-w-full">{title}</div>
      <div className="mt-4 text-base max-md:max-w-full">{description}</div>
    </div>
  );

  const image = backgroundColor ? (
    <div
      className={`flex flex-col grow shrink justify-center self-stretch px-11 py-20 my-auto ${backgroundColor} rounded-3xl border border-solid border-neutral-700 min-w-[240px] w-[358px] max-md:px-5 max-md:max-w-full`}
    >
      <Image
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain aspect-[6.1] w-[359px]"
      />
    </div>
  ) : (
    <Image
      loading="lazy"
      src={imageSrc}
      alt={imageAlt}
      className="object-contain grow shrink self-stretch my-auto rounded-3xl aspect-[2.05] min-w-[240px] w-[358px] max-md:max-w-full"
    />
  );

  return (
    <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
      {isReversed ? (
        <>
          {content}
          {image}
        </>
      ) : (
        <>
          {image}
          {content}
        </>
      )}
    </div>
  );
};
