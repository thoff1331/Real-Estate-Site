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
   file: null
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

 handleSubmit() {
   this.props.history.push("/listings");
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
          <label>Year Built</label>
          <input></input>
          
       </li>
       <li>
          <label>Asking Price</label>
          <input></input>
          
       </li>
       <li>
     
       <input onChange={this.handleFileUpload} type="file"></input>   
       </li>
       <li>
       <input placeholder='Descrive your Listing' className='home-description'></input>   
       </li>
      <button onClick={this.handleSubmit}>Post Listing</button>
    </ul>
   </div>
</div>
 
  
 )   
}
}


export default Create;