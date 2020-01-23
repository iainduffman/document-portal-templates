import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="uk-container uk-margin-large-top uk-margin-large-bottom">


    <h1 className="uk-margin-medium-bottom">Renewal Portal Components</h1>


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

    {/* --------------- Spacer --------------- */}
    <div className="uk-margin-large-top uk-margin-large-bottom"></div>
    {/* --------------- Spacer --------------- */}


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

    
    {/* --------------- Spacer --------------- */}
    <div className="uk-margin-large-top uk-margin-large-bottom"></div>
    {/* --------------- Spacer --------------- */}


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

    {/* --------------- Spacer --------------- */}
    <div className="uk-margin-large-top uk-margin-large-bottom"></div>
    {/* --------------- Spacer --------------- */}


    {/* -------------------- Renewal Statement Check --------------------  */}

    <div className="uk-card uk-card-default uk-width-1-1@m">
    <div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h3 className="uk-card-title uk-margin-remove-bottom">Are the details in your Renewal Statement of Fact correct?</h3>
    </div>
    </div>
    </div>
    <div className="uk-card-body">
    <div class="uk-child-width-expand uk-grid-small uk-text-left" uk-grid="true">

    <div class="uk-width-1-1">
    <div class="uk-card uk-card-body uk-padding-small">

    <p>This document is attached to your renewal email</p>

    <button class="uk-button uk-button-primary uk-margin-right">Yes</button>
    <button class="uk-button uk-button-primary negative">No</button>

    </div>
    </div>

  
    </div>
    </div>
    </div>

    
    {/* --------------- Spacer --------------- */}
    <div className="uk-margin-large-top uk-margin-large-bottom"></div>
    {/* --------------- Spacer --------------- */}


    {/* -------------------- Retrieve Policy --------------------  */}

    <div className="uk-card uk-card-default uk-width-1-1@m">
    <div className="uk-card-header">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h3 className="uk-card-title uk-margin-remove-bottom">Retrieve Your Policy</h3>
    </div>
    </div>
    </div>
    <div className="uk-card-body">
    <div class="uk-child-width-expand uk-grid-small uk-text-left" uk-grid="true">

    <div class="uk-width-3-5@m uk-width-1-1@s">
    <div class="uk-card uk-card-body uk-padding-small">

    <p>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>


    <div className="uk-margin">
    <label class="uk-form-label" for="form-stacked-text">Broker Reference</label>
    <input class="uk-input" type="text" placeholder="Enter your broker reference"></input>
    </div>

    <div className="uk-margin">
    <label class="uk-form-label" for="form-stacked-text">Postcode</label>
    <input class="uk-input" type="text" placeholder="Enter your postcode"></input>
    </div>

    <button class="uk-width-1-1@s uk-button uk-button-primary uk-margin-small-top">Retrieve Policy</button>

    </div>
    </div>

    <div class="uk-width-2-5@m uk-width-1-1@s">
    <div class="uk-card uk-padding-small uk-card-body">
    <h4>What is a broker ref?</h4>  
    <p>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </p>

    <h4>What is a broker ref?</h4>  
    <p>Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </p>

    </div>
    </div>
    </div>
    </div>
    </div>

    <h1 className="uk-margin-medium-bottom uk-margin-large-top">Document Portal Components</h1>


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

    {/* --------------- Spacer --------------- */}
    <div className="uk-margin-large-top uk-margin-large-bottom"></div>
    {/* --------------- Spacer --------------- */}


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

    {/* --------------- Spacer --------------- */}
    <div className="uk-margin-large-top uk-margin-large-bottom"></div>
    {/* --------------- Spacer --------------- */}


    <h1 className="uk-margin-medium-bottom uk-margin-large-top">Cards</h1>

    <div class="uk-child-width-expand@s uk-text-left" uk-grid="true">
    <div>

    {/* -------------------- Upload Documents --------------------  */}

    <div className="uk-card uk-card-default uk-width-1-1@m">
    <div className="uk-card-header uk-padding-small">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h3 className="uk-card-title uk-margin-remove-bottom">Upload Documents</h3>
    </div>
    </div>
    </div>
    <div className="uk-card-body uk-padding-small">
    <div class="uk-child-width-expand uk-grid-small uk-text-left" uk-grid="true">
    <div class="uk-width-1-1">
    <div class="uk-card uk-card-body uk-padding-small">
    <p className="uk-text-left">Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum.</p>
    <button class="uk-button uk-width-1-1 uk-button-primary uk-margin-right">Upload Documents</button>
    </div>
    </div>
    </div>
    </div>
    </div>

    </div>
    <div>

    {/* -------------------- View Existing Docs --------------------  */}

    <div className="uk-card uk-card-default uk-width-1-1@m">
    <div className="uk-card-header uk-padding-small">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h3 className="uk-card-title uk-margin-remove-bottom">View Existing Docs</h3>
    </div>
    </div>
    </div>
    <div className="uk-card-body uk-padding-small">
    <div class="uk-child-width-expand uk-grid-small uk-text-left" uk-grid="true">
    <div class="uk-width-1-1">
    <div class="uk-card uk-card-body uk-padding-small">
    <p className="uk-text-left">Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum.</p>
    <button class="uk-button uk-width-1-1 uk-button-primary uk-margin-right">View documents</button>
    </div>
    </div>
    </div>
    </div>
    </div>

    </div>
    </div>


    {/* -------------------- 3 Column Cards --------------------  */}

    <div class="uk-child-width-expand@s uk-text-left" uk-grid="true">
    
    <div>
    <div className="uk-card uk-card-default uk-width-1-1@m uk-text-center">
    <div className="uk-card-header uk-padding-small">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h5 className="uk-margin-remove-bottom">Policy Holders License</h5>
    </div>
    </div>
    </div>
    <div className="uk-card-body uk-padding-small">
    <div class="uk-child-width-expand uk-grid-small uk-text-left" uk-grid="true">
    <div class="uk-width-1-1 uk-text-center">
    <div class="uk-card uk-card-body uk-padding-small">
    <span uk-icon="icon: search; ratio: 3.5"></span>
    <p>Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis.</p>
    <button class="uk-button uk-width-1-1 uk-button-primary uk-margin-right">Upload</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>


    <div>
    <div className="uk-card uk-card-default uk-width-1-1@m uk-text-center">
    <div className="uk-card-header uk-padding-small">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h5 className="uk-margin-remove-bottom">No claims Bonus</h5>
    </div>
    </div>
    </div>
    <div className="uk-card-body uk-padding-small">
    <div class="uk-child-width-expand uk-grid-small uk-text-left" uk-grid="true">
    <div class="uk-width-1-1 uk-text-center">
    <div class="uk-card uk-card-body uk-padding-small">
    <span uk-icon="icon: calendar; ratio: 3.5"></span>
    <p>Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis.</p>
    <button class="uk-button uk-width-1-1 uk-button-primary uk-margin-right">Upload</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>


    <div>
    <div className="uk-card uk-card-default uk-width-1-1@m uk-text-center">
    <div className="uk-card-header uk-padding-small">
    <div className="uk-grid-small uk-flex-middle" uk-grid="true">
    <div className="uk-width-auto">
    </div>
    <div className="uk-width-expand">
    <h5 className="uk-margin-remove-bottom">Prop Required</h5>
    </div>
    </div>
    </div>
    <div className="uk-card-body uk-padding-small">
    <div class="uk-child-width-expand uk-grid-small uk-text-left" uk-grid="true">
    <div class="uk-width-1-1 uk-text-center">
    <div class="uk-card uk-card-body uk-padding-small">
    <span uk-icon="icon: plus-circle; ratio: 3.5"></span>
    <p>Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis.</p>
    <button class="uk-button uk-width-1-1 uk-button-primary uk-margin-right">Upload</button>
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
