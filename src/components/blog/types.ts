export interface BlogCardProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface BlogFilterProps {
  label: string;
  isActive?: boolean;
}
