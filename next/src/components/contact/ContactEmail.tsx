import * as React from "react";
import {ContactEmailProps} from "./types";

export const ContactEmail: React.FC<ContactEmailProps> = ({email}) => (
    <div
        className="gap-2.5 self-stretch px-20 py-8 mt-16 text-5xl font-bold text-center text-white whitespace-nowrap rounded-3xl border border-solid bg-neutral-700 border-neutral-600 max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl"
        tabIndex={0}
        role="button"
        onClick={() => (window.location.href = `mailto:${email}`)}
        onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
                window.location.href = `mailto:${email}`;
            }
        }}
    >
        {email}
    </div>
);
