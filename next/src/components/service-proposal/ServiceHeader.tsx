import * as React from "react";
import {ServiceHeaderProps} from "@components/service-proposal/types";
import Image from "next/image";

export const ServiceHeader: React.FC<ServiceHeaderProps> = ({
                                                                title,
                                                                subtitle,
                                                                image,
                                                                imageAlt,
                                                                ariaLabel,
                                                            }) => {
    return (
        <main
        >
          <section
              className="green500 w-full"
              aria-labelledby="service-title"
          >
            <div className="max-w-[1152px] mx-auto px-6 lg:px-8">
              <div className="flex gap-5 pt-6 max-md:flex-col">
                <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                    <h2
                        id="service-title"
                        className="self-start text-lg tracking-widest uppercase text-neutral-800"
                    >
                      {subtitle}
                    </h2>
                    <h1 className="mt-4 text-7xl font-bold text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                      {title}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                  <Image
                      loading="lazy"
                      src={image}
                      alt={imageAlt}
                      className="object-contain grow w-full aspect-[1.7] max-md:mt-10 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
    );
};
