import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="uk-container uk-margin-large-top uk-margin-large-bottom">


    <h1 className="uk-margin-medium-bottom">Renewal Portal</h1>


    {/* -------------------- Renewal Premium --------------------  */}

    <div className="uk-card uk-card-default uk-width-1-1@m uk-width-1-1@s">
    <div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h3 className="uk-card-title uk-margin-remove-bottom">Your Renewal Premium</h3>
    </div>
    </div>
    </div>
    <div className="uk-card-body">
    <div class="uk-child-width-expand uk-grid-small uk-text-left" uk-grid="true">

    <div class="uk-width-2-3@m uk-width-1-1@s">
    <div class="uk-card uk-card-body uk-padding-small">

    <p>Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.</p>

    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.</p>

    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam.</p>
  
    </div>
    </div>

    <div class="uk-width-1-3@m uk-width-1-1@s">
    <div class="uk-card uk-padding-small uk-card-body">

    <ul className="custDetails">
    <li><p>Renewal Premium</p></li>
    <li><h1 className="uk-text-bold">£150.86</h1></li>
    </ul>

    <ul className="custDetails">
    <li><p>Policy Holder</p></li>
    <li><p class="uk-text-bold">Dean Richardson</p></li>
    </ul>

    <ul className="custDetails">
    <li><p>Vehicle</p></li>
    <li><p class="uk-text-bold">1990 Autin Mini</p></li>
    </ul>

    <ul className="custDetails">
    <li><p>Cover Level</p></li>
    <li><p class="uk-text-bold">Comprehensive</p></li>
    </ul>

    <ul className="custDetails">
    <li><p>Excess</p></li>
    <li><p class="uk-text-bold">£100</p></li> 
    </ul>

    <ul className="custDetails">
    <li><p>Renewal Date</p></li>
    <li><p class="uk-text-bold">28/02/2020</p></li> 
    </ul>

    </div>

    </div>
    </div>
    </div>

    <div class="uk-card-footer uk-text-right">
    <button class="uk-width-1-1@s uk-width-auto@s uk-button uk-button-primary uk-margin-right">Renew Now</button>
    <button class="uk-width-1-1@s uk-width-auto@s uk-button uk-button-primary negative">Do Not Renew</button>
    </div>

    </div>

    </div>

  </Layout>
)

export default IndexPage
