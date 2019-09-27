import React, { Component } from 'react';
import '../Login/Login.css';
import { Link, HashRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { logout } from '../../store';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';






class Login extends Component {
constructor(props) {
super(props);   
this.state = {
 email: "",
 passWord: "" 
};
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
componentDidMount() {
    console.log(this.state.email);

}

handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit() {
 if (this.state.passWord != "123" || this.state.email != "1@gmail.com" ) {
alert("Inccorrect Credentials!") }
 else {
  alert("Success")
    this.props.history.push("/create");
 
}
console.log("hit");   
 }
  
render() {
 return (
<div>
<Navbar />
    <div className='login-box'>
    <h4>Sign In to continue</h4>
   <input placeholder='Email' name='email' onChange={this.handleChange} value={this.state.email}/>
   <br />
   <input placeholder='Password' name='passWord' onChange={this.handleChange} value={this.state.passWord} type='password' />
   <br />
   <button onClick={this.handleSubmit}>Login</button>
   <br />
  
   </div>
</div>
 
  
 )   
}
}


export default Login;