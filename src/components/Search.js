import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import styled from "styled-components";

// ***** STYLES *****
const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #b3b3b3;
`;


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
  margin-top: 1em;
  margin-bottom: 1em;
  color: #b3b3b3;
`;
// ***** STYLES *****

export default function Search() {
  // Initial state for search
  const [searchTerm, setSearchTerm] = useState("");
  const [artistResults, setArtistResults] = useState([]);
  const [trackResults, setTrackResults] = useState([]);
  // Get the initial data set
  useEffect(() => {
    axios
      .get(`https://songsuggester-nyc.herokuapp.com/artist/${searchTerm}`)
      .then((response) => {
        setArtistResults([response.data]);
      })
      .catch((error) => {
        console.log("error retrieving data", error);
      });
    axios
      .get(`https://songsuggester-nyc.herokuapp.com/track/${searchTerm}`)
      .then((response) => {
        setTrackResults([response.data.tracks.items[0]]);
      })
      .catch((error) => {
        console.log("error retrieving data", error);
      });
  }, [searchTerm]);

  // Handling changing inputs to the search field
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);

    if (searchTerm !== "") {
      axios
        .get(`https://songsuggester-nyc.herokuapp.com/artist/${searchTerm}`)
        .then((response) => {
          console.log("response", response.data);
          setArtistResults([response.data]);
        })
        .catch((error) => {
          console.log("error retrieving data", error);
        });
      axios
        .get(`https://songsuggester-nyc.herokuapp.com/track/${searchTerm}`)
        .then((response) => {
          console.log("response", response.data);
          setTrackResults([response.data.tracks.items[0]]);
        })
        .catch((error) => {
          console.log("error retrieving data", error);
        });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://api.spotify.com/v1/search", {
        artistName: "Kanye",
        songTitle: "Stronger",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyledSearch>
      <Title>Search by Artist or Song Title</Title>
      <form>
        <label htmlFor="name" onSubmit={onSubmit}>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Artist Name or Song Title"
            onChange={handleChange}
            value={searchTerm}
          />
        </label>
      </form>

      <Cards artistResults={artistResults} trackResults={trackResults} />
      
    </StyledSearch>
  );
}
