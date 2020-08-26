import React from "react";
import styled from "styled-components";
import Carousel from './Courasel'


export default function Home() {
  //get request to get saved cards

  return (
    <>
      <div className = 'home-div'>
        <h1 className = 'home-h1'>Welcome to the song suggester! </h1>

        <Carousel/>
      </div>

     

      <div className="savedSongs">
        {/* display saved cards here Cards{saved}*/}
      </div>
    </>
  );
}
