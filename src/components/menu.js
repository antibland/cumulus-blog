import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

const MainMenu = props => {
  const { page } = props
  return (
    <nav role="main">
      <ul className="nav-items">
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <Link
            className={page === "services" ? `nav-link active` : `nav-link`}
            to="/services"
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={page === "blog" ? `nav-link active` : `nav-link`}
            to="/blog"
            activeClassName="active"
          >
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={page === "contact" ? `nav-link active` : `nav-link`}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

MainMenu.propTypes = {
  page: PropTypes.string,
}

export default MainMenu
