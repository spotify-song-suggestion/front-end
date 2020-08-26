import React from "react";
import styled from "styled-components";

const Results = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function Cards(props) {
  // props should come from search results
  console.log("props", props);
  console.log("props artist", props.artistResults[0]);
  console.log("props track", props.trackResults);
  // set state for an array of savedSongs

  // onClick handler needed to add the item to the savedSongs array(spread operator)

  return (
    // <h1>Cards Here</h1>
    // Return cards based on search results. Pseudo code below. Will display album art if available, artist name, album name and song title. Each card will have a "save" button to add the selection to an array of cards to be displayed on the Home page.

    <Results>
      <div className="artist">
        <h3>Artist results</h3>
        {props.artistResults.map((item, index) => (
          <div className="artistReturn" key={index}>
            <img src={item.images[1].url} alt="" />
            <p>{item.name}</p>
            <p>Genres: {item.genres}</p>
            <p>Popularity: {item.popularity}</p>
            <button>Save</button>
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
            <button>Save</button>
          </div>
        ))}
      </div>
    </Results>
  );
}
