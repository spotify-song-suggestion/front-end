import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

// ***** STYLES *****
const HeaderDiv = styled.div`
  background-color: rgba(33, 33, 33, 0.9);
  width: 100%;
  height: 100px;
  padding-bottom: 15px;
  padding-top: 5px;
`;
const Title = styled.h1`
  color: #1db954;
  font-size: 3em;
  margin: 0 auto;
  padding-bottom: 0.6em;
  text-shadow: 5px 5px rgb(18, 18, 18);
`;
// ***** STYLES *****

export default function Header() {
  return (
    <HeaderDiv>
      <Title>Spotify Song Suggester</Title>
      <Navigation />
    </HeaderDiv>
  );
}
