import { StaticImageData } from "next/image";

export interface BlogCardProps {
  date: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
}

export interface BlogSectionProps {
  blogPosts: BlogCardProps[];
}
