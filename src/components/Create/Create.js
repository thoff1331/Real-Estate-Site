import React, { Component } from 'react';
import '../Create/Create.css';
import { Link, HashRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { logout } from '../../store';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';






class Create extends Component {
constructor(props) {
super(props);    
}
componentDidMount() {

}
render() {
 return (

    <div className='Create-box'>
       <Navbar /> 
    <h1>Create Page</h1> 
   </div>
 
  
 )   
}
}


export default Create;