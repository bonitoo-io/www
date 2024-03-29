import styled, { device } from "@styled";
import BackgroundImage from "gatsby-background-image";

export const ContactWrapper = styled(BackgroundImage)`
    padding-block-start: 53px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 73px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 91px;
        padding-block-end: 100px;
    }
`;

export const ContactInfoBox = styled.div`
    margin-block-start: 40px;
    ${device.large} {
        margin-block-start: 0;
    }
`;

export const StyledTitle = styled.h6`
    margin-block-end: 30px;
    font-size: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
`;

export const StyledPhone = styled.h3`
    margin-block-end: 20px;
    a {
        color: #002fa6;
    }
`;
