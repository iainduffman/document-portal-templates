import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="uk-container uk-margin-large-top uk-margin-large-bottom">


    <h1 className="uk-margin-medium-bottom">Renewal Portal</h1>


    {/* -------------------- Payment Options --------------------  */}

    <div className="uk-card uk-card-default uk-width-1-1@m uk-width-1-1@s">
    <div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h3 className="uk-card-title uk-margin-remove-bottom">Payment Options</h3>
    </div>
    </div>
    </div>
    <div className="uk-card-body">

    <h4>How would you like to pay?</h4>
    <p>Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum.</p>

    <div class="uk-child-width-expand uk-grid-small uk-text-left uk-margin-medium-top" uk-grid="true">
    <div class="uk-width-1-1 uk-text-center">
    
    <div class="uk-child-width-expand@s uk-text-center" uk-grid="true">
    <div>
    <div class="uk-card border uk-card-default uk-card-body">
    <h3>Pay In Full</h3>
    <p>One payment only</p>
    
    <p>Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit varius</p>
    <h1 className="uk-text-bold uk-margin-remove">£150.86</h1>

    <div className="uk-margin uk-grid-small uk-child-width-auto">
    <label><input type="checkbox" defaultChecked={false}/> <a href="#">I agree to the terms and conditions</a></label>
    </div>

    <button class="uk-button uk-button-primary">Buy Now</button>

    </div>
    </div>
    <div>
    <div class="uk-card border uk-card-default uk-card-body">
    <h3>Pay In Instalments</h3>
    <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
    <label><input type="radio" name="radio2" defaultChecked={true}/> 8 instalments</label>
    <label><input type="radio" name="radio2" defaultChecked={true}/> 10 instalments</label>
    </div>
    <p>x10 Instalments<br></br>
    Deposit of £0.20<br></br>
    Total payable £1.16<br></br>
    <span class="uk-text-italic">Inclusive of 20% interest</span></p>
    <h1 className="uk-text-bold uk-margin-remove">£15.86</h1>

    <div className="uk-margin uk-grid-small uk-child-width-auto">
    <label><input type="checkbox" defaultChecked={true}/> <a href="#">I agree to the terms and conditions</a></label>
    </div>

    <button class="uk-button uk-button-primary">Buy Now</button>

    </div>
    </div>
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
