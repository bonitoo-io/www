import { createGlobalStyle } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import SelectorIcon from "../images/icons/selector-icon.png";
import { worldRotate } from "./animations";
import FaBrands400Eot from "../fonts/font-awesome/fa-brands-400.eot";
import FaBrands400Woff2 from "../fonts/font-awesome/fa-brands-400.woff2";
import FaBrands400Woff from "../fonts/font-awesome/fa-brands-400.woff";
import FaBrands400Tff from "../fonts/font-awesome/fa-brands-400.ttf";
import FaBrands400Svg from "../fonts/font-awesome/fa-brands-400.svg";
import FaLight300Eot from "../fonts/font-awesome/fa-light-300.eot";
import FaLight300Woff2 from "../fonts/font-awesome/fa-light-300.woff2";
import FaLight300Woff from "../fonts/font-awesome/fa-light-300.woff";
import FaLight300Tff from "../fonts/font-awesome/fa-light-300.ttf";
import FaLight300Svg from "../fonts/font-awesome/fa-light-300.svg";
import FaRegular400Eot from "../fonts/font-awesome/fa-regular-400.eot";
import FaRegular400Woff2 from "../fonts/font-awesome/fa-regular-400.woff2";
import FaRegular400Woff from "../fonts/font-awesome/fa-regular-400.woff";
import FaRegular400Tff from "../fonts/font-awesome/fa-regular-400.ttf";
import FaRegular400Svg from "../fonts/font-awesome/fa-regular-400.svg";

import FaSolid900Eot from "../fonts/font-awesome/fa-solid-900.eot";
import FaSolid900Woff2 from "../fonts/font-awesome/fa-solid-900.woff2";
import FaSolid900Woff from "../fonts/font-awesome/fa-solid-900.woff";
import FaSolid900Tff from "../fonts/font-awesome/fa-solid-900.ttf";
import FaSolid900Svg from "../fonts/font-awesome/fa-solid-900.svg";

