import { StaticImageData } from "next/image";

export interface ServiceCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface ServiceSectionProps {
  image: StaticImageData;
  services: ServiceCardProps[];
  imagePosition?: "left" | "right";
}

export interface ServiceProposalProps {
  servicesData: {
    firstSection: ServiceSectionProps;
    secondSection: ServiceSectionProps;
  };
}

export interface ServiceHeaderProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
  imageAlt: string;
  ariaLabel?: string;
}
