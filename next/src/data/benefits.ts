import { BenefitItemProps } from "../components/benefits/types";

import career from "@images/icons/career.svg";
import vacation from "@images/icons/vacation.svg";
import passion from "@images/icons/passion.svg";
import training from "@images/icons/training.svg";

export const benefitsData: BenefitItemProps[] = [
  {
    id: "career-development",
    icon: career,
    title: "Career development",
    description:
      "Our service offerings cover all phases including planning, design, architecture, MVP development, QA, operation, support, and iterative evolution.",
  },
  {
    id: "vacation",
    icon: vacation,
    title: "Vacation",
    description:
      "It's more than a responsibility but a guarantee from us to gain customer trust with highly reliable quality control system.",
  },
  {
    id: "training",
    icon: training,
    title: "Training and learning",
    description:
      "Develop and propose product improvements through periodical and accurate testing, repairing & refining every version.",
  },
  {
    id: "passion",
    icon: passion,
    title: "Passion and excitement",
    description:
      "At Bonitoo, we have a long experience with maintenance and operation of existing systems deployed both on premise and cloud.",
  },
];
