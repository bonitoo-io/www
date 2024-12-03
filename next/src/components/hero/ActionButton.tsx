import * as React from "react";
import {ActionButtonProps} from "./types";
import Link from "next/link";

export function ActionButton({
                                 label,
                                 target,
                                 variant,
                             }: ActionButtonProps): JSX.Element {
    const baseStyles =
        "gap-2.5 self-stretch px-6 py-3.5 rounded-xl border border-solid";
    const variantStyles =
        variant === "primary"
            ? "green500 c-border-green-200"
            : "bg-neutral-700 border-neutral-600";

    return (
        <Link scroll={true} href={target}>
            <button
                className={`${baseStyles} ${variantStyles} text-white`}
                type="button"
                aria-label={label}
            >
                {label}
            </button>
        </Link>
    );
}
