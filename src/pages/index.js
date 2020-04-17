import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout page="home">
    <SEO title="Home" />

    <section className="long-message">
      <h3 className="header h3">How can bookkeeping benefit your business?</h3>

      <ul>
        <li>
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Makes tax time a breeze. Instead of scrambling for documents,
          receipts, and statements at the end of the year, a good bookkeeper
          will keep everything safe and organized for you, and make sure you are
          alerted of errors before they become a problem. When it is time to
          file taxes, a good bookkeeper will provide you with a few reports to
          give to your tax preparer. It is as easy as that. You can save
          hundreds or even thousands of dollars in accountants’ fees by hiring a
          bookkeeper.
        </li>
        <li>
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Track the health of your business. A professional bookkeeper will
          provide you with several financial statements each month so that you
          can accurately see how much money is coming into your business, how
          much your business spends, and where your cash is flowing.
        </li>
        <li>
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Catch errors. Because your bookkeeper is checking that every penny
          that comes into or out of your business matches your monthly
          statements, they will catch any errors that you may be too busy to
          notice, saving you from potential problems.
        </li>
        <li>
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Protect yourself. In the dreaded event of an IRS audit, having your
          books kept accurately and your receipts organized will save you time,
          headaches, and potentially thousands of dollars.
        </li>
        <li>
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          If you ever plan on applying for a business loan or selling your
          business in the future, you are going to be asked to produce some
          pretty detailed financial statements. Good bookkeeping practices are
          essential for easily producing this information.
        </li>
        <li>
          <svg aria-hidden="true" className="checkmark">
            <use xlinkHref="/svg-defs.svg#svg-checkmark" />
          </svg>
          Oh, and it’s tax deductable!
        </li>
      </ul>

      <h3 className="header h3">
        I help small businesses maximize profits by taking the guesswork out of
        bookkeeping.
      </h3>

      <p>
        You wear many hats as a small business owner. You focus your time and
        energy on getting and keeping customers and providing the best service
        for your clients. Generally, you are pretty organized and proactive when
        it comes to your business. You know that bookkeeping must get done in
        order to file your taxes. Maybe you have been trying to keep up with
        your books but you have a nagging feeling you are missing something or
        not doing it right. Or maybe you are delegating the bookkeeping to a
        family member or employee and trusting they are doing it right.
        Or...maybe you have given up or never even started bookkeeping{" "}
        <span role="img" aria-label="Thinking emoji">
          😤
        </span>
        . You wait all year until tax time and then plop a cardboard box of
        statements and receipts on your CPA’s desk. Do you remember the look on
        their face? Do you remember the bill they charged you to do basically a
        year’s worth of bookkeeping in a very short amount of time?
      </p>

      <p>If this sounds like you, read on.</p>

      <blockquote className="pull-quote">
        <q>
          Just because you outsource your bookkeeping does not mean you will be
          kept in the dark about your finances. A good bookkeeper keeps an open
          line of communication and has regular check-ins with you.
        </q>
      </blockquote>

      <p>
        Imagine a world where tax time rolls around and you feel no stress. Your
        bookkeeper has been accurately tracking everything all year. She simply
        emails a few reports to your CPA, and your taxes are done!
      </p>

      <h3 className="header h3">
        How does this Virtual Bookkeeping thing work?
      </h3>

      <p>
        First, your bookkeeper will be setting you up with a cloud-based
        accounting software account and secure document storage. Your bank and
        credit card accounts will then be integrated with your accounting
        software. Got a shoebox of receipts? And yes, you DO need to keep your
        receipts! There are mobile apps that let you snap pictures of receipts,
        bills, and invoices and attaches them to the proper place in your
        accounting software. Pretty cool, right? We will be in contact via
        email, phone, video conferencing...there are many options for staying
        connected! Just because you outsource your bookkeeping does not mean you
        will be kept in the dark about your finances. A good bookkeeper keeps an
        open line of communication and has regular check-ins with you.
      </p>
    </section>
  </Layout>
)

export default IndexPage
