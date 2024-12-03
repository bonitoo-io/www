import * as React from "react";
import {CaseStudyCard} from "./CaseStudyCard";
import {CaseStudyProps} from "./types";

import tracking from "@images/case-studies/tracking.png";
import influx from "@images/case-studies/influx.png";
import weather from "@images/case-studies/weather.png";
import {caseStudies} from "@components/standOutCaseStudies/data";

export const CaseStudies: React.FC = () => {
    const handleCardClick = (index: number) => {
        console.log(`Case study ${index} clicked`);
    };

    const handleViewAllClick = () => {
        console.log("View all case studies clicked");
    };

    return (
        <section
            className="flex flex-col justify-center items-center px-20 py-32 w-full bg-neutral-800 max-md:px-5 max-md:py-24 max-md:max-w-full"
            role="region"
            aria-label="Case Studies"
        >
            <div className="flex flex-col -mb-6 w-full max-w-[1150px] max-md:mb-2.5 max-md:max-w-full">
                <header>
                    <h3 className="c-fg-green-500 self-start text-lg tracking-widest uppercase">
                        case studies
                    </h3>
                    <div
                        className="flex flex-wrap justify-between items-center mt-4 w-full font-bold text-white max-md:max-w-full">
                        <h1 className="flex-1 shrink self-stretch my-auto text-5xl basis-12 max-md:max-w-full max-md:text-4xl">
                            Projects that make us stand out
                        </h1>
                        <button
                            className="green500 c-border-green-200 gap-2.5 self-stretch px-6 py-3.5 my-auto text-base rounded-xl border border-solid max-md:px-5 hover:bg-stone-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={handleViewAllClick}
                            aria-label="View all case studies"
                        >
                            All Case Studies
                        </button>
                    </div>
                </header>
                <main className="mt-12 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        {caseStudies.map((study, index) => (
                            <CaseStudyCard
                                key={index}
                                {...study}
                                onCardClick={() => handleCardClick(index)}
                                tabIndex={index + 1}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
};
