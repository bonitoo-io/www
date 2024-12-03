import * as React from "react";
import {ImageGalleryItemProps} from "./types";
import Image from "next/image";

export const ImageGalleryItem: React.FC<ImageGalleryItemProps> = ({
                                                                      image,
                                                                  }) => {
    const {src, alt, width, aspectRatio} = image;

    return (
        <div
            className={`flex-grow basis-${width} min-h-0 max-md:basis-full`}
            style={{aspectRatio: String(aspectRatio)}}
        >
            <Image
                loading="lazy"
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-3xl"
            />
        </div>
    );
};
