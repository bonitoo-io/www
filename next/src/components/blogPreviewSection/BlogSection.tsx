import * as React from "react";
import {BlogCard} from "./BlogCard";
import {BlogSectionProps} from "./types";

export const BlogSection: React.FC<BlogSectionProps> = ({blogPosts}) => {
    const featuredPost = blogPosts[0];

    return (
        <main
            className="green50 flex flex-col justify-center items-center px-16 py-32 w-full max-md:px-5 max-md:py-24 max-md:max-w-full"
            role="main"
        >
            <section
                className="-mb-6 w-full max-w-[1150px] max-md:mb-2.5 max-md:max-w-full"
                aria-labelledby="blog-section-title"
            >
                <div className="flex gap-5 max-md:flex-col">
                    <section className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
                        <div
                            className="flex flex-col items-start self-stretch my-auto w-full text-base text-neutral-800 max-md:mt-10 max-md:max-w-full">
                            <h1
                                id="blog-section-title"
                                className="c-fg-green-500 font-normal text-lg tracking-widest uppercase"
                            >
                                resources
                            </h1>
                            <h2 className="mt-4 text-5xl font-bold max-md:text-4xl">
                                Blog & Updates
                            </h2>
                            <p className="self-stretch mt-4 max-md:max-w-full">
                                As a demonstration of a more complex IoT service, we&#39;ve
                                developed a device that combines internal sensors, data from
                                time-series database and internet services.
                            </p>
                            <button
                                className="green500 c-border-green-200 gap-2.5 self-stretch px-6 py-3.5 mt-12 font-bold text-white rounded-xl border border-solid max-md:px-5 max-md:mt-10 hover:bg-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                                aria-label="Read our blog"
                                onClick={() => {
                                }}
                            >
                                Read our blog
                            </button>
                        </div>
                    </section>
                    <section
                        className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full"
                        aria-label="Featured blog post"
                    >
                        <BlogCard {...featuredPost} />
                    </section>
                </div>
            </section>
        </main>
    );
};
