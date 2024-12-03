import * as React from "react";
import {JobPosition} from "./types";

interface JobCardProps {
    position: JobPosition;
}

export function JobCard({position}: JobCardProps) {
    return (
        <div
            className="flex flex-wrap gap-6 items-center p-6 w-full bg-white rounded-3xl border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[270px]">
                <h3 className="text-2xl font-bold leading-none">{position.title}</h3>
                <div className="mt-2 text-base">
                    {position.type} / {position.location}
                </div>
            </div>
            <div className="grow shrink self-stretch my-auto text-base min-w-[240px] w-[529px] max-md:max-w-full">
                {position.description}
            </div>
            <div
                className="flex flex-col grow shrink self-stretch my-auto text-base font-bold text-white whitespace-nowrap rounded-xl w-[137px]">
                <button
                    className="gap-2.5 self-stretch px-6 py-3.5 rounded-xl border border-solid bg-neutral-700 border-neutral-600 max-md:px-5"
                    aria-label={`Apply for ${position.title} position`}
                >
                    Apply
                </button>
            </div>
        </div>
    );
}
