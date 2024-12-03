import {Navigation} from "@components/navigation/Navigation";
import {ServicesSection} from "@components/services/ServicesSection";
import {CallToActionSection} from "@components/callToAction/CallToActionSection";
import {Footer} from "@components/footer";
import * as React from "react";
import { ServicesHeaderSection } from "@components/sections/ServicesHeaderSection";

export default function ServicesPage() {
    return (
        <>
            <Navigation/>
            <ServicesHeaderSection/>
            <ServicesSection/>
            <CallToActionSection/>
            <Footer/>
        </>
    )
}

