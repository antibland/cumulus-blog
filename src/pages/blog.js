import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
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
          <article className="post" key={post.id}>
            <h2>{post.title}</h2>
            <Link to={`/blog/${post.slug}`}>
              {post.cover && (
                <Image fluid={post.cover.fluid} alt={post.title} />
              )}
            </Link>
            <div className="post-content">
              <p className="post-summary">{post.summary.summary}</p>
              <Link className="plain-link" to={`/blog/${post.slug}`}>
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
    allContentfulPost {
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
