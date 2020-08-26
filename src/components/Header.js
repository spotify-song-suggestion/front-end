import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";
import spotify from "../img/spotify.png";

// ***** STYLES *****
const MainHeader = styled.div`
  display: flex;
  position: relative;
  background-color: rgba(33, 33, 33, 0.9);
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const StyledHeader = styled.div`
  background-color: rgba(33, 33, 33, 0.9);
  width: 100%;
  height: 100px;
  padding-bottom: 15px;
  padding-top: 5px;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 175px;
  }
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #1db954;
  font-size: 3em;
  margin: 0 auto;
  padding-bottom: 0.6em;
  text-shadow: 5px 5px rgb(18, 18, 18);
`;
const StyledImg = styled.img`
  position: absolute;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-self: center;
  margin-left: 3%;
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
