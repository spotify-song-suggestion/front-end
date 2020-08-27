import React, { useState, useEffect } from "react";
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

  const [currentUser, setCurrentUser] = useState({ initialState });

  const handleChanges = (e) => {
    const updateUserInfo = { ...currentUser, [e.target.name]: e.target.value };
  };

  const removeFromList = () => {
    //function to remove saved song from list
  };

  return (
    <div className="editinfo">
      <div>
        <h2>'s aDashboard</h2>
        <h3>Saved Songs</h3>
        <div className="savedSongsContainer">
          {/* Map over res.data and create card for each. */}
        </div>
      </div>

      <div className="personalInfo">
        <label>
          {" "}
          First Name: <br />
          <input
            name="firstName"
            value={currentUser.firstName}
            placeholder={currentUser.firstName}
            onclick={handleChanges}
          >
            {currentUser.firstName}
          </input>
        </label>

        <label>
          {" "}
          Last Name: <br />
          <input
            name="email"
            value={currentUser.firstName}
            placeholder={currentUser.firstName}
            onclick={handleChanges}
          >
            {currentUser.firstName}
          </input>
        </label>

        <label>
          {" "}
          Email: <br />
          <input
            name="username"
            value={currentUser.firstName}
            placeholder={currentUser.firstName}
            onclick={handleChanges}
          >
            {currentUser.firstName}
          </input>
        </label>
        <label>
          {" "}
          Username: <br />
          <input
            name="username"
            value={currentUser.firstName}
            placeholder={currentUser.firstName}
            onclick={handleChanges}
          >
            {currentUser.firstName}
          </input>
        </label>
        <label>
          {" "}
          Password: <br />
          <input
            name="username"
            value={currentUser.firstName}
            placeholder={currentUser.firstName}
            onclick={handleChanges}
          >
            {currentUser.firstName}
          </input>
        </label>

        <UpdateButton>Update Information</UpdateButton>
      </div>
    </div>
  );
}
