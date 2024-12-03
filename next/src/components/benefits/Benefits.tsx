import * as React from "react";
import {BenefitColumn} from "./BenefitColumn";
import {BenefitSectionProps} from "./types";
import {benefitsData} from "./data";

const Benefits: React.FC<BenefitSectionProps> = ({
                                                     benefits = benefitsData,
                                                     sectionTitle = "Our benefits",
                                                     sectionSubtitle = "discover",
                                                 }) => {
    const leftColumnBenefits = benefits.slice(0, 2);
    const rightColumnBenefits = benefits.slice(2, 4);

    return (
        <section
            className="flex flex-col justify-center items-center px-20 py-32 w-full bg-stone-100 max-md:px-5 max-md:py-24 max-md:max-w-full"
            aria-labelledby="benefits-title"
        >
            <div className="flex flex-col items-start -mb-6 w-full max-w-[1150px] max-md:mb-2.5 max-md:max-w-full">
        <span
            className="c-fg-green-500 text-lg tracking-widest uppercase"
            aria-hidden="true"
        >
          {sectionSubtitle}
        </span>
                <h2
                    id="benefits-title"
                    className="mt-4 text-5xl font-bold leading-none text-neutral-800 max-md:text-4xl"
                >
                    {sectionTitle}
                </h2>
                <div
                    className="flex flex-wrap gap-6 items-center self-stretch mt-14 max-md:mt-10"
                    role="presentation"
                >
                    <BenefitColumn items={leftColumnBenefits}/>
                    <BenefitColumn items={rightColumnBenefits}/>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
