import React, { useState, useContext } from 'react';
import { appContext } from '../utilities/appContext';
import styled from "styled-components";
import axios from 'axios';


export default function UpdateInfo() {


const UpdateButton = styled.button`
  width: 150px;
  height: 35px;
  padding-bottom: 5px;
  font-size: 1.25em;
  border-radius: 10px;
  color: white;
  background-color: rgba(29, 185, 84, 0.8);
`;

    const currentUser = useContext(appContext).currentUser;
    const setCurrentUser = useContext(appContext).currentUser;
    const parsedCurrentUser = (localStorage.getItem('currentUser'))
    console.log('current user is', JSON.parse(parsedCurrentUser))
    const newCurrentUser = JSON.parse(parsedCurrentUser)
   

    const [password, setPassword ] = useState(' ')
   
    console.log( newCurrentUser );
    const updatedCredentials = {username: newCurrentUser.username, password: password };
    const handleChanges = e => {
    
        setPassword(e.target.value)
        
  
    }

    const updatePassword = () => {
        axios.put('https://spotify-song-suggestor-x.herokuapp.com/api/auth/update', updatedCredentials )
        .then(res => {
           
            console.log(currentUser)
            console.log( 'new password posted')
            
        
        })
        .catch(err => {console.log('new password post fail', err)})
    }
 
  
    return (
  
        <div className="personalInfo">
          <h3> Account Information </h3>
          
            <label>Username: <br /> <h3>{newCurrentUser.username}</h3>
            </label>
            <label>
              Password: <br />
              <input
                type = 'password'
                name= 'password'
                value={password}
                placeholder='Enter new password'
                onChange ={handleChanges}
              >
              </input>
            </label>
    
            <UpdateButton onClick = {updatePassword} >Update Password</UpdateButton>
     
        </div>
    );
}
