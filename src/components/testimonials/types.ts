import { StaticImageData } from "next/image";
import { EmblaOptionsType } from "embla-carousel";

export interface TestimonialAuthorProps {
  name: string;
  title: string;
  company: string;
  image: StaticImageData;
  imageAlt: string;
}

export interface TestimonialProps {
  quote: string;
  author: TestimonialAuthorProps;
}

export interface TestimonialCarouselProps {
  testimonials: TestimonialProps[];
  options?: EmblaOptionsType;
}
