import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import Moment from "react-moment"
import "../components/blog.css"

const Blog = ({ data }) => {
  const {
    allContentfulPost: { nodes: posts },
  } = data

  return (
    <Layout page="blog">
      <SEO title="Blog" />

      {posts.map(post => {
        return (
          <article className="post" key={post.id} id={post.slug}>
            <h2>{post.title}</h2>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              className="post-cover-link"
              to={`/blog/${post.slug}`}
            >
              {post.cover && (
                <Image fluid={post.cover.fluid} alt={post.title} />
              )}
              <div className="post-time-wrapper">
                <Moment className="post-time-month" format="MMM">
                  {post.createdAt}
                </Moment>
                <Moment className="post-time-day" format="D">
                  {post.createdAt}
                </Moment>
              </div>
            </Link>
            <div className="post-content">
              <p className="post-summary">{post.summary.summary}</p>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                className="plain-link"
                to={`/blog/${post.slug}`}
              >
                read full post
              </Link>
            </div>
          </article>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        title
        summary {
          summary
        }
        slug
        createdAt
        cover {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Blog
