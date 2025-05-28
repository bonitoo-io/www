import avastProjectImage from "@images/history/avast-project-2021.png";
import apiteaPartnershipImage from "@images/history/apitea-partnership-2018.png";
import influxdataPartnershipImage from "@images/history/influxdata-partnership-2017.png";
import bonitooFoundationImage from "@images/history/bonitoo-foundation-2017.png";
import rnd4uCompanyImage from "@images/history/rnd4u-company-2016.png";

export const timelineData = {
  items: [
    {
      year: "2021",
      title: "Avast project",
      description:
        "Bonitoo signs a project with Avast, the cybersecurity software company.",
      imageSrc: avastProjectImage,
      imageAlt: "Avast project illustration",
    },
    {
      year: "2018",
      title: "Apitea partnership",
      description:
        "Bonitoo signs partnership agreement with a famous Apitea s.r.o. company, the producer of Promitea B2B procurement platform.",
      imageSrc: apiteaPartnershipImage,
      imageAlt: "Apitea partnership logo",
      isReversed: true,
      backgroundColor: "bg-lime-500",
    },
    {
      year: "2017",
      title: "InfluxData partnership",
      description: "Bonitoo becomes InfluxData, Inc. contributor.",
      imageSrc: influxdataPartnershipImage,
      imageAlt: "InfluxData partnership logo",
      backgroundColor: "bg-indigo-950",
    },
    {
      year: "2017",
      title: "The Foundation of Bonitoo.io",
      description:
        "Bonitoo s.r.o. starts operations in Prague in March 2017 and signs the first software delivery contract with WEB SHOP FLY company.",
      imageSrc: bonitooFoundationImage,
      imageAlt: "Bonitoo.io foundation illustration",
      isReversed: true,
      backgroundColor: "bg-sky-500",
    },
    {
      year: "2016",
      title: "RND4U",
      description:
        "The team in Vietnam decouples from HP first and founds the company known as RND4U CO., LTD.",
      imageSrc: rnd4uCompanyImage,
      imageAlt: "RND4U company illustration",
    },
  ],
};
