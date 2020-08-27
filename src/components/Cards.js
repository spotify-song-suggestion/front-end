import React from "react";
import styled from "styled-components";

const Results = styled.div`
  display: flex;
  justify-content: space-around;
`;
const SaveButton = styled.button`
  width: 100px;
  height: 25px;
  padding-bottom: 10px;
  font-size: 1em;
  border-radius: 10px;
  background-color: blue;
`;
export default function Cards(props) {
  // props come from search results
  // console.log("props", props);
  // console.log("props artist", props.artistResults[0]);
  // console.log("props track", props.trackResults);
  // set state for an array of savedSongs

  // onClick handler needed to add the item to the savedSongs array(spread operator)

  return (
    <Results>
      <div className="artist">
        <h3>Artist results</h3>
        {props.artistResults.map((item, index) => (
          <div className="artistReturn" key={index}>
            <img src={item.images[1].url} alt="" />
            <p>{item.name}</p>
            <p>Genres: {item.genres}</p>
            <p>Popularity: {item.popularity}</p>
            <SaveButton>Save</SaveButton>
          </div>
        ))}
      </div>
      <div className="track">
        <h3>Track results</h3>
        {props.trackResults.map((item, index) => (
          <div className="trackReturn" key={index}>
            <img src={item.album.images[1].url} alt="" />
            <p>{item.name}</p>
            <p>Artist: {item.artists[0].name}</p>
            <p>Popularity: {item.popularity}</p>
            <SaveButton>Save</SaveButton>
          </div>
        ))}
      </div>
    </Results>
  );
}
