import * as React from "react";
import { BlogCardProps } from "./types";

export const BlogCard: React.FC<BlogCardProps> = ({
  date,
  title,
  description,
  imageUrl,
  imageAlt,
}) => {
  return (
    <article className="flex overflow-hidden flex-col grow justify-center w-full bg-white rounded-3xl border border-solid border-stone-300 min-h-[431px] max-md:mt-6 max-md:max-w-full">
      <div className="flex flex-col flex-1 w-full max-md:max-w-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt={imageAlt}
          className="object-contain w-full aspect-[2.54] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col p-8 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
            <time className="text-lg tracking-widest uppercase text-neutral-400 max-md:max-w-full">
              {date}
            </time>
            <h2 className="mt-1 text-3xl font-bold leading-8 text-neutral-800 max-md:max-w-full">
              {title}
            </h2>
          </div>
        </div>
        <p className="mt-3.5 w-full text-base rounded-none text-neutral-800 max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>
  );
};
