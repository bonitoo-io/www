"use client";

import * as React from "react";

import { Navigation } from "@components/navigation/Navigation";
import { Footer } from "@components/footer";
import { CallToActionSection } from "@components/callToAction/CallToActionSection";
import { BlogSection } from "@components/blog/BlogSection";

export default function IndexPage() {
  return (
    <>
      <Navigation selected={"blog"} />
      <BlogSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}
