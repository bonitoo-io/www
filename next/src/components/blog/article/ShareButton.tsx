import * as React from "react";
import { ShareButtonProps } from "./types";

export const ShareButton: React.FC<ShareButtonProps> = ({
  iconUrl,
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-2.5 justify-center items-center self-start text-base whitespace-nowrap rounded-xl hover:opacity-80 focus:ring-2 focus:ring-stone-400 focus:outline-none transition-opacity"
      aria-label={label || "Share"}
    >
      <img
        loading="lazy"
        src={iconUrl}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        aria-hidden="true"
      />
      {label && <span className="self-stretch my-auto">{label}</span>}
    </button>
  );
};
