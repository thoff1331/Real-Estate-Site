import React, { Component } from "react";
import "../Navbar/Navbar.css";
import { Link, HashRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store";
import axios from "axios";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  linkToFacebook = () => {
    window.open("https://www.facebook.com/?ref=logo");
  };
  linkToInstagram = () => {
    window.open("https://www.instagram.com/");
  };
  linkToTwitter = () => {
    window.open("https://twitter.com/?lang=en");
  };
  handleLogout = () => {
    this.props.logout().then(alert("You've Logged Out"));
  };
  render() {
    return (
      <HashRouter>
        <div className="header">
          <h1>Welcome to Cheryl Barrus Real Estate</h1>
        </div>
        <div className="links-container">
          <Link className="links" to="/Login">
            <h3>LOGIN</h3>
          </Link>
          <Link className="links" to="/">
            <h3>HOME</h3>
          </Link>
          <Link className="links" to="/listings">
            <h3>LISTINGS</h3>
          </Link>
          <Link className="add-link" to="/create">
            <h3>+</h3>
          </Link>
          <Link className="links" to="/contact">
            <h3>Contact Me</h3>
          </Link>
          <Link className="links" to="/">
            <h3 onClick={this.handleLogout}>LOGOUT</h3>
          </Link>
          <div className="social-media">
            <img
              onClick={this.linkToFacebook}
              className="social-media-logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEVCZ7L///80Xq+aqtG9x+A3YK8rWazDzOOVps8/ZbE7Y7Dx8/hVdbi3w953j8VPcbfU2+xIbLTr7vbg5fEWT6lee7uCmMnM1eitutpjf71vicH5+vyIncva4O6isdQiVKrLyjydAAACWUlEQVR4nO3cbZOyIBQGYGCDhETBtrYy6///ywd3ZufZWkwHD4ed2XP3oS/OeInIWyHjnPe2aTVDj24b24fTM85dLQw+YIwRtRsJjhUCfCKY46yvCwqCoe6ZFSUFjAnLmqKFEIqhYW1ZAQuAAk/jY4oDKBQK5e9FazZ+wneJRlhrqYT2vg3xnmkjlRJS4vXKRvrD0X4MXbcL6br94NzH5lQdzzjnD9d/sXseTV9j3BIpbl38/CE7BIKR12kACsH47QsABkH63UtBfoJoXgPyE0QzUwbZCbqeFeQm3IdZQWaCfJsX5CXodv42ZCaI0wJBVsKSupiZIJbUhLyE+0TXiEcw9SJBToKslhEyjhfEZuqyB3t7+5/K5yuFeFXobwcjpfiWbAKto4LuoNDGzvHa2J8l0vlHwiVGOGGu5cljjHDGXMsT11hNQJ1DRZsFh7qgGe0htqjLulHCBvF5mCL8glIgAhGIQIRfSMjaQEv1mPdYT2nf1Y+Add+i2j4lNq/vng8KAfs5UL1e05oO3DQimbAHm0YkEwawsVwyYQv2kCQTTuUJVXnCBWxQnUyA+8dMMkFBCZIJXXmCK08AnF+lEuCahWQCXLOQTAD881AqAXDNI5Gw82CCZALcM5lK2N/hCKapHnONmdzTQdURcuXHyMeo2Ah6c386KuvaEy30EIEIRCACEYhABCIQgQhEIAIRiEAEIhCBCET4HogfzVYRNMj23lWEFmST8xqCaUC2eq8hCMv6dn0xrCCMG94htv2nEz63/XPu2rUvP0glfL38AOAVEGmEr1dA/AMqRyQYkXy+kQAAAABJRU5ErkJggg=="
            />
            <img
              onClick={this.linkToInstagram}
              className="social-media-logo"
              src="data:image/jpeg;base64,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"
            />

            <img
              onClick={this.linkToTwitter}
              className="social-media-logo"
              src="data:image/jpeg;base64,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"
            />
          </div>
        </div>
        <div></div>
      </HashRouter>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    email: reduxState.email
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
