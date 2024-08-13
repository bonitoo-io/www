import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";
import { Container, Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import Heading from "@ui/heading";
import Social, { SocialLink } from "@ui/social";
import { SocialType } from "@utils/types";
import {
    FooterWrap,
    FooterTop,
    FooterWidget,
    LogoWidget,
    TextWidget,
    FooterWidgetList,
    FooterBottom,
} from "./style";

const Footer = ({ data }) => {
    return (
        <FooterWrap>
            <FooterTop>
                <Container>
                    <Row>
                        <Col lg={4} sm={6}>
                            <FooterWidget mb={["31px", null, null, 0]}>
                                <LogoWidget>
                                    <StaticImage
                                        src="../../../assets/images/logo/dark-logo-160x48.png"
                                        alt="logo"
                                        width={195}
                                        height={48}
                                    />
                                </LogoWidget>
                                {data?.contact && (
                                    <TextWidget>
                                        {data.contact?.address && (
                                            <Text mb="10px">
                                                {data.contact.address}
                                            </Text>
                                        )}
                                        {data.contact?.email && (
                                            <Text mb="10px">
                                                <Anchor
                                                    path={`mailto:${data.contact.email}`}
                                                    fontWeight="800"
                                                    color="text"
                                                    $hover={{ layout: 2 }}
                                                >
                                                    {data.contact.email}
                                                </Anchor>
                                            </Text>
                                        )}
                                        {data.contact?.phone && (
                                            <Text mb="10px">
                                                <Anchor
                                                    path={`tel:${data.contact.phone}`}
                                                    color="heading"
                                                    $hover={{ layout: 2 }}
                                                >
                                                    {data.contact.phone}
                                                </Anchor>
                                            </Text>
                                        )}
                                        {data.contact?.website && (
                                            <Text mb="10px">
                                                <Anchor
                                                    path={data.contact.website}
                                                    $hover={{ layout: 2 }}
                                                >
                                                    {data.contact.website}
                                                </Anchor>
                                            </Text>
                                        )}
                                    </TextWidget>
                                )}
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget mb={["31px", null, null, 0]}>
                                <Heading as="h6" mt="-3px" mb="20px">
                                    Our Services
                                </Heading>
                                <FooterWidgetList>
                                    <li>
                                        <Anchor
                                            path="/it-solution/software-for-startups"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            Software for Startups
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor
                                            path="/it-solution/iot-development"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            IoT Development
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor
                                            path="/it-solution/enterprise-software"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            Enterprise Software
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor
                                            path="/it-solution/saas-solutions"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            SaaS Solutions
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor
                                            path="/it-solution/time-series-solutions"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            Time-Series Solutions
                                        </Anchor>
                                    </li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget mb={["27px", null, 0]}>
                                <Heading as="h6" mt="-3px" mb="20px">
                                    Quick links
                                </Heading>
                                <FooterWidgetList>
                                    <li>
                                        <Anchor
                                            path="/about-us"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            About Us
                                        </Anchor>
                                    </li>

                                    <li>
                                        <Anchor
                                            path="/careers"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            Careers
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor
                                            path="/contact-us"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            Contact Us
                                        </Anchor>
                                    </li>
                                    <li>
                                        <Anchor
                                            path="/our-history"
                                            color="text"
                                            $hover={{ layout: 2 }}
                                        >
                                            Our History
                                        </Anchor>
                                    </li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={2} md={4} sm={6}>
                            <FooterWidget mt={["34px", null, "50px"]}>
                                <FooterWidgetList>
                                    <li>
                                        <Button path="https://play.google.com/store/apps/developer?id=Bonitoo+s.r.o." imgbutton shadow>
                                            <StaticImage
                                                src="../../../assets//images/icons/aeroland-button-google-play.jpg"
                                                alt="Google Play"
                                                width={162}
                                                height={48}
                                            />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button path="https://apps.apple.com/pl/developer/bonitoo-s-r-o/id1494398925" imgbutton shadow>
                                            <StaticImage
                                                src="../../../assets//images/icons/aeroland-button-app-store.jpg"
                                                alt="App Store"
                                                width={162}
                                                height={48}
                                            />
                                        </Button>
                                    </li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterTop>
            <FooterBottom>
                <Container>
                    <Row alignItems="center">
                        <Col md={6} textAlign={["center", null, "left"]}>
                            {data?.copyright && (
                                <Text pb={["15px", 0]}>
                                    &copy; {new Date().getFullYear()}{" "}
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: data.copyright,
                                        }}
                                    />
                                </Text>
                            )}
                        </Col>
                        <Col md={6} textAlign={["center", null, "right"]}>
                            {data?.socials && (
                                <Social
                                    space="16px"
                                    tooltip={true}
                                    shape="rounded"
                                    variant="outlined"
                                >
                                    {data.socials.map((social) => (
                                        <SocialLink
                                            key={social.id}
                                            path={social.link}
                                            title={social.title}
                                        >
                                            <i
                                                className={cn(
                                                    social.icon,
                                                    "link-icon"
                                                )}
                                            ></i>
                                        </SocialLink>
                                    ))}
                                </Social>
                            )}
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </FooterWrap>
    );
};

Footer.propTypes = {
    data: PropTypes.shape({
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        copyright: PropTypes.string,
        contact: PropTypes.shape({
            phone: PropTypes.string,
            email: PropTypes.string,
            address: PropTypes.string,
            website: PropTypes.string,
        }),
    }),
};

export default Footer;
