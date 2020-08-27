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
  font-size: 25px;
  color: #1db954;
  @media (max-width: 600px) {
    flex-direction: column;
    height: 20px;
    margin-bottom: 0;
    position: relative;
    font-size: 14px;
  }
`;
// ***** STYLES *****


export default function Footer() {
  return <FooterDiv>&copy; Copyright 2020</FooterDiv>;
}
