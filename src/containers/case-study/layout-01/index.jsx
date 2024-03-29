import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Container } from "@ui/wrapper";
import { convertToBgImage } from "gbimage-bridge";
import Motto from "@components/motto";
import SectionTitle from "@ui/section-title";
import SwiperSlider, { SwiperSlide } from "@ui/swiper";
import CaseStudyBox from "@components/box-large-image/layout-02";
import { SectionTitleType, MottoType, ItemType } from "@utils/types";
import { CaseStudyWrapper } from "./style";

const sliderSettings = {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    autoplay: false,
    pagination: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
};

const CaseStudyArea = ({ data }) => {
    const caseStudyBg = useStaticQuery(graphql`
        query CaseImageQuery {
            file(relativePath: { eq: "bg/case-study-section-bg.png" }) {
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
    const bgImage = convertToBgImage(getImage(caseStudyBg.file));

    return (
        <CaseStudyWrapper {...bgImage}>
            <Container>
                {data?.section_title && (
                    <SectionTitle
                        mb={["46px", null, "60px"]}
                        title={data.section_title?.title}
                        subtitle={data.section_title?.subtitle}
                    />
                )}

                {data?.items && (
                    <SwiperSlider options={sliderSettings} shadowSize="lg">
                        {data?.items?.map((caseStudy) => (
                            <SwiperSlide className="item" key={caseStudy.id}>
                                <CaseStudyBox
                                    image={caseStudy.featured_image}
                                    title={caseStudy.title}
                                    category={caseStudy.category}
                                    desc={caseStudy.excerpt}
                                    //path={`/case-study/${caseStudy.slug}`}
                                    //btnText="View case study"
                                    layout={2}
                                />
                            </SwiperSlide>
                        ))}
                    </SwiperSlider>
                )}
                {data?.motto && (
                    <Motto
                        mt={["70px", null, "90px"]}
                        text={data.motto?.text}
                        linkText={data.motto?.linkText}
                        path={data.motto?.link}
                    />
                )}
            </Container>
        </CaseStudyWrapper>
    );
};

CaseStudyArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        motto: PropTypes.shape(MottoType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default CaseStudyArea;
