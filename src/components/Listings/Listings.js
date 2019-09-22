import React, { Component } from 'react';
import '../Listings/Listings.css';
import { Link, HashRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { logout } from '../../store';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';






class Listings extends Component {
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
<h1>Listings Page </h1>
  </div>
     </div>
 
  
 )   
}
}


export default Listings;