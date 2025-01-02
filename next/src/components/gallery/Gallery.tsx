import * as React from "react";
import { ImageRow } from "./ImageRow";
import { TEAM_GALLERY_IMAGES } from "./data";
import { GalleryImage, GalleryProps } from "./types";

export const Gallery: React.FC<GalleryProps> = ({
  title,
  subtitle,
  images,
}) => {
  const topRowImages = images.slice(0, 2);
  const bottomRowImages = images.slice(2);

  return (
    <main
      className="flex flex-col justify-center items-center px-20 py-32 w-full bg-neutral-800 max-md:px-5 max-md:py-24"
      role="main"
    >
      <section
        className="flex flex-col w-full max-w-[1151px]"
        aria-labelledby="team-section-title"
      >
        <span
          className="c-fg-green-500 text-lg tracking-widest uppercase"
          role="doc-subtitle"
        >
          {subtitle}
        </span>
        <h1
          id="team-section-title"
          className="mt-4 text-5xl font-bold leading-none text-white max-md:text-4xl"
        >
          {title}
        </h1>
        <div className="mt-14 h-[400px] max-md:mt-10 max-md:h-auto">
          <ImageRow images={topRowImages} />
        </div>
        <div className="mt-6 h-[400px] max-md:h-auto">
          <ImageRow images={bottomRowImages} />
        </div>
      </section>
    </main>
  );
};
