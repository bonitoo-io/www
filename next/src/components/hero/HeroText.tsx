import * as React from "react";
import {HeroTextProps} from "./types";

export function HeroText({textSize, subtitle, title, children}: HeroTextProps): JSX.Element {
    return (
        <div className="flex flex-col self-stretch my-auto w-full font-bold text-white max-md:mt-10">
            <h2 className="c-fg-green-500 font-normal text-lg tracking-widest uppercase">
                {subtitle}
            </h2>
            <h1 className={`mt-4 text-${textSize} max-md:text-${textSize} max-md:leading-10`}>
                {title}
            </h1>
            <div className="flex gap-4 mt-12 max-w-full text-base w-[310px] max-md:mt-10">
                {children}
            </div>
        </div>
    );
}
