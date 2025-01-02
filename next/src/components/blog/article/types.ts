import { StaticImageData } from "next/image";

export interface BlogPostMetadata {
  author: string;
  date: string;
  category: string;
}

export interface RelatedPostProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface AuthorCardProps {
  name: string;
  description: string;
  imageUrl: StaticImageData;
}

export interface ShareButtonProps {
  iconUrl: StaticImageData;
  label?: string;
  onClick?: () => void;
}

export interface ArticleHeaderProps {
  metadata: BlogPostMetadata;
  onShare?: () => void;
}
