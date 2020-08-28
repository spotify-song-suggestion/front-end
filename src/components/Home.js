<<<<<<< HEAD
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
=======
import React from "react";
// import styled from "styled-components";
>>>>>>> e8fd168aaf70e980123fc80c89af7a9aa8be0b41
import Carousel from './Courasel'
import axios from 'axios';
import { appContext } from '../utilities/appContext';



// These are for styling using styled components.
// const HomeDiv= styled.div
// `display: flex;
// flex-direction: column;
// align-items: center;
// `
// const HomeHeadline= styled.h1 
// ` margin-top: .6em;
// margin-bottom: .6em;
// color: #b3b3b3;
// `
// const HomeSubhead= styled.h3 
// ` margin-top: .5em;
// margin-bottom: .4em;
// font-size: 2.25em;
// color: #b3b3b3;
// `

export default function Home() {

    const setCurrentUser = useContext(appContext).setCurrentUser;
    const currentUser = useContext(appContext).currentUser;

  //get request to get saved cards

  useEffect(()=>{
    console.log(currentUser)

    axios.get('https://api.spotify.com/authorize' , 'bf42e0eac342434b9c9317384e97372f')
    .then(res => {
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  })

   //List of all possible moods
   const allMoods = ['acoustic', 'relaxing', 'energy', 'joyful', 'fitness', 'rebelious', 'clean', 'explicit', 'dance', 'latin', 'foreign' ]

  return (
    <>

     {/* <HomeDiv> */}
     {/*Commented out elements use styled components */}
        <div className = 'home-div'>
          <h1 className = 'home-h1'>Welcome to the song suggester! </h1>
          {/* <HomeHeadline>Welcome to the song suggester! </HomeHeadline> */}
  
          <Carousel/>
  
          <h3 className = 'home-h3' >Select some Moods to get suggested songs</h3>
          {/* <HomeSubhead >Select some Moods to get suggested songs</HomeSubhead> */}


          <div className = 'mood-container'>
            {allMoods.map(mood=>(
                            <label className = 'mood-label' key={mood}>
                                {mood}:<input className = 'mood-input' type='checkbox' name={mood} ></input>
                            </label>
                        ))}
          </div>
        </div>
     {/* </HomeDiv> */}

     

      <div className="savedSongs">
        {/* display saved cards here Cards{saved}*/}
      </div>
    </>
  );
}
