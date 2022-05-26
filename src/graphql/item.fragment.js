import { graphql } from "gatsby";

export const query = graphql`
    fragment Item on Item {
        id
        title
        description
        name
        designation
	company
        rating
        subject
        path
        socials {
            ...Social
        }
        count
	suffix
        images {
            ...Image
        }
        is_featured
        price
        list {
            id
            text
        }
        period
        texts {
            content
        }
        value
        year
        type
    }
`;
