/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import TargetContent from "./targetContent"

import "./layout.css"
import "./og.css"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={props.page}>
      <Header siteTitle={data.site.siteMetadata.title} page={props.page} />
      <div>
        <main>{props.children}</main>
        <TargetContent />
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string,
}

export default Layout
