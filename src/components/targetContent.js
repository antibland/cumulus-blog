import React from "react"

const targetContent = () => {
  return (
    <>
      <section id="thanks" className="content-wrapper modal" aria-hidden="true">
        <form
          method="POST"
          action="//formspree.io/laura.gershman1@gmail.com"
          className="contact-form"
        >
          <div className="flash-message">
            <p className="larger">Message sent.</p>
            <p className="center">I'll get back to you shortly.</p>
          </div>
          <a aria-label="close modal" href="#close" className="cancel-x">
            <svg>
              <use xlinkHref="/svg-defs.svg#svg-close" />
            </svg>
          </a>
        </form>
      </section>
    </>
  )
}

export default targetContent
