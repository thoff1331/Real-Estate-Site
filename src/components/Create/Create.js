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
this.state = {
   file: null,
   address: '',
   city: '',
   state: '',
   zipcode: '',
   yearbuilt: '',
   askingprice: '',
   description: ''

};
this.handleFileUpload = this.handleFileUpload.bind(this);
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e) {
   this.setState({ [e.target.name]: e.target.value });
 }
 handleFileUpload(e) {
   this.setState({ file: e.target.files });
 }
 submitFile = (event, id) => {
   event.preventDefault();
   if (!this.state.file) {
     alert("Please Upload a Profile Picture");
   } else {
     event.preventDefault();
     const formData = new FormData();
     formData.append("file", this.state.file[0]);
     axios
       .post("/auth/addProfilePic", formData, {
         headers: {
           "Content-Type": "multipart/form-data"
         }
       })
      
   }
 };

 handleSubmit(e) {
   e.preventDefault()
   axios.post("/api/auth/create", {
     address: this.state.address,
     city: this.state.city,
     zipcode: this.state.zipcode,
     yearbuilt: this.state.yearbuilt,
     state: this.state.state,
     description: this.state.description,
     askingprice: this.state.askingprice
   })
   this.props.history.push("/listings");
   console.log(this.state)
 }

render() {
 return (
<div>
       <Navbar /> 

    <div>
    <ul className='Create-feilds'>
       <li>
          <label>Address</label>
          <input value={this.state.address} onChange={this.handleChange} name='address'></input>
          
       </li>
         
       <li> 
       <label>City</label>
       <input value={this.state.city} onChange={this.handleChange}  name='city'></input>
       </li>
       <li>
         <label>State</label> 
         <input value={this.state.state} onChange={this.handleChange}  name='state'></input>
       </li>
       <li>
          <label>Zip Code</label>
          <input value={this.state.zipcode} onChange={this.handleChange}  name='zipcode'></input>
       </li>
       <li>
          <label>Year Built</label>
          <input value={this.state.yearbuilt} onChange={this.handleChange}  name='yearbuilt'></input>
          
       </li>
       <li>
          <label>Asking Price</label>
          <input value={this.state.askingprice} onChange={this.handleChange}  name='askingprice'></input>
          
       </li>
       <li>
     
       <input onChange={this.handleChange}  onChange={this.handleFileUpload} type="file"></input>   
       </li>
       <li>
       <textarea value={this.state.description}  onChange={this.handleChange} name='description' placeholder='Descrive your Listing' className='home-description'></textarea>   
       </li>
      <button onClick={this.handleSubmit}>Post Listing</button>
    </ul>
   </div>
</div>
 
  
 )   
}
}


export default Create;