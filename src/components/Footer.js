import React from "react";
import styled from "styled-components";

// ***** STYLES *****
const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  background-color: rgba(33, 33, 33, 0.9);
  font-size: 1.5em;
  color: #1db954;
  @media (max-width: 950px) {
    flex-direction: column;
    height: 50px;
    margin-bottom: 0;
    font-size: 1.5em;
    position: relative;
    bottom: 0;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    height: 40px;
    margin-bottom: 0;
    font-size: 1.2em;
    position: relative;
  }
`;
// ***** STYLES *****

export default function Footer() {
  return <FooterDiv>&copy; Copyright 2020</FooterDiv>;
}
