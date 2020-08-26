import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import styled from "styled-components";

// ***** STYLES *****
const Input = styled.input`
  background-color: rgba(33, 33, 33, 0.9);
  height: 2em;
  width: 20em;
  margin: 0 1em;
  border: 1px solid white;
  border-radius: 25px;
  text-align: center;
  font-size: 1em;
  margin-bottom: 2em;
  overflow: hidden;
  outline: none;
  color: #e8e8e8;
`;
const Title = styled.h1`
  margin-bottom: 2em;
`;
// ***** STYLES *****

export default function Search() {
  // Initial state for search
  const [searchTerm, setSearchTerm] = useState({
    artistName: "",
    songTitle: "",
  });
  const [searchResults, setSearchResults] = useState(["a"]);

  

  // const Results = (data) => {
  //   let count= 0;
  //   let i = count;
  //   for(i=0; i<=data.length; i++)
  //  return  (console.log(data[i]))
  //   // return data.[i].Artist.toLowerCase().includes(searchTerm.toLowerCase());}
  // }

  const handleChange = (e) => {
    // handling search fields independently
    const newSearch = {
      ...searchTerm,
      [e.target.name]: e.target.value,
    };
    setSearchTerm(newSearch);
    axios
      .post("https://5f3fba8744212d0016fed1c4.mockapi.io/data", e.target.value)
      .then((response) => {
        console.log("response", response);
      })
      .catch();
  };

  const onSubmit = e => {
    axios.post('https://api.spotify.com/v1/search', {'artistName': 'Kanye', 'songTitle' : 'Stronger'})
    .then(res => {console.log(res.data)})
    .catch(err => {console.log(err)})
  }

  return (
    <div className="search">
      <Title>Search by Artist or Song Title</Title>
      <form onSubmit = {onSubmit}>
        <label htmlFor="artistName">
          <Input
            id="artistName"
            type="text"
            name="artistName"
            placeholder="Artist Name"
            onChange={handleChange}
            // value={searchTerm}
          />
        </label>
        <label htmlFor="songTitle">
          <Input
            id="songTitle"
            type="text"
            name="songTitle"
            placeholder="Song Title"
            onChange={handleChange}
            // value={searchTerm}
          />
        </label>
        <button type="submit">Search</button> 
      </form>

      <Cards />
    </div>
  );
}
