import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Carousel from './Courasel'
import axios from 'axios';
import { appContext } from '../utilities/appContext';



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
      <div className = 'home-div'>
        <h1 className = 'home-h1'>Welcome to the song suggester! </h1>

        <Carousel/>

        <h3 className = 'home-h3' >Select some Moods to get suggested songs</h3>
        <div className = 'mood-container'>
          {allMoods.map(mood=>(
                          <label className = 'mood-label' key={mood}>
                              {mood}:<input className = 'mood-input' type='checkbox' name={mood} ></input>
                          </label>
                      ))}
        </div>
      </div>

     

      <div className="savedSongs">
        {/* display saved cards here Cards{saved}*/}
      </div>
    </>
  );
}
