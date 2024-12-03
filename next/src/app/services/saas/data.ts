import softwareDevelopmentVisualization from "@images/services/saas/software-development-visualization.png";
import customSolutionsVisualization from "@images/services/saas/custom-solutions-visualization.png";
import softwareForStartupsIcon from "@images/icons/software-for-startups-icon.svg";
import saasSolutionsIcon from "@images/icons/saas-solutions-icon.svg";
import enterpriseSoftwareIcon from "@images/icons/enterprise-software-icon.svg";
import takeOverExistingSolutionIcon from "@images/icons/take-over-existing-solution-icon.svg";

export const saasData = {
    title: "Bonitoo specializes in technological and IT-related services such as product management, product engineering, quality management, building cloud, infrastructure, network, etc.",
    subtitle: "our part",
    firstSection: {
        image: softwareDevelopmentVisualization,
        services: [
            {
                icon: softwareForStartupsIcon,
                title: "Software for startups",
                description: "We have a long experience in product management, planning, design, developing, operating and supporting MVPs for startups and small businesses ready to enter the market."
            },
            {
                icon: saasSolutionsIcon,
                title: "SaaS solutions",
                description: "We are specialists in analyzing and engineering custom massively scalable SaaS products based leveraging both private and public services like AWS, Azure or GPC."
            }
        ]
    },
    secondSection: {
        image: customSolutionsVisualization,
        services: [
            {
                icon: enterpriseSoftwareIcon,
                title: "Enterprise software",
                description: "We offer enterprises a wide range of custom solutions like ERP, CRM, HRM, automated billing, payment systems and integrations to meet various business objectives."
            },
            {
                icon: takeOverExistingSolutionIcon,
                title: "Take-over existing solution",
                description: "We are ready to analyze and take your projects over. We have restored projects with zero support from the previous development team just from the source code."
            }
        ]
    }
};
