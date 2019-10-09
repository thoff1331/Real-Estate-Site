import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <h1>Contact me Page </h1>
        </div>
      </div>
    );
  }
}

export default Contact;
