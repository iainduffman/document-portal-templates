import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
<header className="primaryHeader">
<nav className="uk-container" data-uk-navbar>

<div className="uk-navbar-left">
{/* <Link to="/"><img id="logo" width="184" height="37" src="" /></Link> */}
  <ul className="uk-navbar-nav primary-nav">
  <li><Link to="/"><img class="logo" style={{width: 200, height: 88}} src={require('../images/RCIB_Logo.png')} /></Link></li>
  
  </ul>
  </div>

  <div class="uk-navbar-right">
  <ul class="uk-navbar-nav uk-navbar-nav">
  <li class="call-us-header"><a class="uk-text-bold" href="#"><span class="uk-margin-small-right uk-icon" uk-icon="receiver"></span>0845 3824 299 </a></li>
  </ul>
  </div>

</nav>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
