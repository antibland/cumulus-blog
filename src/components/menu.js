import { Link } from "gatsby"
import React from "react"

const MainMenu = () => (
  <nav role="main">
    <ul className="nav-items">
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/services">
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/blog">
          Blog
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default MainMenu
