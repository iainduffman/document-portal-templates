import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="uk-container uk-margin-large-top uk-margin-large-bottom">


    <h1 className="uk-margin-medium-bottom">Document Portal</h1>


    {/* -------------------- Login --------------------  */}

    <div className="uk-card uk-card-default uk-width-1-1@m">
    <div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h3 className="uk-card-title uk-margin-remove-bottom">Login</h3>
    </div>
    </div>
    </div>
    <div className="uk-card-body">
    <div class="uk-child-width-expand uk-grid-small uk-text-left" uk-grid="true">

    <div class="uk-width-3-5@m uk-width-1-1@s">
    <div class="uk-card uk-card-body uk-padding-small">

    <div className="uk-margin">
    <label class="uk-form-label" for="form-stacked-text">Policy Reference</label>
    <input class="uk-input" type="text" placeholder="Enter your policy reference"></input>
    </div>

    <div className="uk-margin">
    <label class="uk-form-label" for="form-stacked-text">Postcode</label>
    <input class="uk-input" type="text" placeholder="Enter your postcode"></input>
    </div>

    <button class="uk-width-1-1@s uk-button uk-button-primary uk-margin-small-top">Login</button>

    </div>
    </div>

    <div class="uk-width-2-5@m uk-width-1-1@s">
    <div class="uk-card uk-padding-small uk-card-body">

    <h4>Once you’ve logged in you will be able to:</h4>  
    <p>Upload the documentation which has been requested in your welcome pack or renewal letter.</p>
    <p>Download and check all your important policy documents.</p>

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
