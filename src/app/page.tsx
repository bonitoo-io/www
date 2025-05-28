"use client";

import { Navigation } from "@components/navigation/Navigation";
import { Hero } from "@components/hero/Hero";
import * as React from "react";
import { ServicesSection } from "@components/services/ServicesSection";
import { Footer } from "@components/footer";
import { CallToActionSection } from "@components/callToAction/CallToActionSection";
import { TestimonialSection } from "@components/testimonials/TestimonialSection";

import heroImage from "@images/homepage/hero.png";
import { ActionButton } from "@components/hero/ActionButton";
import { CaseStudies } from "@components/standOutCaseStudies/CaseStudies";
import { GetInTouchSection } from "@components/getInTouch";

export default function IndexPage() {
  return (
    <>
      <Navigation selected={"home"} />
      <Hero
        subtitle="Custom software development"
        title="We know how to do IT right"
        textSize="7xl"
        textSizeMobile="4xl"
        image={heroImage}
        imageWidth={"60%"}
      >
        <ActionButton
          label="Case Studies"
          variant="primary"
          target="/case-studies"
        />
        <ActionButton
          label="Our Services"
          variant="secondary"
          target="/services"
        />
      </Hero>
      <ServicesSection />
      <GetInTouchSection subtitle={"Let’s talk"}>
        Challenges are just opportunities in disguise. Take the challenge!
      </GetInTouchSection>
      <CaseStudies />
      <TestimonialSection />
      {/*<Blog/>*/}
      <CallToActionSection />
      <Footer />
    </>

    // <Suspense>
    //   <Authenticated key="home-page">
    //       <NavigateToResource />
    //   </Authenticated>
    // </Suspense>
  );
}
