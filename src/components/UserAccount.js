import React, { useState, useEffect } from 'react'
import axios from 'axios';




export default function UserAccount() {

    useEffect(()=>{
        axios.get('https://api.spotify.com/v1', 'bf42e0eac342434b9c9317384e97372f')
        .then ( res =>{
            console.log('apifetch success', res.data)
        })
        .catch ( err => {
            console.log( 'api fetch fail', err)
        })
    },[])



    return (
        <div className = 'editinfo'>
            <div>
                <h2>Dashboard</h2>
                <h3>Saved Songs</h3>
                {/*component of saved songs*/}
            </div>

            <form >
                <h3>Personal Information</h3>

                <label>First Name: 
                    <input 
                        type= 'text'
                        name= 'firstName'
                        placeholder = 'Enter new first name'
                        //value = {}
                        //onChange={handleChanges}
                        ></input>
                </label>
                <label>Last Name: 
                    <input 
                        type= 'text'
                        name= 'lastName'
                        placeholder = 'Enter new last name'
                        //value = {}
                        //onChange={handleChanges}
                        ></input>
                </label>
                <label>Password: 
                    <input 
                        type= 'password'
                        name= 'email'
                        placeholder = 'Enter new email'
                        //value = {}
                        //onChange={handleChanges}
                        ></input>

                </label>
              
              <button>Update</button>

            </form>

        </div>
    )
}
   