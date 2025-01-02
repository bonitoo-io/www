"use client";

import * as React from "react";
import { CallToAction } from "./CallToAction";
import graphImage from "@images/drawings/graph.svg";

const EMAIL = "info@bonitoo.io";
const handleEmailClick = () => {
  window.location.href = `mailto:${EMAIL}`;
};

interface CallToActionSectionProps {
  title?: string;
  subtitle?: string;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title,
  subtitle,
}) => {
  return (
    <CallToAction
      title={title || "let's talk"}
      subtitle={subtitle || "Let's start with a free project analysis & quote!"}
      email={EMAIL}
      imageSrc={graphImage}
      onButtonClick={handleEmailClick}
    />
  );
};
