import styled, { device, themeGet } from "@styled";
import BackgroundImage from "gatsby-background-image";

export const PageHeaderWrap = styled(BackgroundImage)`
    background-color: ${themeGet("cololrs.spring")};
    background-repeat: no-repeat;
    background-position: center center;
    border-bottom-width: 0px;
    background-size: cover;
    text-align: center;
    padding-block-start: 80px;
    padding-block-end: 80px;
    ${device.large} {
        padding-block-start: 136px;
        padding-block-end: 131px;
    }
    .breadcrumb {
        display: inline-block;
        padding: 0;
        padding-inline-start: 6px;
        margin-block-end: 0;
        border-radius: 0;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 2px;
        line-height: 1.58;
        text-transform: uppercase;
        background-color: transparent;
        &__list {
            margin: 0;
            padding: 0;
            list-style: none;
            &__item {
                display: inline-block;
            }
        }
        &__link {
            position: relative;
            &:after {
                content: "";
                width: 0;
                height: 1px;
                bottom: 0;
                position: absolute;
                left: auto;
                right: 0;
                z-index: -1;
                transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
                background: currentColor;
            }
            &:hover {
                &:after {
                    width: 100%;
                    left: 0;
                    right: auto;
                    z-index: 0;
                }
            }
            &__active {
                color: #6d70a6;
                &:after {
                    display: none;
                }
            }
        }
        &__title {
            font-size: clamp(34px, 4vw, 56px);
            font-weight: 700;
            color: ${themeGet("colors.primary")};
            display: block;
            margin-block-end: 20px;
            line-height: 1.4;
            text-transform: capitalize;
        }
    }
`;
