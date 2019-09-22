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
<div>
       <Navbar /> 

    <div>
    <ul className='Create-feilds'>
       <li>
          <label>Address</label>
          <input></input>
          
       </li>
         
       <li> 
       <label>City</label>
       <input></input>
       </li>
       <li>
         <label>State</label> 
         <input></input>
       </li>
       <li>
          <label>Zip Code</label>
          <input></input>
       </li>
       <li>
          <label>Asking Price</label>
          <input></input>
          
       </li>
       <li>
       <label>Description</label>
       <input></input>   
       </li>
      <label>Images Go Here</label>
      <button>Post Listing</button>
    </ul>
   </div>
</div>
 
  
 )   
}
}


export default Create;