import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header'
import {Route, Switch} from 'react-router-dom'

import PrivateRoute from './utilities/PrivateRoute';

import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Search from './components/Search'
import Footer from "./components/Footer"
import UserAccount from './components/UserAccount';




function App() {




  return (
    <div className="App">
    <Header />
   
      <PrivateRoute path="/user_account" component={UserAccount}/>
      <Route exact path = '/' component = {Home}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/login" component={Login}/>
      <Route path="/search" component={Search}/>
    
    <Footer />
    </div>
    
  );
}

export default App;
