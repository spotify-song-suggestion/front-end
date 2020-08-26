import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import { appContext } from './utilities/appContext';
import PrivateRoute from "./utilities/PrivateRoute";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Search from "./components/Search";
import Footer from "./components/Footer";
import UserAccount from "./components/UserAccount";

function App() {

  const loggedIn = () => {
    if(localStorage.getItem('Logged In') === 'true') {
        return true;
    }
      return false;
  }
  
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn());
  const [currentUser, setCurrentUser] = useState({});
  
  const [savedSongs, setSavedSongs] = useState([]);



  return (
    <div className="App">
      <Header />

      <appContext.Provider value = {{
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        savedSongs: savedSongs,
        setSavedSongs: setSavedSongs

      }}>
        <PrivateRoute path="/user_account" component={UserAccount} />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
      </appContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
