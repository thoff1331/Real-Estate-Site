import React, { Component } from "react";
import "../Login/Login.css";
import { Link, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import store, { logout } from "../../store";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { login } from "../../store";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      login: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log(this.state.email);
    console.log(store.getState());
    console.log(this.props);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    this.props
      .login(this.state.email, this.state.password)
      .then(req => {
        alert("Welcome Cheryl");
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        alert("incorrect Creditentials");
      });
    this.setState({
      username: "",
      password: "",
      login: false
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="login-box">
          <h4>Sign In to continue</h4>
          <input
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <input
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
          />
          <br />
          <button onClick={this.handleSubmit}>Login</button>
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(
  mapStateToProps,
  { login }
)(Login);
