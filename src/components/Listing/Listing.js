import React, { Component } from "react";
import "../Listing/Listing.css";
import { Link, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Listing: []
    };
  }
  componentDidMount() {
    axios.get(`/auth/listing/${this.props.match.params.id}`).then(res => {
      this.setState({
        Listing: res.data
      });
    });
  }

  render() {
    console.log(this.state.Listing);
    return (
      <div>
        <Navbar />
        <h1>Listing Page </h1>
      </div>
    );
  }
}

export default Listing;
