import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import down from "@images/icons/down.svg";
import CompanyDropdown from "@components/navigation/companyDropdown";

interface NavigationLinkProps {
  href: string;
  label: string;
  mobile?: boolean;
  hasDropdown?: boolean;
  selected?: boolean;
}

export function NavigationLink({
  href,
  label,
  hasDropdown,
  mobile,
  selected,
}: NavigationLinkProps) {
  if (!hasDropdown) {
    return (
      <Link
        scroll={true}
        href={href}
        className={`flex gap-1 items-center whitespace-nowrap text-white no-underline ${mobile ? "":"max-lg:hidden"} ${
          selected
            ? "bg-primary-500 font-extrabold text-white"
            : "hover:underline"
        }`}
        role="menuitem"
      >
        <span className="self-stretch my-auto">{label}</span>
      </Link>
    );
  } else {
    return <CompanyDropdown selected={selected}/>;
  }
}
