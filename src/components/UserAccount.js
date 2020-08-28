import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { appContext } from "../utilities/appContext";
import styled from "styled-components";

// Styles for button moved from App.css to here
const UpdateButton = styled.button`
  width: 150px;
  height: 35px;
  padding-bottom: 5px;
  font-size: 1.25em;
  border-radius: 10px;
  color: white;
  background-color: rgba(29, 185, 84, 0.8);
`;

export default function UserAccount() {


  
  const initialState = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  
  const currentUser = useContext(appContext).currentUser;

  const parsedCurrentUser = (localStorage.getItem('currentUser'))
  console.log('current user is', JSON.parse(parsedCurrentUser))
  const newCurrentUser = JSON.parse(parsedCurrentUser)
  const savedSongs = useContext(appContext).savedSongs;
  useEffect(() => {
    console.log(savedSongs, savedSongs[0], savedSongs[0] )
    
  })

  const handleChanges = (e) => {
    console.log(e.target.value)
    const updatedInformation = {
      ...newCurrentUser, [e.target.name]:e.target.value
    }
  };

  const removeFromList = () => {
    //function to remove saved song from list
  };

  return (
    <div className="editinfo">
      <div>
  <h2>{newCurrentUser.username}'s Dashboard</h2>
        <h3>Saved Songs</h3>
        <div className="savedSongsContainer">
          {/* Map over res.data and create card for each. */}
        </div>
      </div>

      <div className="personalInfo">
        <h3> Edit Information </h3>
        <label>
          
          Username: <br />
          <input
            name="username"
            value={newCurrentUser.username}
            placeholder={newCurrentUser.username}
            onChange={handleChanges}
          >
           
          </input>
        </label>
        <label>
          
          Password: <br />
          <input
            type = 'password'
            name="username"
            value={newCurrentUser.password}
            placeholder={newCurrentUser.password}
            onChange ={handleChanges}
          >
            {currentUser.firstName}
          </input>
        </label>

        <UpdateButton>Update Information</UpdateButton>
      </div>
    </div>
  );
}
