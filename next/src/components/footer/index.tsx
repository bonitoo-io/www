import Image from "next/image";
import * as React from 'react';
import {SocialLink} from "@components/footer/SocialLink";
import bonitooImage from "@images/logos/bonitoo.svg";
import {SocialLinks} from "./SocialLinks";


export function Footer() {
    return (
        <main className="flex overflow-hidden flex-col bg-white">
            <footer
                className="flex flex-col items-center px-16 pt-32 pb-64 w-full bg-neutral-800 max-md:px-5 max-md:py-24 max-md:max-w-full">
                <div
                    className="flex flex-wrap justify-between mb-0 w-full max-w-[1148px] max-md:mb-2.5 max-md:max-w-full">
                    <div
                        className="flex flex-col flex-1 shrink self-start text-sm basis-0 min-w-[240px] text-neutral-400 max-md:max-w-full">
                        <Image
                            loading="lazy"
                            src={bonitooImage}
                            alt="Company Logo"
                            className="object-contain max-w-full aspect-[4.37] w-[140px]"
                        />
                        <address className="flex flex-col mt-8 w-full not-italic max-md:max-w-full">
                            <p>Na Harfě 916/9a, Praha 9, 190 00 CZ</p>
                            <a href="mailto:info@bonitoo.io" className="text-white mt-1.5">info@bonitoo.io</a>
                        </address>
                    </div>
                    <SocialLinks/>
                </div>
            </footer>
        </main>
    );
}
