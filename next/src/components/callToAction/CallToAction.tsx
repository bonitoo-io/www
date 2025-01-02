import * as React from "react";
import { ForwardButton } from "./ForwardButton";
import { CallToActionProps } from "./types";
import Image from "next/image";

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  email,
  imageSrc,
  onButtonClick,
}) => {
  return (
    <main
      className="green500 flex flex-col justify-center items-center px-16 py-16 w-full max-md:px-5 max-md:max-w-full"
      role="main"
    >
      <section
        className="ml-3.5 w-full max-w-[1178px] max-md:max-w-full"
        aria-labelledby="cta-title"
      >
        <div className="flex gap-5 max-md:flex-col">
          <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full font-bold text-white max-md:mt-10 max-md:max-w-full">
              <h2
                id="cta-title"
                className="font-normal text-lg tracking-widest uppercase"
              >
                {title}
              </h2>
              <h1 className="self-stretch mt-2 text-5xl leading-10 text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                {subtitle}
              </h1>
              <ForwardButton title={email} onButtonClick={onButtonClick} />
            </div>
          </article>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src={imageSrc}
              alt="Project analysis illustration"
              className="object-contain grow w-full aspect-[1.34] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
