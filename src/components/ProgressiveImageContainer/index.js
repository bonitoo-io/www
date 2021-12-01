import React from "react";
import _ from "lodash";
import Img from "gatsby-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProgressiveImageContainer = ({ image, alt, className }) =>
/*  typeof image === "string" ? (
    <img className={className} src={image} alt={alt} />
  ) : _.get(image, ["childImageSharp", "gatsbyImageData"]) ? (
    */
    <GatsbyImage
      className={className}
      image={image}
      alt={alt}
    />
    /*
  ) : (
    <img
      className={className}
      src={_.get(image, ["publicURL"], "")}
      alt={alt}
    />
  );
  */

export default ProgressiveImageContainer;
