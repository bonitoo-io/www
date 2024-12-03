import {StaticImageData} from "next/image";

export interface TeamMemberProps {
    image: StaticImageData;
    name: string;
    role: string;
    imageAspect?: string;
}

export interface TeamSectionProps {
    title: string;
    subtitle: string;
    members: TeamMemberProps[];
}
