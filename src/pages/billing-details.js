import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="uk-container uk-margin-large-top uk-margin-large-bottom">


    <h1 className="uk-margin-medium-bottom">Document Portal</h1>


    {/* -------------------- Billing Details --------------------  */}

    <div className="uk-card uk-card-default uk-width-1-1@m">
    <div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h3 className="uk-card-title uk-margin-remove-bottom">Billing Details</h3>
    </div>
    </div>
    </div>
    <div className="uk-card-body">
    <div class="uk-child-width-expand uk-grid-small uk-text-left" uk-grid="true">

    <div class="uk-width-1-1">
    <div class="uk-card uk-card-body uk-padding-small">

    <p>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>


    <div className="uk-margin">
    <label class="uk-form-label" for="form-stacked-text">Cardholders Name</label>
    <input class="uk-input" type="text" placeholder="Name"></input>
    </div>

    <div className="uk-margin">
    <label class="uk-form-label" for="form-stacked-text">Cardholders Postcode</label>
    <input class="uk-input" type="text" placeholder="Postcode"></input>
    </div>

    <div className="uk-margin">
    <label class="uk-form-label" for="form-stacked-text">Cardholders Address</label>
    <input class="uk-input uk-margin-bottom" type="text" placeholder="Address Line 1"></input>
    <input class="uk-input uk-margin-bottom" type="text" placeholder="Address Line 2"></input>
    <input class="uk-input uk-margin-bottom" type="text" placeholder="Town"></input>
    <input class="uk-input uk-margin-bottom" type="text" placeholder="County"></input>
    </div>

    <button class="uk-width-1-1@s uk-width-auto@m uk-button uk-button-primary">Confirm</button>

    </div>
    </div>

    </div>
    </div>
    </div>

    </div>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
