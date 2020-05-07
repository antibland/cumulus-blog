import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import Moment from "react-moment"

import addToMailchimp from "gatsby-plugin-mailchimp"
import "../components/blog.css"

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const website_url = "https://www.cumulusbookkeeper.com/"
const ownWebsite = uri => uri.startsWith(website_url)

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [INLINES.HYPERLINK]: node => {
      return (
        <a
          href={node.data.uri}
          target={`${ownWebsite(node.data.uri) ? "_self" : "_blank"}`}
          rel={`${ownWebsite(node.data.uri) ? "" : "noopener noreferrer"}`}
        >
          {node.content[0].value}
        </a>
      )
    },
  },
}

const PostTemplate = ({
  location,
  data: {
    product: { title, slug, createdAt, cover, content },
  },
}) => {
  const [fname, setFName] = useState("")
  const [lname, setLName] = useState("")
  const [email, setEmail] = useState("")

  const path = location.pathname

  const _handleSubmit = e => {
    e.preventDefault()
    console.log("submitting...", email, fname, lname)
    // const result = await addToMailchimp(email, {
    //   FNAME: fname,
    //   LNAME: lname,
    // })

    addToMailchimp(email, {
      FNAME: fname,
      LNAME: lname,
    }) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log("success", data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })

    // I recommend setting `result` to React state
    // but you can do whatever you want
  }

  const _handleChangeFName = e => {
    setFName(e.target.value)
  }

  const _handleChangeLName = e => {
    setLName(e.target.value)
  }

  const _handleChangeEmail = e => {
    setEmail(e.target.value)
  }

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

      <form onSubmit={_handleSubmit} className="mailchimp-form">
        <h3 className="mailchimp-form-title">Join the Mailing List</h3>
        <input
          type="email"
          onChange={_handleChangeEmail}
          placeholder="email"
          name="email"
          value={email}
          required
        />
        <input
          type="text"
          onChange={_handleChangeFName}
          placeholder="First name"
          name="FNAME"
          value={fname}
          required
        />
        <input
          type="text"
          onChange={_handleChangeLName}
          placeholder="Last name"
          name="LNAME"
          value={lname}
          required
        />
        <button type="submit">Submit</button>
      </form>
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
