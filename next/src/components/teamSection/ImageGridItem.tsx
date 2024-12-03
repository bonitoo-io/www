import * as React from "react";
import {ImageGridItemProps} from "./types";
import Image from "next/image";

export const ImageGridItem: React.FC<ImageGridItemProps> = ({
                                                                src,
                                                                alt,
                                                                className,
                                                            }) => (
    <Image
        loading="lazy"
        src={src}
        alt={alt}
        className={`object-contain w-full rounded-3xl ${className}`}
    />
);
