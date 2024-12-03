import {StaticImageData} from "next/image";

export interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    isReversed?: boolean;
    backgroundColor?: string;
}

export interface TimelineData {
    items: TimelineItemProps[];
}
