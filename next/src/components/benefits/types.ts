import {StaticImageData} from "next/image";

export interface BenefitItemProps {
    icon: StaticImageData;
    title: string;
    description: string;
    id: string;
}

export interface BenefitSectionProps {
    benefits?: BenefitItemProps[];
    sectionTitle?: string;
    sectionSubtitle?: string;
}
