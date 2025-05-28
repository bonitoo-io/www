import Image from "next/image";
import * as React from "react";
import { NavigationLink } from "./NavigationLink";
import { navigationItems } from "../../data/navigation";

import bonitooImage from "@images/logos/bonitoo.svg";
import Link from "next/link";

export function Navigation({ selected }: { selected?: string }) {
  return (
    <header className={`flex flex-wrap gap-5 justify-between px-16 py-10 w-full text-base tracking-widest text-white uppercase bg-neutral-800 max-md:px-5 max-md:max-w-full`}>
      <Link scroll={true} href="/">
        <Image
          loading="lazy"
          src={bonitooImage}
          className="object-contain shrink-0 max-w-full aspect-[4.37] w-[175px]"
          alt="Company Logo"
        />
      </Link>
      <nav
        className="flex flex-wrap gap-8 my-auto max-md:max-w-full"
        role="navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => (
          <NavigationLink
            key={item.id}
            href={item.href}
            label={item.label}
            mobile={item.mobile}
            selected={item.id === selected}
            hasDropdown={item.hasDropdown}
          />
        ))}
      </nav>
    </header>
  );
}
