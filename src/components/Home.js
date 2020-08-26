import React from "react";
import styled from "styled-components";
import Carousel from './Courasel'


export default function Home() {
  //get request to get saved cards

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
