import * as React from "react";
import { BlogCard } from "./BlogCard";
import { BlogFilter } from "./BlogFilter";
import { blogData } from "@components/blog/data";
import { filters } from "@components/blog/filters";

export const BlogSection: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center px-20 py-28 w-full bg-stone-100 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col items-center -mb-6 w-full max-w-[1150px] max-md:mb-2.5 max-md:max-w-full">
        <p className="text-lg tracking-widest text-center uppercase text-stone-400">
          resources
        </p>
        <h1 className="mt-4 text-7xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full max-md:text-4xl">
          Blog & updates
        </h1>
        <nav
          className="flex flex-wrap gap-8 mt-32 max-w-full text-lg tracking-widest uppercase text-neutral-800 w-[525px] max-md:mt-10"
          aria-label="Blog categories"
        >
          {filters.map((filter, index) => (
            <BlogFilter key={index} {...filter} />
          ))}
        </nav>
        <div className="self-stretch mt-8 max-md:max-w-full">
          {[0, 2].map((startIndex) => (
            <div key={startIndex} className="flex gap-5 mt-6 max-md:flex-col">
              {blogData.slice(startIndex, startIndex + 2).map((blog, index) => (
                <div
                  key={index}
                  className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
                >
                  <BlogCard {...blog} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          className="gap-2.5 self-stretch px-6 py-3.5 mt-10 text-base font-bold text-white rounded-xl border border-solid bg-neutral-700 border-neutral-600 max-md:px-5 hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-700"
          aria-label="Load more blog posts"
        >
          Load more
        </button>
      </div>
    </main>
  );
};
