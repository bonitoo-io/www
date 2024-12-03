import {StaticImageData} from "next/image";

export interface CaseStudyCardProps {
    category: string;
    title: string;
    description: string;
    imageSrc: StaticImageData;
    isLarge?: boolean;
}

export interface CaseStudiesProps {
    heading: string;
    subheading: string;
    studies: CaseStudyCardProps[];
}
