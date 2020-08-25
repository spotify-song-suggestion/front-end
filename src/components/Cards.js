import React from "react";

export default function Cards(props) {
  // props should come from search results

  // set state for an array of savedSongs

  // onClick handler needed to add the item to the savedSongs array(spread operator)

  return (
    <h1>Cards Here</h1>
    // Return cards based on search results. Pseudo code below. Will display album art if available, artist name, album name and song title. Each card will have a "save" button to add the selection to an array of cards to be displayed on the Home page.

    // <div className="card">
    //   {props.members.map((itemReturned) => (
    //     <div className="member" key={itemReturned.id}>

    //       <img></img>
    //       <p>{info.artistName}</p>
    //       <p>{info.albumName}</p>
    //       <p>{info.songTitle}</p>
    //       <button>Save</button>
    //     </>
    //   ))}
    // </div>
  );
}
