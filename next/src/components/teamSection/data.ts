import {ImageGridItemProps} from "@components/teamSection/types";
import workspace from "@images/team/workspace.png";
import coffeeCorner from "@images/team/coffee-corner.png";
import meetingSpace from "@images/team/meeting-space.png";
import collaborativeArea from "@images/team/collaborative-area.png";

export const topRowImages: ImageGridItemProps[] = [
    {
        src: workspace,
        alt: "Team workspace area",
        className: "w-[71%] aspect-[1.88] max-md:mt-6 max-md:max-w-full",
    },
    {
        src: coffeeCorner,
        alt: "Coffee corner",
        className: "w-[29%] aspect-[0.77] max-md:mt-6",
    },
];

export const bottomRowImages: ImageGridItemProps[] = [
    {
        src: meetingSpace,
        alt: "Meeting space",
        className: "w-2/5 aspect-[1.05] max-md:mt-6 max-md:max-w-full",
    },
    {
        src: collaborativeArea,
        alt: "Collaborative area",
        className: "w-3/5 aspect-[1.6] max-md:mt-6 max-md:max-w-full",
    },
];
