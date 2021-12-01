import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

console.log("62 6F 6E 69 74 6F 6F 2E 69 6F"); //bonitoo.io in hex, hiring interview question #1

const HomePage = (props) => {
  const { data: { markdownRemark: { frontmatter: { title, meta_title, meta_description, heading, description, offerings, testimonials } } } } = props

  return (
    <Layout>
      <HomePageTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
        heading={heading}
        description={description}
        offerings={offerings}
        testimonials={testimonials}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image {
                childImageSharp {
                    gatsbyImageData
                }
                publicURL
            }
            title
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
