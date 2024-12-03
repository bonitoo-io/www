import * as React from "react";
import {ServiceCardProps} from "./types";
import Link from "next/link";

export const ServiceCard: React.FC<ServiceCardProps> = ({
                                                            title,
                                                            description,
                                                            image,
                                                            minHeight,
                                                            imageHeight,
                                                            imageWidth,
                                                            imageTop,
                                                            path,
                                                        }) => {
    return (
        <Link href={path} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full no-underline">
            <div
                className="flex relative flex-col grow px-8 pt-24 pb-8 w-full bg-white rounded-3xl border border-solid border-stone-300 text-neutral-800 max-md:px-5 max-md:mt-6"
                style={{minHeight}}
            >
                <div className="flex z-0 flex-1 w-full min-h-[231px]"/>
                <div className="flex z-0 flex-col w-full">
                    <h3 className="text-3xl font-bold leading-8">{title}</h3>
                    <p className="mt-2 text-base">{description}</p>
                </div>
                <div
                    className="flex absolute left-px z-0 max-w-full"
                    style={{
                        height: imageHeight,
                        minHeight: imageHeight,
                        width: imageWidth,
                        top: imageTop,
                        backgroundImage: `url(${image.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'right'
                    }}
                />
            </div>
        </Link>
    );
};
