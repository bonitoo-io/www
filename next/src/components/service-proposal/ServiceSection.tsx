import * as React from "react";
import { ServiceCard } from "./ServiceCard";
import { ServiceSectionProps } from "./types";
import Image from "next/image";
export const ServiceSection: React.FC<ServiceSectionProps> = ({
  image,
  services,
  imagePosition = "left",
}) => {
  const imageElement = (
    <Image
      loading="lazy"
      src={image}
      alt="Decorative illustration"
      className="object-contain self-stretch my-auto rounded-3xl aspect-[1.12] min-w-[240px] w-[447px] max-md:max-w-full"
    />
  );

  const servicesElement = (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[563px] max-md:max-w-full">
      {services.map((service, index) => (
        <div key={index} className={index > 0 ? "mt-16 max-md:mt-10" : ""}>
          <ServiceCard {...service} />
        </div>
      ))}
    </div>
  );

  return (
    <section className="flex flex-wrap gap-10 items-center max-md:max-w-full">
      {imagePosition === "left" ? (
        <>
          {imageElement}
          {servicesElement}
        </>
      ) : (
        <>
          {servicesElement}
          {imageElement}
        </>
      )}
    </section>
  );
};
