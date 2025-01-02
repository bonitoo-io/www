import * as React from "react";
import { ImageGridItem } from "./ImageGridItem";
import { ImageGridRowProps } from "./types";

export const ImageGridRow: React.FC<ImageGridRowProps> = ({ images }) => (
  <div className="flex gap-5 max-md:flex-col">
    {images.map((image, index) => (
      <div
        key={index}
        className={`flex flex-col ${index > 0 ? "ml-5" : ""} ${
          image.className.includes("w-") ? image.className : ""
        } max-md:ml-0 max-md:w-full`}
      >
        <ImageGridItem {...image} />
      </div>
    ))}
  </div>
);
