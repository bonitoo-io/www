import * as React from "react";
import { SectionHeader } from "./SectionHeader";

export const ServicesHeaderSection: React.FC = () => {
  const titleId = "services-title";

  return (
    <section
      className="flex flex-col justify-center items-center px-20 py-28 w-full text-center bg-neutral-800 max-md:px-5 max-md:pb-24 max-md:max-w-full"
      aria-labelledby={titleId}
      role="region"
    >
      <SectionHeader
        subtitle="what we do"
        title="Our services"
        titleId={titleId}
      />
    </section>
  );
};
