import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const services = () => (
  <Layout page="services">
    <SEO title="Services" />

    <section className="long-message" id="services">
      <h3 className="vector-button email-button">
        <Link to="/contact" className="svg-icon">
          <svg>
            <use xlinkHref="/svg-defs.svg#svg-email" />
          </svg>
          <span className="button-text">Email me for a free consultation</span>
        </Link>
      </h3>

      <div className="content">
        <section>
          <h3>Basic Package:</h3>
          <ul>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Bookkeeping done on a weekly basis
            </li>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Profit and Loss, Balance Sheet, Statement of Cash Flows presented
              on a monthly basis
            </li>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Unlimited Email, Phone, Video Conferencing with me
            </li>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Quickbooks Online and Hubdoc Subscription Included in Package
            </li>
          </ul>
        </section>
        <section>
          <h3>Additional Services:</h3>
          <ul>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Accounts Payable Management/ Bill Pay
            </li>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Accounts Receivable Management/ Invoicing
            </li>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Payroll
            </li>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Issuance of 1099s
            </li>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Budgeting and Benchmarking
            </li>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Growth Projection
            </li>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Cash Flow Advising
            </li>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Inventory Management
            </li>
            <li>
              <svg aria-hidden="true" className="checkmark">
                <use xlinkHref="/svg-defs.svg#svg-checkmark" />
              </svg>
              Historical Cleanup
            </li>
          </ul>
        </section>

        <div className="standout">
          <p>All Services are Tax Deductable</p>
        </div>
      </div>
    </section>
  </Layout>
)

export default services
