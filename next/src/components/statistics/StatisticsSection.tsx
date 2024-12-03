import * as React from "react";
import {StatisticCard, StatisticCardProps} from "./StatisticCard";
import {statisticsData} from "@components/statistics/data";

export function StatisticsSection() {
    return (
        <section
            aria-label="Company Statistics"
            className="green50 flex flex-col justify-center items-center px-16 py-32 w-full max-md:px-5 max-md:py-24 max-md:max-w-full"
        >
            <div
                className="flex flex-wrap gap-5 justify-between -mb-6 w-full max-w-[1110px] max-md:mb-2.5 max-md:max-w-full">
                {statisticsData.map((stat, index) => (
                    <StatisticCard key={index} number={stat.number} label={stat.label}/>
                ))}
            </div>
        </section>
    );
}
