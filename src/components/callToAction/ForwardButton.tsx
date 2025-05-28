import * as React from "react";
import { ForwardButtonProps } from "./types";
import Image from "next/image";
import forwardImage from "@images/icons/forward.svg";

export const ForwardButton: React.FC<ForwardButtonProps> = ({
  title,
  onButtonClick,
}) => (
  <button
    onClick={onButtonClick}
    className="flex gap-2.5 justify-center items-center px-6 py-3.5 mt-10 text-base whitespace-nowrap rounded-xl border border-solid bg-neutral-800 border-neutral-700 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 transition-colors max-md:px-5"
    aria-label={`Send email to ${title}`}
    role="link"
    tabIndex={0}
  >
    <span className="self-stretch my-auto">{title}</span>
    <Image
      loading="lazy"
      src={forwardImage}
      alt="Contact us"
      aria-hidden="true"
      className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
    />
  </button>
);
