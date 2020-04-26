import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import Moment from "react-moment"
import "../components/blog.css"

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
    product: { title, slug, createdAt, cover, content },
  },
}) => {
  return (
    <Layout page="blog">
      <SEO title={title} />
      <Link className="post-back-link" to="/blog">
        <svg aria-hidden="true">
          <use xlinkHref="/svg-defs.svg#svg-back-arrow" />
        </svg>
        all posts
      </Link>
      <article className="post single-post" id={slug}>
        <figure>{cover && <Image fixed={cover.fixed} alt={title} />}</figure>
        <h1 className="post-title">
          {title}{" "}
          <div className="post-meta">
            <img
              className="post-avatar"
              src={"/laura.jpg"}
              alt="Laura Gershman, Owner"
            />
            <p>
              Posted by Laura,{" "}
              <span className="time-posted">
                <Moment fromNow>{createdAt}</Moment>
              </span>
            </p>
          </div>
        </h1>
        <div className="post-content">
          {documentToReactComponents(content.json, options)}
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    product: contentfulPost(slug: { eq: $slug }) {
      title
      slug
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
