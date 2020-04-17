import React from "react"

const targetContent = () => {
  return (
    <>
      <section id="thanks" class="content-wrapper modal" aria-hidden="true">
        <form
          method="POST"
          action="//formspree.io/laura.gershman1@gmail.com"
          class="contact-form"
        >
          <div class="flash-message">
            <p class="larger">Message sent.</p>
            <p>Thank you.</p>
          </div>
          <a aria-label="close modal" href="#close" class="cancel-x">
            <svg>
              <use xlinkHref="/svg-defs.svg#svg-close" />
            </svg>
          </a>
        </form>
      </section>

      <section id="about" class="content-wrapper modal full" aria-hidden="true">
        <div class="inner">
          <a aria-label="close modal" href="#close" class="cancel-x">
            <svg>
              <use xlinkHref="/svg-defs.svg#svg-close" />
            </svg>
          </a>
        </div>
        <div class="content">
          <h1 class="modal-header h1 no-animation">
            Meet the Owner, Laura Gershman
          </h1>
          <p>
            Having an entrepreneurial spirit myself, there is nothing I could
            imagine more satisfying than helping other small business owners
            succeed. Bookkeeping is a vital, yet commonly overlooked and
            misunderstood component that every single business must have to
            thrive. This may sound odd, but I get a lot of satisfaction from
            reconciling a bank account, and making sure every penny is accounted
            for! When I’m not arming small businesses with all of the info they
            need to make wise financial decisions, I enjoy coffee, biking,
            pinball, and playing oboe. I live in Portland, Oregon with my
            husband and two cats, Abe and Farfel.
          </p>
          <p>Laura is a certified Quickbooks Online Proadvisor.</p>
        </div>
      </section>
    </>
  )
}

export default targetContent
