import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Button from "@ui/button";
import Image from "@ui/image";
import { SectionTitleType, ButtonType, ImageType } from "@utils/types";
import { ResourcesWrapper, LeftBox, ImageBox } from "./style";

const CtaArea = ({ data }) => {
    const ctaData = useStaticQuery(graphql`
        query CtaFiveQuery {
            file(relativePath: { eq: "bg/bonitoo-global-image.png" }) {
                childImageSharp {
                    gatsbyImageData(
                        layout: CONSTRAINED
                        width: 780
                        height: 746
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
        <ResourcesWrapper {...bgImage}>
            <Container fluid>
                <Row alignItems="center">
                    <Col lg={{ span: 6, order: 1 }} xs={{ order: 2, span: 12 }}>
                        <LeftBox>
                            {data?.section_title && (
                                <SectionTitle
                                    mb="30px"
                                    textAlign={["center", null, null, "left"]}
                                    {...data.section_title}
                                />
                            )}
                            {data?.buttons?.map(({ id, content, ...rest }) => (
                                <Button key={id} {...rest}>
                                    {content}
                                </Button>
                            ))}
                        </LeftBox>
                    </Col>
                    <Col
                        lg={{ span: 6, order: 2 }}
                        xs={{ order: 1, span: 12 }}
                        mb={["30px"]}
                        textAlign={["center"]}
                    >
                        {data?.images?.[0]?.src && (
                            <Image
                                src={data.images[0].src}
                                alt={data.images[0]?.alt || "Cta"}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </ResourcesWrapper>
    );
};

CtaArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
    }),
};

export default CtaArea;
