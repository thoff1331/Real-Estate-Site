import React, { Component } from 'react';
import '../Home/Home.css';
import { Link, HashRouter } from 'react-router-dom';
import { connect} from 'react-redux';
import { logout } from '../../store';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';






class Home extends Component {
constructor(props) {
super(props);    
}
componentDidMount() {

}
render() {
 return (

  <div>
      <Navbar />
<h1>Home Page </h1>
  </div>
 
  
 )   
}
}


export default Home;