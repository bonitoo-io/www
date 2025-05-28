import * as React from "react";
import { SectionHeaderProps } from "./types";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  titleId,
}) => {
  return (
    <div
      className="flex flex-col -mb-6 max-w-full max-md:mb-2.5"
      role="heading"
      aria-level={2}
    >
      <div
        className="self-center text-lg tracking-widest uppercase text-stone-400"
        aria-label={subtitle}
      >
        {subtitle}
      </div>
      <h2
        id={titleId}
        className="mt-4 text-7xl font-bold leading-none text-white max-md:max-w-full max-md:text-4xl"
      >
        {title}
      </h2>
    </div>
  );
};
