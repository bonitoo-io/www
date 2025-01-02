import * as React from "react";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { useDataProvider, useList } from "@refinedev/core";
import { testimonials } from "@components/testimonials/data";

export function TestimonialSection() {
  console.log(
    "*** This is a demonstration of the strapi integration, remove in production for now"
  );
  console.log("testimonials loading");
  const { data, isLoading } = useList({ resource: "testimonials" });
  console.log(data, isLoading);
  const dataProvider = useDataProvider();
  console.log(
    dataProvider().getList({ resource: "testimonials" }).then(console.log)
  );
  console.log("*** End of the strapi integration demo");
  return (
    <>
      <TestimonialCarousel testimonials={testimonials} />
    </>
  );
}
