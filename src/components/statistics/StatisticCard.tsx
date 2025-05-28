import * as React from "react";

export interface StatisticCardProps {
  number: string;
  label: string;
}

export function StatisticCard({ number, label }: StatisticCardProps) {
  return (
    <div
      className="flex flex-col"
      role="group"
      aria-label={`${label}: ${number}`}
    >
      <div className="self-start text-7xl font-bold text-neutral-800 max-md:text-4xl">
        {number}
      </div>
      <div className="c-fg-green-500 text-lg tracking-widest uppercase max-md:text-xl">
        {label}
      </div>
    </div>
  );
}
