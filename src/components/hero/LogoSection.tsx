import * as React from "react";
import { LogoProps, LogoSectionProps } from "./types";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";

const LogoImage: React.FC<LogoProps> = ({ src, alt, width }) => (
  <div className="flex flex-col justify-center items-center self-stretch my-auto min-w-[215px] max-sm:min-w-[135px]">
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      width={width}
      height={width / 6.13}
      className="object-contain max-w-full aspect-[6.13]"
    />
  </div>
);

export const LogoSection: React.FC<LogoSectionProps> = ({ logos }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [AutoPlay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section
      className="mt-16 w-full max-w-[1150px] overflow-hidden max-md:mt-10"
      aria-label="Partner logos carousel"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-20 max-sm:gap-5">
          {logos.map((logo, index) => (
            <LogoImage key={`${logo.alt}-${index}`} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
};
