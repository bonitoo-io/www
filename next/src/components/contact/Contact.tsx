import * as React from "react";
import { ContactEmail } from "./ContactEmail";
import { SocialLinks } from "@components/footer/SocialLinks";

export const Contact: React.FC = () => {
  return (
    <main className="flex flex-col justify-center items-center px-20 py-28 w-full bg-neutral-800 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <section
        className="flex flex-col items-center -mb-6 max-w-full w-[845px] max-md:mb-2.5"
        aria-labelledby="contact-heading"
      >
        <h2
          id="contact-heading"
          className="text-lg tracking-widest text-center uppercase text-stone-400"
        >
          contact
        </h2>
        <h1 className="self-stretch mt-4 text-7xl font-bold text-center text-white leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Let&#39;s bring your product to the market
        </h1>

        <ContactEmail email="info@bonitoo.io" />
        <div className="pt-8">
          <SocialLinks />
        </div>
      </section>
    </main>
  );
};
