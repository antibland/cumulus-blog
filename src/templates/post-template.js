import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import Moment from "react-moment"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}

const PostTemplate = ({
  data: {
    product: { title, createdAt, cover, content },
  },
}) => {
  return (
    <Layout>
      <SEO title={title} />
      <Link to="/blog">back to all articles</Link>
      <article className="single-post">
        <figure>{cover && <Image fixed={cover.fixed} alt={title} />}</figure>
        <h1>
          {title}{" "}
          <span>
            Created at: <Moment fromNow>{createdAt}</Moment>
          </span>
        </h1>
        <p>{documentToReactComponents(content.json, options)}</p>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    product: contentfulPost(slug: { eq: $slug }) {
      title
      createdAt
      content {
        json
      }
      cover {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default PostTemplate
