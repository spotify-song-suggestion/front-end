import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";
import spotify from "../img/spotify.png";

// ***** STYLES *****
const MainHeader = styled.div`
  display: flex;
  position: relative;
  background-color: rgba(33, 33, 33, 0.9);
  @media (max-width: 950px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }

`;
const StyledHeader = styled.div`
  background-color: rgba(33, 33, 33, 0.9);
  width: 100%;

  padding-bottom: 15px;
  padding-top: 5px;
  @media (max-width: 950px) {
    flex-direction: column;
    margin: 100px 0 10px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    margin: 100px 0 10px;
  }
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #1db954;
  font-size: 3.5em;
  margin: 0 auto;
  padding-bottom: 0.6em;
  font-weight: 700;
  letter-spacing: 2px;
  text-shadow: 4px 4px #121212;
`;
const StyledImg = styled.img`
  position: absolute;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-self: center;
  margin-left: 5%;
  @media (max-width: 950px) {
    flex-direction: column;
    margin: 10px auto;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10px auto;
  }
 
`;
// ***** STYLES *****

export default function Header() {
  return (
    <MainHeader>
      <StyledImg src={spotify} alt="spotify logo" />
      <StyledHeader>
        <Title>Spotify Song Suggester</Title>
        <Navigation />
      </StyledHeader>
    </MainHeader>
  );
}
