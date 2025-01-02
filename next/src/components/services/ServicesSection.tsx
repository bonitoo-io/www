import * as React from "react";
import { ServiceCard } from "./ServiceCard";
import { servicesData } from "./data";
import Link from "next/link";

export const ServicesSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center px-20 py-32 w-full bg-stone-100 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col -mb-6 w-full max-w-[1150px] max-md:mb-2.5 max-md:max-w-full">
        <h2 className="sr-only">Our Services</h2>
        <p className="c-fg-green-500 self-start text-lg tracking-widest uppercase">
          what we do
        </p>
        <h1 className="mt-4 text-5xl font-bold leading-20 text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          We are a professional R&D studio that aims to provide end to end
          software development projects and services.
        </h1>
        <div className="mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                path={service.path}
                title={service.title}
                description={service.description}
                minHeight={service.minHeight}
                image={service.image}
                imageHeight={service.imageHeight}
                imageWidth={service.imageWidth}
                imageTop={service.imageTop}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
