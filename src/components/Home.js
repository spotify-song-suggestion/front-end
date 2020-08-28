import React from "react";
// import styled from "styled-components";
import Carousel from './Courasel'


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
  //get request to get saved cards

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
