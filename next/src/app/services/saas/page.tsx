import {Navigation} from "@components/navigation/Navigation";
import {CallToActionSection} from "@components/callToAction/CallToActionSection";
import {Footer} from "@components/footer";
import * as React from "react";
import {ServiceHeader} from "@components/service-proposal/ServiceHeader";
import {ServiceProposal} from "@components/service-proposal/ServiceProposal";
import iotHeader from "@images/services/iot-head.svg";
import {saasData} from "@app/services/saas/data";
import {GetInTouchSection} from "@components/getInTouch";
import {servicesData} from "@app/services/iot/data";

export default function ServicesPage() {
    return (
        <>
            <Navigation/>
            <ServiceHeader
                title="Software Development"
                subtitle="services"
                image={iotHeader}
                imageAlt="SAAS Illustration"
                ariaLabel="SAAS Overview"
            />
            <GetInTouchSection additionalClass={"green50"} subtitle={servicesData.subtitle}>
                {servicesData.title}
            </GetInTouchSection>
            <ServiceProposal servicesData={saasData}/>
            <CallToActionSection/>
            <Footer/>
        </>
    )
}

