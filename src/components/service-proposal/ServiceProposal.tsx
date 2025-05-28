import * as React from "react";
import { ServiceSection } from "./ServiceSection";
import { ServiceProposalProps } from "./types";

export const ServiceProposal: React.FC<ServiceProposalProps> = ({
  servicesData,
}) => {
  return (
    <main
      className="flex flex-col justify-center items-center px-20 py-32 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full"
      role="main"
      aria-label="IoT Services Proposal"
    >
      <div className="flex flex-col -mb-6 w-full max-w-[1151px] max-md:mb-2.5 max-md:max-w-full">
        <ServiceSection {...servicesData.firstSection} imagePosition="left" />
        <div className="mt-32 max-md:mt-10">
          <ServiceSection
            {...servicesData.secondSection}
            imagePosition="right"
          />
        </div>
      </div>
    </main>
  );
};
