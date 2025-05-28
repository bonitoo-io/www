import { GalleryImage } from "../components/gallery/types";

import coffee from "@images/gallery/coffee-area.png";
import collaboration from "@images/gallery/collab-space.png";
import meeting from "@images/gallery/meeting-space.png";
import workspace from "@images/gallery/team-workspace.png";

export const TEAM_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "workspace",
    src: workspace,
    alt: "Team workspace area with modern furniture and collaborative spaces",
    width: 71,
    aspectRatio: 1.88,
  },
  {
    id: "meeting",
    src: meeting,
    alt: "Bright meeting space with floor-to-ceiling windows",
    width: 29,
    aspectRatio: 0.77,
  },
  {
    id: "coffee",
    src: coffee,
    alt: "Cozy coffee area with barista station and seating",
    width: 40,
    aspectRatio: 1.05,
  },
  {
    id: "collaboration",
    src: collaboration,
    alt: "Open collaboration space with whiteboards and flexible seating",
    width: 60,
    aspectRatio: 1.6,
  },
];
