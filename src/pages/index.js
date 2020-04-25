import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const CovidMessage = () => (
  <div className="covid-message">
    <p>
      The world is changing rapidly and I do my best to keep you informed of
      what your business needs to know. Visit <Link to="/blog">the blog</Link>{" "}
      for details.
    </p>
  </div>
)

const IndexPage = () => (
  <Layout page="home">
    <SEO title="Home" />
    <CovidMessage />

    <section className="long-message">
      <h3 className="header h3">
        I work with my clients directly, every step of the way.
      </h3>
      <div className="index-message-container">
        <figure className="laura-cropped">
          <picture>
            <source
              type="image/webp"
              srcSet="/laura_cropped.webp 1x, /laura_cropped.webp 2x"
            />
            <img
              loading="lazy"
              src="/laura_cropped.jpg"
              alt="Laura Gershman, owner"
            />
          </picture>
          <figcaption>Laura Gershman, owner</figcaption>
        </figure>
        <div className="content">
          <p>
            You wear many hats as a small business owner. You focus your time
            and energy on getting and keeping customers and providing the best
            service for your clients. Generally, you are pretty organized and
            proactive when it comes to your business. Maybe you have been trying
            to keep up with your books but you have a nagging feeling you are
            missing something or not doing it right. Or maybe you are delegating
            the bookkeeping to a family member or employee and trusting they are
            doing it right. Or...maybe you have given up or never even started
            bookkeeping{" "}
            <span role="img" aria-label="Thinking emoji">
              😤
            </span>
            .
          </p>
        </div>
      </div>
      <blockquote className="pull-quote">
        <q>
          Just because you outsource your bookkeeping does not mean you will be
          kept in the dark about your finances. A good bookkeeper keeps an open
          line of communication and has regular check-ins with you.
        </q>
      </blockquote>
      <h3 className="header h3">My Services</h3>
      <ul>
        <li>
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Quickbooks Set-up, Clean-up, Training, Conversion to the cloud
        </li>
        <li>
          {" "}
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Monthly categorization and reconciliation
        </li>
        <li>
          {" "}
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Payroll set-up
        </li>
        <li>
          {" "}
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Issuance of 1099s
        </li>
        <li>
          {" "}
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Receipt management
        </li>
        <li>
          {" "}
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Accounts Receivable workflow and training
        </li>
        <li>
          {" "}
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Accounts Payable management
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
