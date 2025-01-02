import * as React from "react";
import { TestimonialAuthorProps } from "./types";
import Image from "next/image";

export function TestimonialAuthor({
  name,
  title,
  company,
  image,
  imageAlt,
}: TestimonialAuthorProps) {
  return (
    <div className="flex gap-4 my-auto">
      <Image
        loading="lazy"
        src={image}
        alt={imageAlt}
        height={64}
        width={64}
        className="object-contain shrink-0 h-16 rounded-xl self-center"
      />
      <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit">
        <h3 className="text-base font-bold text-neutral-800">{name}</h3>
        <p className="self-stretch mt-1 text-neutral-400">{title}</p>
        <p className="mt-1 text-neutral-400">{company}</p>
      </div>
    </div>
  );
}
