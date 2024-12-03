import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import down from "@images/icons/down.svg"

interface NavigationLinkProps {
    href: string;
    label: string;
    hasDropdown?: boolean;
}

export function NavigationLink({
                                   href,
                                   label,
                                   hasDropdown,
                               }: NavigationLinkProps) {
    return (
        <Link scroll={true}
              href={href}
              className="flex gap-1 items-center whitespace-nowrap text-white no-underline"
              role="menuitem"
        >
            <span className="self-stretch my-auto">{label}</span>
            {hasDropdown && (
                <Image
                    loading="lazy"
                    src={down}
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                    alt="Pointer"
                />
            )}
        </Link>
    );
}
