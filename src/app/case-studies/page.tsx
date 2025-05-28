"use client";

import * as React from "react";

import { Navigation } from "@components/navigation/Navigation";
import { Footer } from "@components/footer";
import { CallToActionSection } from "@components/callToAction/CallToActionSection";
import { CaseStudies } from "@components/caseStudies/CaseStudies";

export default function IndexPage() {
  return (
    <>
      <Navigation selected={"case-studies"} />
      <CaseStudies />
      <CallToActionSection />
      <Footer />
    </>
  );
}
