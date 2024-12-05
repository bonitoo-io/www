import * as React from "react";
import { ShareButton } from "./ShareButton";
import { AuthorCardProps } from "./types";

export const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  description,
  imageUrl,
  socialIconUrl,
}) => {
  return (
    <section
      className="self-center px-5 py-4 mt-20 max-w-full bg-white rounded-3xl border border-gray-200 border-solid w-[914px] max-md:mt-10"
      aria-labelledby="author-name"
    >
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageUrl}
            alt={`Profile photo of ${name}`}
            className="object-contain shrink-0 max-w-full rounded-xl aspect-square w-[172px] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col text-neutral-800 max-md:max-w-full">
              <h2
                id="author-name"
                className="text-3xl font-bold leading-none max-md:max-w-full"
              >
                {name}
              </h2>
              <p className="mt-2 text-base max-md:max-w-full">{description}</p>
            </div>
            <ShareButton
              iconUrl={socialIconUrl}
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    description
                  )}`
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
