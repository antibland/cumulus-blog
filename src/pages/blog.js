import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
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

const Blog = ({ data }) => {
  const {
    allContentfulPost: { nodes: posts },
  } = data

  // const truncateString = (string, maxLength = 50) => {
  //   if (!string) return null
  //   if (string.length <= maxLength) return string
  //   return `${string.substring(0, maxLength)}...`
  // }

  return (
    <Layout page="blog">
      <SEO title="Blog" />

      {posts.map(post => {
        return (
          <article className="post" key={post.id}>
            <h2>{post.title}</h2>
            <Link to={`/posts/${post.slug}`}>
              {post.cover && (
                <Image fluid={post.cover.fluid} alt={post.title} />
              )}
            </Link>
            <div className="post-content">
              {documentToReactComponents(post.content.json, options)}
              <Link className="plain-link" to={`/posts/${post.slug}`}>
                [full article…]
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
        content {
          json
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
