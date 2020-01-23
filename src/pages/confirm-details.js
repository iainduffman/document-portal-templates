import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="uk-container uk-margin-large-top uk-margin-large-bottom">


    <h1 className="uk-margin-medium-bottom">Renewal Portal</h1>


    {/* -------------------- Detail Check --------------------  */}

    <div className="uk-card uk-card-default uk-width-1-1@m">
    <div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h3 className="uk-card-title uk-margin-remove-bottom">Please can you confirm that these details are correct?</h3>
    </div>
    </div>
    </div>
    <div className="uk-card-body">
    <div class="uk-child-width-expand uk-grid-small uk-text-left" uk-grid="true">
    <div class="uk-width-1-1">
    <div class="uk-card uk-card-body uk-padding-small">
    <div class="uk-column-1-3@m uk-column-1-1@s cols uk-margin-medium-bottom">
    
    <ul>
    <li>Name</li>
    <li class="uk-text-bold">Dean Richardson</li>
    </ul>

    <ul>
    <li>Policy Ref</li>
    <li class="uk-text-bold">RIDX07PC01</li>
    </ul>

    <ul>
    <li>Date of Birth</li>
    <li class="uk-text-bold">18-07-1990</li>
    </ul>

    </div>
    <button class="uk-button uk-button-primary uk-margin-right">Confirm</button>
    <button class="uk-button uk-button-primary negative">Cancel</button>
    </div>
    </div>
    </div>
    </div>
    </div>


    </div>

  </Layout>
)

export default IndexPage
