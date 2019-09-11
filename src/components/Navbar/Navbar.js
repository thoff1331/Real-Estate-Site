import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { logout } from '../../store';
import axios from 'axios';





class Navbar extends React.Component {
constructor(props) {
super(props);    
}
componentDidMount() {

}
render() {
 return (
   <nav>
   <input placeholder='Email' />
   <input placeholder='Password' />
   <button>Login</button>
   <button> Forgot Password?</button> 
   </nav>  
 )   
}
}


export default Navbar;