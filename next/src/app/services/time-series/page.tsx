import { Navigation } from "@components/navigation/Navigation";
import { CallToActionSection } from "@components/callToAction/CallToActionSection";
import { Footer } from "@components/footer";
import * as React from "react";
import { ServiceHeader } from "@components/service-proposal/ServiceHeader";
import { ServiceProposal } from "@components/service-proposal/ServiceProposal";
import iotHeader from "@images/services/iot-head.svg";
import { timeSeriesData } from "@app/services/time-series/data";
import { GetInTouchSection } from "@components/getInTouch";

export default function ServicesPage() {
  return (
    <>
      <Navigation selected={"services"} />
      <ServiceHeader
        title="IoT Development"
        subtitle="services"
        image={iotHeader}
        imageAlt="IoT Development Services Illustration"
        ariaLabel="IoT Development Services Overview"
      />
      <GetInTouchSection
        additionalClass={"green50"}
        subtitle={timeSeriesData.subtitle}
      >
        {timeSeriesData.title}
      </GetInTouchSection>
      <ServiceProposal servicesData={timeSeriesData} />
      <CallToActionSection />
      <Footer />
    </>
  );
}
