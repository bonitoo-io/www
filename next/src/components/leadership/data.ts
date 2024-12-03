import ivanKudibalImage from "@images/leadership/ivan-kudibal.png";
import slavikOplerImage from "@images/leadership/slavik-opler.png";
import robertMachacekImage from "@images/leadership/robert-machacek.png";
import vladimirDubskyImage from "@images/leadership/vladimir-dubsky.png";
import robertHajekImage from "@images/leadership/robert-hajek.png";
import mirekMalechaImage from "@images/leadership/mirek-malecha.png";
import gabrielaPohlovaImage from "@images/leadership/gabriela-pohlova.png";
import {TeamSectionProps} from "@components/leadership/types";

export const leadershipData: TeamSectionProps = {
    title: "Leadership",
    subtitle: "our team",
    members: [
        {
            image: ivanKudibalImage,
            name: "Ivan Kudibal",
            role: "Co-founder and CEO",
        },
        {
            image: slavikOplerImage,
            name: "Slávek Opler",
            role: "Co-founder and Lead Developer",
        },
        {
            image: robertMachacekImage,
            name: "Robert Macháček",
            role: "Co-founder",
        },
        {
            image: vladimirDubskyImage,
            name: "Vladimir Dubský",
            role: "CTO",
            imageAspect: "0.78",
        },
        {
            image: robertHajekImage,
            name: "Robert Hájek",
            role: "Engineering manager",
            imageAspect: "0.78",
        },
        {
            image: mirekMalechaImage,
            name: "Mirek Malecha",
            role: "Product Manager",
            imageAspect: "0.78",
        },
        {
            image: gabrielaPohlovaImage,
            name: "Gabriela Pohlová",
            role: "Business Admin / Project Manager",
            imageAspect: "0.82",
        },
    ],
};
