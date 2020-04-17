import { Link } from "gatsby"
import React from "react"

const MainMenu = () => (
  <nav role="main">
    <ul className="nav-items">
      <li className="nav-item">
        <Link className="nav-link" to="/about" activeClassName="active">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/services" activeClassName="active">
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/blog" activeClassName="active">
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact" activeClassName="active">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default MainMenu
