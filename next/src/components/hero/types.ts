import { StaticImageData } from "next/image";
import React from "react";

export interface HeroTextProps {
  children: React.ReactNode;
  textSize?: string;
  subtitle: string;
  title: string;
}

export interface ActionButtonProps {
  label: string;
  target: string;
  variant: "primary" | "secondary";
}

export interface LogoProps {
  src: StaticImageData;
  alt: string;
  width: number;
}

export interface HeroProps {
  children: React.ReactNode;
  textSize?: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
  imageWidth: string;
}

export interface LogoSectionProps {
  logos: LogoProps[];
}
