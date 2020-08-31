import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
<<<<<<< HEAD
import { Route } from "react-router-dom";
=======
import { Route} from "react-router-dom";
>>>>>>> 3857eba338a9a3b43d8d5b91c91b0cfdef2cda96
import { appContext } from "./utilities/appContext";
import PrivateRoute from "./utilities/PrivateRoute";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Search from "./components/Search";
import Footer from "./components/Footer";
import UserAccount from "./components/UserAccount";
import styled from "styled-components";

const Content = styled.div`
  margin-bottom: 50px;
`;

function App() {

  const loggedIn = () => {
    if (localStorage.getItem("Logged In") === "true") {
      return true;
    }
    return false;
  };

  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn());
  const [currentUser, setCurrentUser] = useState({});
  const [savedArtists, setSavedArtists] = useState([])
  const [savedSongs, setSavedSongs] = useState([]);

  return (
    <div className="App">
      
        <appContext.Provider
          value={{
            isLoggedIn: isLoggedIn,
            setIsLoggedIn: setIsLoggedIn,
            currentUser: currentUser,
            setCurrentUser: setCurrentUser,
            savedSongs: savedSongs,
            setSavedSongs: setSavedSongs,
            savedArtists: savedArtists,
            setSavedArtists: setSavedArtists,
          }}
        >
          <Header />
         <Content>
            <PrivateRoute path="/user_account" component={UserAccount} />
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
          </Content>
      <Footer />
        </appContext.Provider>
    
    </div>
  );
}

export default App;
