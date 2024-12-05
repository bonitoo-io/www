import * as React from "react";

interface BlogHeaderProps {
  category: string;
  title: string;
  imageUrl: string;
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  category,
  title,
  imageUrl,
}) => {
  return (
    <header
      className="flex flex-col items-center px-20 pt-24 w-full text-center bg-stone-100 max-md:px-5 max-md:max-w-full"
      role="banner"
    >
      <div className="flex z-10 flex-col items-center mb-0 max-w-full w-[1021px] max-md:mb-2.5">
        <span
          className="text-lg tracking-widest uppercase text-stone-400"
          aria-label={`Blog category: ${category}`}
        >
          {category}
        </span>
        <h1 className="self-stretch mt-4 text-7xl font-bold leading-[72px] text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          {title}
        </h1>
        <img
          loading="lazy"
          src={imageUrl}
          alt="IoT Gateway monitoring system interface showing various data points and controls"
          className="object-contain mt-10 max-w-full rounded-3xl aspect-[2.06] w-[914px]"
        />
      </div>
    </header>
  );
};
