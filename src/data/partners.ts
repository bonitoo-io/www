import { LogoProps } from "@components/hero/types";
import apiteaImage from "@images/logos/apitea.png";
import buildsysImage from "@images/logos/buildsys.png";
import letenkyImage from "@images/logos/letenky.png";
import influxImage from "@images/logos/influx.png";
import udImage from "@images/logos/ud.png";

export const logos: LogoProps[] = [
  {
    src: influxImage,
    alt: "Influx",
    width: 196,
  },
  {
    src: apiteaImage,
    alt: "Apitea",
    width: 196,
  },
  {
    src: buildsysImage,
    alt: "Buildsys",
    width: 196,
  },
  {
    src: udImage,
    alt: "UD",
    width: 196,
  },
  {
    src: letenkyImage,
    alt: "Letenky Levne",
    width: 196,
  },
];
