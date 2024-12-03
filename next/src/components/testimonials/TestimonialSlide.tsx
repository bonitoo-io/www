import * as React from "react";
import {TestimonialAuthor} from "./TestimonialAuthor";
import {TestimonialProps} from "./types";

export function TestimonialSlide({
                                     quote,
                                     author,
                                 }: TestimonialProps) {
    return (
        <article className="flex-shrink-0 w-full">
            <div className="flex flex-col w-full max-w-[1150px] mx-auto max-md:mb-2.5 max-md:max-w-full">
                <blockquote className="mt-6 text-3xl font-bold text-neutral-800 max-md:max-w-full">
                    {quote}
                </blockquote>
                <div className="flex flex-wrap gap-5 justify-between mt-10 w-full text-sm max-md:max-w-full">
                    <TestimonialAuthor {...author} />
                    {/*<img*/}
                    {/*  loading="lazy"*/}
                    {/*  className="object-contain shrink-0 w-36 max-w-full rounded-xl aspect-[2.12]"*/}
                    {/*/>*/}
                </div>
            </div>
        </article>
    );
}
