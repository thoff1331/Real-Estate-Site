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
}
componentDidMount() {

}
render() {
 return (
<div>
<Navbar />
    <div className='login-box'>
    <h4>Sign In to continue</h4>
   <input placeholder='Email' />
   <br />
   <input placeholder='Password' />
   <br />
   <button>Login</button>
   <br />
   <button> Forgot Password?</button> 
   </div>
</div>
 
  
 )   
}
}


export default Login;