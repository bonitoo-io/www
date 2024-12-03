import {StaticImageData} from "next/image";

export interface ImageGridItemProps {
    src: StaticImageData;
    alt: string;
    className: string;
}

export interface ImageGridRowProps {
    images: ImageGridItemProps[];
}
