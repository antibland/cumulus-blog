import React from "react"
import PropTypes from "prop-types"

const footer = ({ siteTitle }) => {
  return (
    <footer>
      <div>
        <p>© {new Date().getFullYear() + ` ${siteTitle}, LLC`}</p>
        <ul className="social-items">
          <li className="social-item">
            <a
              href="https://proadvisor.intuit.com/app/accountant/search?searchId=laura-gershman"
              rel="noopener"
            >
              <img
                loading="lazy"
                alt="Alignable logo."
                src="/quickbooks_icon.png"
              />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.alignable.com/portland-or/cumulus-bookkeeping-solutions"
              rel="noopener"
            >
              <img loading="lazy" alt="Alignable logo." src="/alignable.png" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/laura-gershman-70586955"
              rel="noopener"
            >
              <svg aria-hidden="true">
                <use xlinkHref="/svg-defs.svg#svg-linkedin" />
              </svg>
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.facebook.com/Cumulus-Bookkeeping-Solutions-141002106557137/"
              rel="noopener"
            >
              <svg aria-hidden="true">
                <use xlinkHref="/svg-defs.svg#svg-facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="badges">
        <div className="block column">
          <img
            loading="lazy"
            srcSet="/HDCertification-Partner@2x.png 2x"
            src="/HDCertification-Partner.png"
            alt="Hubdoc Partner badge"
          />
          <img
            loading="lazy"
            srcSet="/HDCertification-QBO@2x.png 2x"
            src="/HDCertification-QBO.png"
            alt="Hubdoc Certified QBO ProdAdvisor"
          />
        </div>

        <a
          rel="noopener"
          href="//patriotsoftware.com/?pc=R88252&amp;utm_source=cumulusbookkeepingsolutions&amp;utm_medium=badge&amp;utm_content=advisor&amp;utm_campaign=royalty_program"
          title="Payroll and Accounting Software"
        >
          <picture>
            <source type="image/webp" srcSet="/advisor.webp 1x" />
            <img
              loading="lazy"
              src="/advisor.png"
              alt="Patriot Software Accounting Advisor"
              title="Patriot Software Accounting Advisor"
            />
          </picture>
        </a>

        <picture>
          <source
            type="image/webp"
            srcSet="/quickbooks_badge.webp 1x, /quickbooks_badge@2x.webp 2x"
          />
          <img
            loading="lazy"
            src="/quickbooks_badge.jpg"
            srcSet="/quickbooks_badge@2x.jpg 2x"
            alt="Quickbooks badge"
          />
        </picture>
      </div>
    </footer>
  )
}

footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default footer
