import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="uk-container uk-margin-large-top uk-margin-large-bottom">

    <h1 className="uk-margin-medium-bottom">All Components</h1>
    <ul>
    <li><Link to="/components/">Component Listing</Link></li>
    </ul>

    <h1 className="uk-margin-medium-bottom">Example Templates</h1>
    <ul>
    <li><Link className="uk-text-large" to="/renewal-premium/">Renew Premium</Link></li>
    <li><Link className="uk-text-large" to="/login/">Login</Link></li>
    <li><Link className="uk-text-large" to="/billing-details/">Billing Details</Link></li>
    <li><Link className="uk-text-large" to="/payment-options/">Payment Options</Link></li>
    <li><Link className="uk-text-large" to="/retrieve-policy/">Retrieve Policy</Link></li>
    <li><Link className="uk-text-large" to="/confirm-details/">Confirm Details</Link></li>
    </ul>

    </div>
  </Layout>
)

export default IndexPage
