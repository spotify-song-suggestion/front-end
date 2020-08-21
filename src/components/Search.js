import React from "react";
import Cards from "./Cards"



export default function Search() {




  return (
    <div>
      <h1>Search</h1>
      <form>
        <input
          type="text"
          name="artistName"
          placeholder="Artist Name"
        />
        <input
          type="text"
          name="songTitle"
          placeholder="Song Title"
        />
        <button type="submit">Search</button>
      </form>

<Cards />

    </div>
  );
}
