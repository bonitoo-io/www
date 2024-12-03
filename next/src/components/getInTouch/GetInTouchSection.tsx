import * as React from "react";

interface GetInTouchSectionProps {
    subtitle?: string;
    additionalClass?: string;
    children: React.ReactNode;
}

export const GetInTouchSection: React.FC<GetInTouchSectionProps> = ({
                                                                        subtitle = "get in touch",
                                                                        additionalClass = '',
                                                                        children,
                                                                    }) => {
    return (
        <section
            className={`${additionalClass} x flex flex-col justify-center items-center px-16 py-32 w-full max-md:px-5 max-md:py-24 max-md:max-w-full`}
        >
            <div className="-mb-6 w-full max-w-[1150px] max-md:mb-2.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col flex-col">

                    <h2
                        id="get-in-touch-subtitle"
                        className="c-fg-green-500 self-start text-lg tracking-widest uppercase"
                    >
                        {subtitle}
                    </h2>
                    <h1
                        id="get-in-touch-title"
                        className="mt-4 text-5xl font-bold leading-20 text-neutral-800 max-md:max-w-full max-md:text-4xl max-md:leading-10"
                    >
                        {children}
                    </h1>
                </div>
            </div>
        </section>
    );
};
