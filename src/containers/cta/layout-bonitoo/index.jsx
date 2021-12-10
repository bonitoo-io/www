import React from "react";
import Typed from "react-typed";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col } from "@ui/wrapper";
import { HeadingType, VideoButtonType } from "@utils/types";
import { SectionWrap, StyledTitle, TypedTextWrap } from "./style";
import TypedArea from "@containers/elements/typed-text";

const CtaArea = ({ data }) => {
    const ctaData = useStaticQuery(graphql`
        query CtaBonitooQuery {
            file(
                relativePath: { eq: "bg/home-infotechno-video-intro-bg.jpg" }
            ) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        placeholder: TRACED_SVG
                        formats: WEBP
                        quality: 100
                    )
                }
            }
        }
    `);
    const bgImage = convertToBgImage(getImage(ctaData.file));

    return (
        <SectionWrap {...bgImage}>
            <Container>
                <Row>
                    <Col lg={6} md={10} xs={11} ml="auto">
                        {data?.headings?.[0] && (
                          <TypedTextWrap>
                              <span className="not-typical">
                                  {data.headings[0].content}  {" "}
                              </span>
                              {data?.type_texts?.[0] && (
                                <Typed
                                    strings={data.type_texts}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                />
                              )}
                              {data?.headings?.[1] && (
                                 <span className="not-typical">
                                    {" "} {data.headings[1].content}
                                </span>
                              )}
                          </TypedTextWrap>
                        )}
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    );
};

CtaArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        type_texts: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default CtaArea;
