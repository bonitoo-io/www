"use client";

import * as React from "react";
import heroImage from "@images/case-studies/hero.png";

import { Navigation } from "@components/navigation/Navigation";
import { Hero } from "@components/hero/Hero";
import { Footer } from "@components/footer";
import { CallToActionSection } from "@components/callToAction/CallToActionSection";
import { ActionButton } from "@components/hero/ActionButton";
import { GetInTouchSection } from "@components/getInTouch";
import { StatisticsSection } from "@components/statistics/StatisticsSection";
import { LeadershipSection } from "@components/leadership/LeadershipSection";
import { HistoryTimeline } from "@components/history/HistoryTimeline";

export default function IndexPage() {
  return (
    <>
      <Navigation selected={"company"} />
      <Hero
        textSize={"5xl"}
        textSizeMobile={"4xl"}
        title="A strong team of professionals delivering successful software projects around the world"
        subtitle="about bonitoo"
        image={heroImage}
        imageWidth={"60%"}
      >
        <ActionButton label="Contact us" variant="primary" target="/contacts" />
        <ActionButton label="Our team" variant="secondary" target="#ourTeam" />
      </Hero>
      <StatisticsSection />
      <LeadershipSection />
      <HistoryTimeline />
      <GetInTouchSection>
        We create dreams for the future.
        <br />
        We realize them successfully.
      </GetInTouchSection>
      <CallToActionSection />
      <Footer />
    </>
  );
}
