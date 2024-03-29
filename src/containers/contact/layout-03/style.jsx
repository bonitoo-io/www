import styled, { themeGet, device } from "@styled";
import BackgroundImage from "gatsby-background-image";

export const SectionWrap = styled(BackgroundImage)`
    padding-block: 80px;
    background-color: rgb(0, 47, 166);
    background-size: auto !important;
    background-position: top right;
    &:before,
    &:after {
        background-size: auto !important;
        background-position: top right;
    }
    ${device.medium} {
        padding-block: 100px;
    }
    ${device.large} {
        padding-block: 120px;
    }
`;

export const ContactInfoBox = styled.div`
    text-align: center;
    margin-block-start: 45px;
    ${device.large} {
        margin-block-start: 0;
    }
    .icon {
        font-size: 40px;
        color: #fff;
        margin-block-end: 14px;
    }
`;

export const StyledHeading = styled.h3`
    font-weight: 600;
    color: #fff;
    position: relative;
    line-height: 1.4;
    padding-inline-start: 34px;
    &:before {
        position: absolute;
        content: "";
        left: 0px;
        top: 50%;
        width: 4px;
        height: 94%;
        transform: translateY(-50%);
        background-color: ${themeGet("colors.secondary")};
    }
`;

export const StyledText = styled.p`
    margin-block-start: 15px;
    font-size: 18px;
    color: #fff;
    margin-inline-start: 34px;
`;

export const StyledInfoTitle = styled.h6`
    font-size: 15px;
    color: #fff;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-block: 10px;
`;
