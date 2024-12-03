import * as React from "react";
import {CaseStudyCardProps} from "./types";
import Image from "next/image";

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
                                                                category,
                                                                title,
                                                                description,
                                                                image,
                                                                imageAlt,
                                                                onCardClick,
                                                                tabIndex,
                                                            }) => {
    return (
        <article
            className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            onClick={onCardClick}
            tabIndex={tabIndex ?? 0}
            role="article"
            aria-label={`Case study: ${title}`}
        >
            <div
                className="flex overflow-hidden flex-col grow justify-center w-full bg-neutral-800 rounded-3xl min-h-[626px] max-md:mt-6 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <Image
                    loading="lazy"
                    src={image}
                    alt={imageAlt}
                    className="object-contain flex-1 grow-0 w-full rounded-none aspect-[0.97]"
                />
                <div className="flex grow flex-col p-8 w-full bg-white max-md:px-5">
                    <header className="flex justify-between items-start w-full">
                        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
                            <h3 className="text-lg tracking-widest uppercase text-stone-400">
                                {category}
                            </h3>
                            <h2 className="mt-1 text-3xl font-bold text-neutral-800">
                                {title}
                            </h2>
                        </div>
                    </header>
                    <p className="mt-3.5 w-full text-base rounded-none text-neutral-800">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
};
