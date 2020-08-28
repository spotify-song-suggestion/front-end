import React, { useState, useContext } from "react";
import styled from "styled-components";
import { appContext } from '../utilities/appContext'

// *****Styles*****
const Results = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const SaveButton = styled.button`
  padding: 0 20px;
  font-size: 1em;
  border-radius: 10px;
  background-color: #1db954;
  margin-top: 16px;
  color: #e8e8e8;
  overflow: hidden;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
const ArtistResults = styled.div`
  background-color: rgba(33, 33, 33, 0.6);
  display: flex;
  flex-direction: column;
  ${'' /* flex: 1; */}
  height: 550px;
  width: 400px;
  margin: 0 10%;
  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;
const TrackResults = styled.div`
  background-color: rgba(33, 33, 33, 0.6);
  display: flex;
  flex-direction: column;
  ${'' /* flex: 1; */}
  height: 550px;
  width: 400px;
  margin: 0 10%;
  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

const ResultsTitle = styled.h3`
  margin-top: 2%;
  font-size: 2.25em;
`;

const ArtistCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TrackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledImg = styled.img`
  height: 300px;
  width: 300px;
  margin-bottom: 16px;
`;

const Para = styled.p`
  font-size: 1.125 em;
  margin-bottom: 8px;
`;
// *****Styles*****




export default function Cards(props) {
  // props come from search results
  // console.log("props", props);
  // console.log("props artist", props.artistResults[0]);
  // console.log("props track", props.trackResults);

  // set state for an array of savedSongs??
const currentUser = useContext(appContext).currentUser;
const setSavedSongs = useContext (appContext).setSavedSongs;
const savedSongs = useContext(appContext).savedSongs;
const loggedIn = () => {
  if(localStorage.getItem('Logged In') === 'true') {
      
    return true;
      
  }
    return false;
}

const logout = () => {
  setIsLoggedIn(false)
  localStorage.removeItem('token')
  localStorage.removeItem('Logged In')
}

const [isLoggedIn, setIsLoggedIn] = useState(loggedIn())
//set onClick function to remove a saved song.
const onClick = e =>{
  //take artistResults and add set the to setSaved songs
  setSavedSongs([...savedSongs, props.artistResults])
  console.log(savedSongs)
}
  return (
    <Results>
      <ArtistResults>
        <ResultsTitle>Artists</ResultsTitle>
        {props.artistResults.map((item, index) => (
          <ArtistCard key={index}>
            <StyledImg src={item.images[1].url} alt="" />
            <Para>{item.name}</Para>
            <Para>Genres: {item.genres}</Para>
            <Para>Popularity: {item.popularity}</Para>
            { isLoggedIn ? <SaveButton onClick = { onClick }>Save</SaveButton>: null }
          </ArtistCard>
        ))}
      </ArtistResults>
      <TrackResults>
        <ResultsTitle>Tracks</ResultsTitle>
        {props.trackResults.map((item, index) => (
          <TrackCard key={index}>
            <StyledImg src={item.album.images[1].url} alt="" />
            <Para>{item.name}</Para>
            <Para>Artist: {item.artists[0].name}</Para>
            <Para>Popularity: {item.popularity}</Para>
             { isLoggedIn ? <SaveButton onClick = { onClick }>Save</SaveButton>: null }
          </TrackCard>
        ))}
      </TrackResults>
    </Results>
  );
}
