import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
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



  return (
    <>

     {/* <HomeDiv> */}
     {/*Commented out elements use styled components */}
        <div className = 'home-div'>
          <h1 className = 'home-h1'>Welcome to the song suggester! </h1>
          {/* <HomeHeadline>Welcome to the song suggester! </HomeHeadline> */}
  
          <Carousel/>
  
          <h2 className = 'home-h3' >Audio Visualizer</h2>
          {/* <HomeSubhead >Select some Moods to get suggested songs</HomeSubhead> */}

        </div>
     {/* </HomeDiv> */}

     

      <div className="savedSongs">
        {/* display saved cards here Cards{saved}*/}
      </div>
    </>
  );
}
