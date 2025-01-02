import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";
import Link from "next/link";
import down from "@images/icons/down.svg";
import Image from "next/image";

export default function CompanyDropdown() {
  const linkStyle =
    "block px-4 py-2 text-sm text-white data-[focus]:bg-gray-700 data-[focus]:outline-none no-underline data-[focus]:underline";
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex gap-1 items-center whitespace-nowrap text-white no-underline bg-transparent p-0 border-0">
          COMPANY
          <Image
            loading="lazy"
            src={down}
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            alt="Pointer"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute border-solid border-2 c-b-green-500 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-neutral-800 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link href="/company" className={linkStyle}>
              About Bonitoo
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/career" className={linkStyle}>
              Careers
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
