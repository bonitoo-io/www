import Image from "next/image";
import * as React from "react";
import { BenefitItemProps } from "./types";

export const BenefitItem: React.FC<BenefitItemProps> = ({
  icon,
  title,
  description,
  id,
}) => {
  return (
    <article
      className="flex flex-wrap gap-7 items-start w-full max-md:max-w-full"
      aria-labelledby={`benefit-title-${id}`}
    >
      <div className="green500 flex gap-2 justify-center items-center px-4 w-16 h-16 rounded-xl">
        <Image
          src={icon}
          alt=""
          width={32}
          height={32}
          className="object-contain"
          priority={false}
        />
      </div>
      <div className="flex flex-col flex-1 shrink basis-8 min-w-[240px] text-neutral-800 max-md:max-w-full">
        <h3
          id={`benefit-title-${id}`}
          className="text-lg font-bold max-md:max-w-full"
        >
          {title}
        </h3>
        <p className="mt-4 text-base max-md:max-w-full">{description}</p>
      </div>
    </article>
  );
};
