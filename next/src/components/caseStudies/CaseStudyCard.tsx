import * as React from "react";
import {CaseStudyCardProps} from "./types";
import Image from "next/image";

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
                                                                category,
                                                                title,
                                                                description,
                                                                imageSrc,
                                                                isLarge,
                                                            }) => {
    return (
        <article
            className={`flex overflow-hidden flex-col ${
                isLarge ? "w-[67%]" : "w-[33%]"
            } rounded-3xl border border-solid border-neutral-700 min-h-[626px] max-md:mt-6 max-md:w-full bg-stone-800`}
        >
            <div className={`relative`}>
                {isLarge ? (
                    <>
                        <Image
                            loading="lazy"
                            src={imageSrc}
                            alt={`${title} project showcase`}
                            className="object-cover h-[381px] min-w-[240px] w-[759px]"
                        />
                    </>
                ) : (
                    <Image
                        loading="lazy"
                        src={imageSrc}
                        alt={`${title} project showcase`}
                        className="flex-1 w-full rounded-none aspect-[0.97]"
                    />
                )}
            </div>
            <div className="flex flex-col p-8 w-full max-md:px-5 bg-white grow">
                <div className="flex justify-between items-start w-full">
                    <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
                        <div className="text-lg tracking-widest uppercase text-stone-400">
                            {category}
                        </div>
                        <h3 className="mt-1 text-3xl font-bold text-neutral-800">
                            {title}
                        </h3>
                    </div>
                </div>
                <p className="mt-3.5 w-full text-base rounded-none text-neutral-800">
                    {description}
                </p>
            </div>
        </article>
    );
};
