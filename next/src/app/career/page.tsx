"use client";

import * as React from "react";
import heroImage from "@images/career/hero.png";

import { Navigation } from "@components/navigation/Navigation";
import { Hero } from "@components/hero/Hero";
import { Footer } from "@components/footer";
import { CallToActionSection } from "@components/callToAction/CallToActionSection";
import { ActionButton } from "@components/hero/ActionButton";
import { GetInTouchSection } from "@components/getInTouch";
import Benefits from "@components/benefits/Benefits";
import { benefitsData } from "@components/benefits/data";
import { OpenPositions } from "@components/careers/OpenPositions";
import { Gallery } from "@components/gallery";
import { TEAM_GALLERY_IMAGES } from "@components/gallery";

export default function IndexPage() {
  return (
    <>
      <Navigation selected={"company"} />
      <Hero
        textSize={"5xl"}
        title="Become a part of our big family to inspire  and get inspired by professional experts."
        subtitle="career"
        image={heroImage}
        imageWidth={"50%"}
      >
        <ActionButton
          label="Open positions"
          variant="primary"
          target="#open-positions"
        />
        <ActionButton
          label="Our benefits"
          variant="secondary"
          target="#benefits"
        />
      </Hero>
      <OpenPositions />
      <Gallery
        title="Pay us a visit & have some coffee!"
        subtitle="Our team"
        images={TEAM_GALLERY_IMAGES}
      />
      <Benefits benefits={benefitsData} />
      <CallToActionSection
        title="let’s talk"
        subtitle="Didn’t find a suitable position? Send us your CV"
      />
      <Footer />
    </>
  );
}
