import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainMenu from "./menu"

const Header = ({ siteTitle }) => (
  <section className="masthead">
    <header>
      <h1 aria-hidden="true">{siteTitle}</h1>

      <Link to="/" aria-label={siteTitle} className="logo">
        <svg aria-hidden="true">
          <use xlinkHref="/svg-defs.svg#svg-logo" />
        </svg>
      </Link>

      <MainMenu />
    </header>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
