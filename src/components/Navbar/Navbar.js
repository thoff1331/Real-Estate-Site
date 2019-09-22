import React, { Component } from 'react';
import '../Navbar/Navbar.css';
import { Link, HashRouter } from 'react-router-dom';
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
   <HashRouter>
<div className='header'>
     <h1>Welcome to Cheryl Barrus Real Estate</h1>
     </div>
     <div className='links-container'>
       <Link className='links' to='/Login'>
         <h3>LOGIN</h3>
       </Link>
       <Link className='links' to='/'>
     <h3 >HOME</h3>
       </Link>
       <Link className='links' to='/listings'>
     <h3>LISTINGS</h3>
       </Link>
       <Link className='add-link' to='/create'>
     <h3>+</h3>
       </Link>
</div>
<div>
     </div>
    </HashRouter>
)   
}
}


export default Navbar;