import React from "react";
import styled from "styled-components";

// *****Styles*****
const Results = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const SaveButton = styled.button`
  ${"" /* width: 100px;
  height: 25px;
  padding-bottom: 10px; */}
  ${"" /* display: flex;
  align-self: center; */}
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
  flex: 1;
  height: 550px;
  border: 1 px solid black;
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
  flex: 1;
  height: 550px;
  margin: 0 10%;
  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

const ResultsTitle = styled.h3`
  margin-top: 3%;
  font-size: 2.5em;
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
  // set state for an array of savedSongs

  // onClick handler needed to add the item to the savedSongs array(spread operator)

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
            <SaveButton>Save</SaveButton>
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
            <SaveButton>Save</SaveButton>
          </TrackCard>
        ))}
      </TrackResults>
    </Results>
  );
}
