import * as React from "react";
import { BlogCardProps } from "./types";
import Image from "next/image";

export const BlogCard: React.FC<BlogCardProps> = ({
  date,
  title,
  description,
  image,
  imageAlt,
}) => {
  return (
    <article
      className="flex overflow-hidden flex-col grow justify-center w-full bg-white rounded-3xl border border-solid border-stone-300 min-h-[431px] max-md:mt-10 max-md:max-w-full"
      role="article"
    >
      <figure className="flex flex-col flex-1 w-full max-md:max-w-full">
        <Image
          loading="lazy"
          src={image}
          alt={imageAlt}
          className="object-contain w-full aspect-[2.81] max-md:max-w-full"
        />
      </figure>
      <section className="flex flex-col p-8 w-full max-md:px-5 max-md:max-w-full">
        <header className="flex justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
            <time
              dateTime={new Date(date).toISOString()}
              className="text-lg tracking-widest uppercase text-neutral-400 max-md:max-w-full"
            >
              {date}
            </time>
            <h2 className="mt-1 text-3xl font-bold leading-8 text-neutral-800 max-md:max-w-full">
              {title}
            </h2>
          </div>
        </header>
        <p className="mt-3.5 w-full text-base rounded-none text-neutral-800 max-md:max-w-full">
          {description}
        </p>
      </section>
    </article>
  );
};
