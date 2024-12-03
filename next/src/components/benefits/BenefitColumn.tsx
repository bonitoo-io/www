import * as React from "react";
import {BenefitItem} from "./BenefitItem";
import {BenefitItemProps} from "./types";

interface BenefitColumnProps {
    items: BenefitItemProps[];
}

export const BenefitColumn: React.FC<BenefitColumnProps> = ({items}) => {
    return (
        <div
            className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full"
            role="list"
        >
            {items.map((item, index) => (
                <div key={item.id} className={index > 0 ? "mt-10" : ""} role="listitem">
                    <BenefitItem {...item} />
                </div>
            ))}
        </div>
    );
};
