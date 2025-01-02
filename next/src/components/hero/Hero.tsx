import * as React from "react";
import { HeroText } from "./HeroText";
import { LogoSection } from "./LogoSection";
import Image from "next/image";
import { logos } from "@components/hero/data";
import { HeroProps } from "@components/hero/types";
import styles from "./hero.module.css";

export function Hero({
  textSize,
  title,
  subtitle,
  image,
  imageWidth,
  children,
}: HeroProps) {
  return (
    <main className="flex flex-col px-20 pb-24 w-full bg-neutral-800 max-md:px-5 max-md:max-w-full">
      <section className="self-center -mt-1.5 w-full max-w-[1150px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col justify-between">
          <div
            className={`${styles.textSection} flex flex-col  max-md:ml-0 max-md:w-full`}
          >
            <HeroText textSize={textSize} subtitle={subtitle} title={title}>
              {children}
            </HeroText>
          </div>
          <div
            className={`flex flex-col ml-5 w-[${imageWidth}] max-md:ml-0 max-md:w-full`}
          >
            <Image
              loading="lazy"
              src={image}
              alt="Software development illustration"
              className="object-contain grow w-full aspect-[1.44] max-md:mt-10 max-md:max-w-full ml-8"
            />
          </div>
        </div>
        <LogoSection logos={logos} />
      </section>
    </main>
  );
}
