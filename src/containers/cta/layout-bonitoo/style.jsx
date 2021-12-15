import styled, { device, themeGet } from "@styled";
import BackgroundImage from "gatsby-background-image";

export const SectionWrap = styled(BackgroundImage)`
    padding-block: 100px;
    ${device.large} {
        padding-block: 150px;
    }
`;

export const StyledTitle = styled.h2`
    font-weight: 600;
    color: rgb(255, 255, 255);
    line-height: 1.34;
    margin-block-end: 65px;
`;


export const TypedTextWrap = styled.h2`
    line-height: 1.34;
    word-wrap: break-word;
    font-weight: 560;
    margin-block-end: 65px;
    color: rgb(255, 255, 255);
    margin-inline: auto;
    span {
        &:not(.not-typical) {
            color: ${themeGet("colors.primary")};
            font-style: italic;
        }
    }
`;
