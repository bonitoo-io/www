import facebook from "@images/social/facebook.svg";
import twitter from "@images/social/twitter.svg";
import linkedin from "@images/social/linkedin.svg";
import youtube from "@images/social/youtube.svg";
import instagram from "@images/social/instagram.svg";
import Image from "next/image";
import bonitooImage from "@images/logos/bonitoo.svg";
import { SocialLink } from "@components/footer/SocialLink";
import * as React from "react";

const socialLinks = [
  {
    icon: facebook,
    href: "#",
    label: "Visit us on Facebook",
  },
  {
    icon: twitter,
    href: "#",
    label: "Follow us on Twitter",
  },
  {
    icon: linkedin,
    href: "#",
    label: "Connect on LinkedIn",
  },
  {
    icon: instagram,
    href: "#",
    label: "Follow us on Instagram",
  },
  {
    icon: youtube,
    href: "#",
    label: "Subscribe to our YouTube",
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-col justify-between w-72 min-w-[240px] mt-5">
      <nav
        className="flex gap-3 items-center self-end"
        aria-label="Social Media Links"
      >
        {socialLinks.map((link, index) => (
          <SocialLink key={index} {...link} />
        ))}
      </nav>
      <p className="mt-10 w-full text-sm text-neutral-400">
        © 2024 Bonitoo.io. All Rights Reserved.
      </p>
    </div>
  );
}
