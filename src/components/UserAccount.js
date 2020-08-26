import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { appContext } from '../utilities/appContext'



export default function UserAccount() {

    const initialState = useState({
        firstName: "Charlie",
        lastName: "Davidson",
        username:"chardave",
        email: "char_dave@cd.net",
        password: "E42157732t!",
    })


    const [currentUser, setCurrentUser] = useState({initialState})




    const handleChanges = e => {
       const updateUserInfo = {...currentUser,
        [e.target.name] : e.target.value}
    }

    const removeFromList = () => {
        //function to remove saved song from list
    }


    return (
        <div className = 'editinfo'>
            <div>
                <h2>Dashboard</h2>
                <h3>Saved Songs</h3>
                <div className = 'savedSongsContainer'>
                    {/* Map over res.data and create card for each. */}
                </div>
            </div>

            <div className = 'personalInfo'>

            <label > First Name: 
                <input
                name = 'firstName'
                value = {currentUser.firstName}
                placeholder = {currentUser.firstName}
                onclick = {handleChanges}
                >{currentUser.firstName}</input></label>

            </div>

        </div>
    )
}
   