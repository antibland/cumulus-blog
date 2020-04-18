import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const contact = () => {
  return (
    <Layout page="contact">
      <SEO title="Blog" />
      <section className="long-message" id="contact">
        <header>
          <h3 className="vector-button">
            <a className="svg-icon" href="tel:9713618263">
              <svg aria-hidden="true">
                <use xlinkHref="/svg-defs.svg#svg-phone" />
              </svg>
              <span className="button-text">Phone: (971) 361-8263</span>
            </a>
          </h3>
        </header>
        <div className="content align-center space-evenly">
          <p className="center">I'll get back to you shortly.</p>
          <form
            method="POST"
            action="//formspree.io/laura.gershman1@gmail.com"
            className="contact-form"
          >
            <input
              aria-label="your email."
              required
              autoCapitalize="none"
              type="email"
              name="email"
              placeholder="Email…"
            />
            <textarea
              aria-label="your message."
              required
              name="message"
              placeholder="Message…"
            ></textarea>
            <button type="submit">Send</button>
            <input type="hidden" name="_next" value="#thanks" />
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default contact
