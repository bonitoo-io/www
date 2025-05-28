import * as React from "react";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { ImageRowProps } from "./types";

export const ImageRow: React.FC<ImageRowProps> = ({
  images,
  className = "",
}) => (
  <div className={`flex gap-5 h-full max-md:flex-col ${className}`} role="list">
    {images.map((image) => (
      <div key={image.id} role="listitem" className="flex min-h-0">
        <ImageGalleryItem image={image} />
      </div>
    ))}
  </div>
);
