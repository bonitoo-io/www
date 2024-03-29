import React from "react";                                          	
import PropTypes from "prop-types";
import Image from "@ui/image";
import { ImageType } from "@utils/types";
import {
    TestimonialWrap,
    TestimonialSubject,
    TestimonialReview,
    AuthorInfoWrap,
    AuthorMedia,
    AuthorInfo,
    AuthorName,
    AuthorRole,
    AuthorCompany,
} from "./style";

const Testimonial = ({
    authorImg,
    authorName,
    authroRole,
    authorCompany,
    subject,
    review,
    ...rest
}) => {
    return (
        <TestimonialWrap {...rest}>
            {subject && <TestimonialSubject>{subject}</TestimonialSubject>}
            {review && <TestimonialReview>{review}</TestimonialReview>}
            <AuthorInfoWrap>
                {authorImg?.src && (
                    <AuthorMedia>
                        <Image
                            src={authorImg.src}
                            alt={authorImg?.alt || authorName}
                        />
                    </AuthorMedia>
                )}
                {(authorName || authroRole || authorCompany) && (
                    <AuthorInfo>
                        {authorName && <AuthorName>{authorName}</AuthorName>}
                        {authroRole && <AuthorRole>{authroRole}</AuthorRole>}
			{authorCompany && <AuthorCompany>{authorCompany}</AuthorCompany>}
                    </AuthorInfo>
                )}
            </AuthorInfoWrap>
        </TestimonialWrap>
    );
};

Testimonial.propTypes = {
    authorImg: PropTypes.shape(ImageType),
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    authorName: PropTypes.string,
    authroRole: PropTypes.string,
    authorCompany: PropTypes.string,
    review: PropTypes.string,
    subject: PropTypes.string,
};

export default Testimonial;
