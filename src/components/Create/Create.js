import React, { Component } from "react";
import "../Create/Create.css";
import { Link, HashRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { getSession } from "../../store";
import store, { logout } from "../../store";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOn: false,
      file: null,
      address: "",
      city: "",
      state: "",
      zipcode: "",
      yearbuilt: "",
      askingprice: "",
      description: "",
      image1: []
    };
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log(this.props.email);
    if (this.props.email) {
      this.setState({
        loggedOn: true
      });
    }
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("/api/auth/create", {
      address: this.state.address,
      city: this.state.city,
      zipcode: this.state.zipcode,
      yearbuilt: this.state.yearbuilt,
      state: this.state.state,
      description: this.state.description,
      askingprice: this.state.askingprice,
      image1: this.state.image1
    });
    this.props.history.push("/listings");
    console.log(this.state);
  }
  fileSelectedHandler = e => {
    this.setState({
      image1: e.target.files[0]
    });
  };
  fileUploadHandler = e => {
    const fd = new FormData();
    fd.append("image", this.state.image1, this.state.image1);
    axios
      .post("https://us-central1-reales-b8824.cloudfunctions.net/uploadFile")
      .then(res => {
        console.log(res);
      });
  };

  render() {
    console.log(this.state.image1);
    return (
      <div>
        <Navbar />

        <div>
          <ul className="Create-feilds">
            <li>
              <label>Address</label>
              <input
                value={this.state.address}
                onChange={this.handleChange}
                name="address"
              ></input>
            </li>

            <li>
              <label>City</label>
              <input
                value={this.state.city}
                onChange={this.handleChange}
                name="city"
              ></input>
            </li>
            <li>
              <label>State</label>
              <input
                value={this.state.state}
                onChange={this.handleChange}
                name="state"
              ></input>
            </li>
            <li>
              <label>Zip Code</label>
              <input
                value={this.state.zipcode}
                onChange={this.handleChange}
                name="zipcode"
              ></input>
            </li>
            <li>
              <label>Year Built</label>
              <input
                value={this.state.yearbuilt}
                onChange={this.handleChange}
                name="yearbuilt"
              ></input>
            </li>
            <li>
              <label>Asking Price</label>
              <input
                value={this.state.askingprice}
                onChange={this.handleChange}
                name="askingprice"
              ></input>
            </li>
            <li>
              <input
                onChange={(this.fileSelectedHandler, this.handleChange)}
                type="file"
                name="image1"
              ></input>
              <button onClick={this.handleFileUpload}>Upload</button>
            </li>
            <li>
              <textarea
                value={this.state.description}
                onChange={this.handleChange}
                name="description"
                placeholder="Descrive your Listing"
                className="home-description"
              ></textarea>
            </li>
            {this.props.email ? (
              <button onClick={this.handleSubmit}>Post Listing</button>
            ) : (
              alert("Please Log In")
            )}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.email
  };
}
export default connect(
  mapStateToProps,
  { getSession, logout }
)(Create);
