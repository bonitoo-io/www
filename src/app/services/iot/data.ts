import decoration1 from "@images/services/iot/decoration1.png";
import decoration2 from "@images/services/iot/decoration2.png";
import designIcon from "@images/icons/design.svg";
import buildIcon from "@images/icons/build.svg";
import iotIcon from "@images/icons/iot.svg";
import managementIcon from "@images/icons/management.svg";

export const servicesData = {
  title:
    "Bonitoo.io designed IoT devices such as product engineering, warranty management, building cloud, infrastructure, network, etc.",
  subtitle: "our part",
  firstSection: {
    image: decoration1,
    services: [
      {
        icon: designIcon,
        title: "Design the whole IoT system",
        description:
          "For new projects we typically assess requirements, prepare end-to-end IoT solution architecture, build MVP and evolutionary extend it.",
      },
      {
        icon: buildIcon,
        title: "Build custom IoT devices",
        description:
          "Based on requirements we select the right technology, software stack and sensors. We design case and other components. We leverage 3D printer to prototype case and build smaller series.",
      },
    ],
  },
  secondSection: {
    image: decoration2,
    services: [
      {
        icon: iotIcon,
        title: "IoT wireless communication",
        description:
          "Important aspect is to select the right wireless technology or combination of multiple ones to backup the communication. We have rich experience with WiFi, GSM, proprietary radios, LoRa, ZigBee, etc.",
      },
      {
        icon: managementIcon,
        title: "Extended IoT devices management",
        description:
          "We have long experience with extended use-cases like remote firmware update (OTA), centralized IoT devices configuration, device self-configuration, management and monitoring via internal web server and services, device screen, etc.",
      },
    ],
  },
};
