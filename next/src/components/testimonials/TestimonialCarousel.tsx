import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {TestimonialSlide} from "./TestimonialSlide";
import {TestimonialCarouselProps} from "./types";

export function TestimonialCarousel({
                                        testimonials,
                                        options = {loop: true, align: "center"},
                                    }: TestimonialCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    React.useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });

        const autoplay = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0);
            }
        }, 5000);

        return () => {
            clearInterval(autoplay);
        };
    }, [emblaApi]);

    return (
        <section
            className="relative flex flex-col justify-center items-center px-20 py-28 w-full bg-white max-md:px-5 max-md:py-24"
        >
            <article className="flex-shrink-0 w-full">
                <div className="flex flex-col -mb-6 w-full max-w-[1150px] mx-auto max-md:mb-2.5 max-md:max-w-full">

                    <h2 className="c-fg-green-500 flex-1 shrink self-stretch text-lg tracking-widest uppercase whitespace-nowrap max-md:max-w-full">
                        testimonials
                    </h2>
                </div>
                <br/>
            </article>

            <div
                className="overflow-hidden w-full"
                ref={emblaRef}
                role="region"
                aria-roledescription="carousel"
            >
                <div className="flex">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialSlide key={index} {...testimonial} />
                    ))}
                </div>
            </div>

        </section>
    );
}
