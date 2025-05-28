import * as React from "react";
import { BlogFilterProps } from "./types";

export const BlogFilter: React.FC<BlogFilterProps> = ({ label, isActive }) => {
  return (
    <button
      className={`${
        isActive ? "font-bold text-stone-400" : ""
      } hover:text-stone-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-400`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </button>
  );
};
