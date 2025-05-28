import { StaticImageData } from "next/image";

export interface CaseStudyProps {
  category: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
}

export interface CaseStudyCardProps extends CaseStudyProps {
  onCardClick: () => void;
  tabIndex?: number;
}
