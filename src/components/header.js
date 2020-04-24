import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainMenu from "./menu"

const MESSAGES = {
  home: "Let's Make a Plan",
  blog: "Cumulus Blog",
  contact: "Contact Me",
}

const Header = props => {
  const { siteTitle, page } = props

  return (
    <section className="masthead">
      <header>
        <h1 aria-hidden="true">{siteTitle}</h1>

        <Link to="/" aria-label={siteTitle} className="logo">
          <svg aria-hidden="true">
            <use xlinkHref="/svg-defs.svg#svg-logo" />
          </svg>
        </Link>

        <MainMenu page={page} />
      </header>

      {page.length && (
        <div className="message">
          <h2>{MESSAGES[page]}</h2>
        </div>
      )}
    </section>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  page: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  page: ``,
}

export default Header
