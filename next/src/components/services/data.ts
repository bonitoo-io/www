import { ServicesData } from "./types";
import saas from "@images/services/saas.png";
import iot from "@images/services/iot.png";
import data from "@images/services/data.png";

export const servicesData: ServicesData[] = [
  {
    path: "/services/iot",
    title: "IoT Development",
    description:
      "We know how to develop the whole IoT ecosystem development including IoT devices, libraries for IoT devices, IoT portals, monitoring solutions, time series etc",
    image: iot,
    minHeight: "503px",
    imageHeight: "222px",
    imageWidth: "273px",
    imageTop: "50px",
  },
  {
    path: "/services/time-series",
    title: "Time-Series Solutions",
    description:
      "We provide the advanced analytical, reporting and embedded solutions around large volumes of time-stamped data.",
    minHeight: "503px",
    image: data,
    imageHeight: "287px",
    imageWidth: "280px",
    imageTop: "15px",
  },
  {
    path: "/services/saas",
    title: "Software Development",
    description:
      "Having obtained the official & formal training in IT technology and technical fields, our staffs know best how to deliver large software products.",
    image: saas,
    minHeight: "503px",
    imageHeight: "258px",
    imageWidth: "289px",
    imageTop: "35px",
  },
];
