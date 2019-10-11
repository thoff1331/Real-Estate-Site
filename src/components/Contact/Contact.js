import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import "../Contact/Contact.css";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="contact-info">
          <h1>Contact me </h1>
          <img src="https://www.cherylbarrustooelerealestate.com/images/agent.png" />
          <a href="435-840-4466" data-rel="external">
            Phone: 435-840-4466
          </a>
          <h3>Fax: (435) 884-3900 </h3>
          <a
            href="cheryl@realtypath.com
"
            data-rel="external"
          >
            Email: cheryl@realtypath.com
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
