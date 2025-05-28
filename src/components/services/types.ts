import { StaticImageData } from "next/image";

export interface ServiceCardProps {
  path: string;
  title: string;
  description: string;
  image: StaticImageData;
  minHeight?: string;
  imageHeight?: string;
  imageWidth?: string;
  imageTop?: string;
}

export interface ServicesData {
  path: string;
  title: string;
  description: string;
  image: StaticImageData;
  minHeight: string;
  imageHeight: string;
  imageWidth: string;
  imageTop: string;
}
