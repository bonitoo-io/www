import * as React from "react";
import {TestimonialCarousel} from "./TestimonialCarousel";
import {TestimonialProps} from "./types";
import drabek from "@images/testimonials/drabek.png";

export function TestimonialSection() {
    const testimonials: TestimonialProps[] = [
        {
            quote:
                "Bonitoo.io demonstrated their professionalism several times. With a very limited support from the previous dev team they analyzed code, deployed the whole ecosystem, proposed improvements and started development.",
            author: {
                name: "Ivo Drábek",
                title: "Manager of Business Development & Energetics",
                company: "BUILDSYS a.s.",
                image: drabek,
                imageAlt: "Portrait of Ivo Drábek",
            }
        },
        /*    {
          quote:
            "Working with the team has been an absolute pleasure. Their technical expertise and attention to detail have significantly improved our development process.",
          author: {
            name: "Jana Novotná",
            title: "Technical Director",
            company: "TechSolutions s.r.o.",
            imageUrl: "http://b.io/ext_3-",
            imageAlt: "Portrait of Jana Novotná",
          },
          companyLogo: {
            src: "http://b.io/ext_4-",
            alt: "TechSolutions company logo",
          },
        },*/
    ];

    return <TestimonialCarousel testimonials={testimonials}/>;
}
