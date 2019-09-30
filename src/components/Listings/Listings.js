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
this.state = {
  listings: []
};
}
componentDidMount() {
axios.get("/api/auth/listings").then(res => {
this.setState({
  listings: res.data
})  
})
}
render() {
  console.log(this.state.listings)
  let mappedListings = this.state.listings.map((val, index) => {
    return (
      <div>
      <h4 key={index}>{val.address}</h4>
      <h3>{val.askingprice}</h3>
      <Link to={`listing/${val.address}`}>
      <button>More Info</button>
      </Link>
      </div>
    )
  })
  return (
      <div> 
 
 <Navbar />
   <div>
 <h1>Listings Page </h1>
 {mappedListings}
   </div>
      </div>
  
   
  )   
 }
 }
 
export default Listings;