import {StaticImageData} from "next/image";

export interface GalleryImage {
    id: string;
    src: StaticImageData;
    alt: string;
    width: number;
    aspectRatio: number;
}

export interface ImageGalleryItemProps {
    image: GalleryImage;
}

export interface ImageRowProps {
    images: GalleryImage[];
    className?: string;
}

export interface GalleryProps {
    title: string;
    subtitle: string;
    images: GalleryImage[];
}