export const GlobalStyle = createGlobalStyle`

*, *::after, *::before {
  box-sizing: border-box;
}
@font-face {
    font-family: "Font Awesome 5 Brands";
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${FaBrands400Eot});
    src: url(${FaBrands400Eot}?#iefix) format("embedded-opentype"), 
    url(${FaBrands400Woff2}) format("woff2"), 
    url(${FaBrands400Woff}) format("woff"), 
    url(${FaBrands400Tff}) format("truetype"), 
    url(${FaBrands400Svg}#fontawesome) format("svg")
}
@font-face {
    font-family: "Font Awesome 5 Pro";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${FaLight300Eot});
    src: url(${FaLight300Eot}?#iefix) format("embedded-opentype"), 
    url(${FaLight300Woff2}) format("woff2"), 
    url(${FaLight300Woff}) format("woff"), 
    url(${FaLight300Tff}) format("truetype"), 
    url(${FaLight300Svg}#fontawesome) format("svg")
}

@font-face {
    font-family: "Font Awesome 5 Pro";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${FaRegular400Eot});
    src: url(${FaRegular400Eot}?#iefix) format("embedded-opentype"), 
    url(${FaRegular400Woff2}) format("woff2"), 
    url(${FaRegular400Woff}) format("woff"), 
    url(${FaRegular400Tff}) format("truetype"), 
    url(${FaRegular400Svg}#fontawesome) format("svg")
}

@font-face {
    font-family: "Font Awesome 5 Pro";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(${FaSolid900Eot});
    src: url(${FaSolid900Eot}?#iefix) format("embedded-opentype"), 
    url(${FaSolid900Woff2}) format("woff2"), 
    url(${FaSolid900Woff}) format("woff"), 
    url(${FaSolid900Tff}) format("truetype"), 
    url(${FaSolid900Svg}#fontawesome) format("svg")
}



html, body {
    height: 100%;
}
body{
  line-height: ${themeGet("lineHieghts.body")};
  font-size: ${themeGet("fontSizes.body")};
  font-style: normal;
  font-weight: ${themeGet("fontWeights.body")};
  visibility: visible;
  font-family: ${themeGet("fonts.body")};
  color: ${themeGet("colors.text")};
  position: relative;
  background-color: ${themeGet("colors.background")};
  &.no-overflow{
    overflow: hidden;
  }
} 

h1, h2, h3, h4, h5, h6 {
    color: ${themeGet("colors.heading")};
    font-family: ${themeGet("fonts.heading")};
    font-weight: ${themeGet("fontWeights.heading")};
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: ${themeGet("lineHieghts.heading")};
}
h1 {
    font-size: ${themeGet("fontSizes.h1")};
    @media only screen and (max-width: 1199px){
      font-size: 46px;
    }
    @media only screen and (max-width: 991px){
      font-size: 40px;
    }
    @media only screen and (max-width: 767px){
      font-size: 34px;
    }
  }
h2 {
    font-size: ${themeGet("fontSizes.h2")};
    @media only screen and (max-width: 1199px){
      font-size: 36px;
    }
    @media only screen and (max-width: 991px){
      font-size: 36px;
    }
    @media only screen and (max-width: 767px){
      font-size: 30px;
    }
  }
h3 {
    font-size: ${themeGet("fontSizes.h3")};
    @media only screen and (max-width: 1199px){
      font-size: 32px;
    }
    @media only screen and (max-width: 991px){
      font-size: 28px;
    }
    @media only screen and (max-width: 767px){
      font-size: 25px;
    }
}
h4 {
    font-size: ${themeGet("fontSizes.h4")};
    @media only screen and (max-width: 1199px){
      font-size: 30px;
    }
    @media only screen and (max-width: 991px){
      font-size: 28px;
    }
    @media only screen and (max-width: 767px){
      font-size: 24px;
    }
}
h5 {
    @media only screen and (max-width: 767px){
      font-size: 20px;
    }
    @media only screen and (max-width: 575px){
      font-size: 18px;
    }
}
h6 {
    font-size: 16px;
    @media only screen and (max-width: 767px){
      font-size: 18px;
    }
}



p:last-child {
    margin-block-end: 0;
}
a, button {
  color: inherit;
  display: inline-block;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
}
a, button, img, input, span {
  transition: ${themeGet("transition")};
}
*:focus {
  outline: none !important;
}
a:focus {
  color: inherit;
  outline: none;
  text-decoration: none;
}
.btn.focus, .btn:focus {
    outline: none;
    box-shadow: none;
}
a:hover, button:hover {
  text-decoration: none;
  color: ${themeGet("colors.primary")};
}
button, input[type="submit"] {
  cursor: pointer;
}
ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}
.mark, mark {
    padding: 0 0;
    background-color: transparent;
}

select {
    padding: 3px 20px;
    height: 56px;
    max-width: 100%;
    width: 100%;
    outline: none;
    border: 1px solid ${themeGet("colors.borderTwo")};
    border-radius: ${themeGet("radii.md")};
    background: ${themeGet(
        "colors.borderTwo"
    )} url(${SelectorIcon}) no-repeat center right 20px;
    background-color: rgb(248, 248, 248);
    -moz-appearance: none;
    -webkit-appearance: none;
    &:focus {
        background: ${themeGet(
            "colors.borderTwo"
        )} url(${SelectorIcon}) no-repeat center right 20px !important;
    }
}

img{
    max-width: 100%;
}

::selection {
    color: ${themeGet("colors.white")};
    background-color: ${themeGet("colors.primary")};
}
input, select, textarea{
  transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
}
form {
    input:focus::-webkit-input-placeholder { color:transparent; }
    input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
    input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
    input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */
    input, textarea{
        &::placeholder{
            transition: ${themeGet("transition")};
        }
    }
}
input[type="checkbox"] {
    position: relative;
    background: 0 0;
    border-width: 0;
    box-shadow: none;
    margin: 0 10px 0 3px;
    cursor: pointer;
}



@keyframes separator-bounce {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
}
#googleMap-1, #googleMap-2 , #googleMap-3 {
    height: 400px;
}
.wrapper{
    position: relative;
}
@media (min-width: 1200px){
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 1200px;
    }
}
@media (min-width: 1600px){
    .gutter-xl-70{
        margin-inline-end: -35px;
        margin-inline-start: -35px;
        [class*="col"]{
            padding-inline-start: 35px;
            padding-inline-end: 35px;
        }
    }
}
.xp-150{
    @media (min-width: 1200px){
        padding: 0 50px;
    }
    @media (min-width: 1600px){
        padding: 0 150px;
    }
}
figure{
  margin: 0;
}
.worldRotate {
  animation: ${worldRotate} 20s linear infinite;
}

`;
