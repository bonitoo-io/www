import { CaseStudyProps } from "@components/standOutCaseStudies/types";
import tracking from "@images/case-studies/tracking.png";
import influx from "@images/case-studies/influx.png";
import weather from "@images/case-studies/weather.png";

export const caseStudies: CaseStudyProps[] = [
  {
    category: "Software for startups",
    title: "Tracking Platform",
    description:
      "We took over an existing IoT mobile phone tracking project based on Bluetooth technologies with limited support from the dev team and restored it fast in required deadlines.",
    image: tracking,
    imageAlt: "Tracking Platform Interface Screenshot",
  },
  {
    category: "saas solutions",
    title: "InfluxDB Flux Packages",
    description:
      "Bonitoo.io developed new packages for InfluxDB. The code is either in contrib and experimental packages.",
    image: influx,
    imageAlt: "InfluxDB Flux Packages Visualization",
  },
  {
    category: "iot development",
    title: "Weather Station",
    description:
      "As a demonstration of a more complex IoT service, we've developed a device that combines internal sensors, data from time-series database and internet services.",
    image: weather,
    imageAlt: "Weather Station Device Interface",
  },
];
