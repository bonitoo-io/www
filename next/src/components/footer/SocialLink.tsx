import * as React from "react";
import Image, {StaticImageData} from "next/image";

interface SocialLinkProps {
    icon: StaticImageData;
    href: string;
    label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
                                                          icon,
                                                          href,
                                                          label,
                                                      }) => {
    return (
        <a
            href={href}
            className="flex gap-2 justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 rounded-xl border border-solid bg-neutral-800 border-neutral-600 min-h-[48px]"
            aria-label={label}
        >
            <Image
                loading="lazy"
                src={icon}
                alt=""
                className="object-contain self-stretch my-auto w-5 aspect-square"
            />
        </a>
    );
};
