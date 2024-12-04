"use client";
import {Navigation} from "@components/navigation/Navigation";
import * as React from "react";
import {Footer} from "@components/footer";
import {CallToActionSection} from "@components/callToAction/CallToActionSection";
import {TestimonialSection} from "@components/testimonials/TestimonialSection";
import {Contact} from "@components/contact/Contact";
import {GetInTouchSection} from "@components/getInTouch";
import {LocationsSection} from "@components/locations/LocationsSection";

export default function ContactsPage() {
    return (
        <>
            <Navigation selected={'contacts'}/>
            <Contact/>
            <GetInTouchSection>
                Challenges are just opportunities in disguise. Take the challenge!
            </GetInTouchSection>
            <LocationsSection/>
            <TestimonialSection/>
            <CallToActionSection/>
            <Footer/>
        </>
    )
}

