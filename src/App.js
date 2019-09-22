import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Create from './components/Create/Create';
import { HashRouter } from "react-router-dom";
import routes from './routes';


function App() {
  return (
    <HashRouter>{routes}</HashRouter>
  );
}

export default App;
