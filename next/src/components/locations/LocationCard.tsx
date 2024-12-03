import * as React from "react";
import {LocationData} from "./types";
import Image from "next/image";

interface LocationCardProps {
    location: LocationData;
}

export function LocationCard({location}: LocationCardProps) {
    return (
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10">
                <div className="green500 flex gap-2 justify-center items-center px-4 w-16 h-16 rounded-xl">
                    <Image
                        loading="lazy"
                        src={location.icon}
                        alt={`${location.city} office icon`}
                        className="object-contain self-stretch my-auto w-8 aspect-square"
                    />
                </div>
                <div className="flex flex-col mt-7 w-full text-neutral-800">
                    <h2 className="text-lg font-bold">{location.city}</h2>
                    <address className="mt-4 text-base not-italic">
                        {location.address.map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br/>
                            </React.Fragment>
                        ))}
                        <a
                            href={`mailto:${location.email}`}
                            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-400"
                        >
                            {location.email}
                        </a>
                    </address>
                </div>
            </div>
        </div>
    );
}
