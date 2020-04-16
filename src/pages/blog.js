import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

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

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      {posts.map(post => {
        return (
          <article className="post" key={post.id}>
            <h2>{post.title}</h2>
            <Link to={`/posts/${post.slug}`}>
              {post.cover && (
                <Image fluid={post.cover.fluid} alt={post.title} />
              )}
            </Link>
            <p>
              {documentToReactComponents(post.content.json, options)}
              <Link to={`/posts/${post.slug}`}>[full article…]</Link>
            </p>
          </article>
        )
      })}

      <pre>{JSON.stringify(data, null, 4)}</pre>
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
