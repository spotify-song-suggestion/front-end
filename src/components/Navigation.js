import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { appContext } from "../utilities/appContext";

// ***** STYLES *****
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  color: #b3b3b3;
  text-decoration: none;
  font-size: 1.3em;
  @media (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

// ***** STYLES *****

export default function Navigation() {
  //appContext

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("Logged In");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("savedSongs");
    localStorage.removeItem("savedArtists");
  };

  const isLoggedIn = useContext(appContext).isLoggedIn;
  const setIsLoggedIn = useContext(appContext).setIsLoggedIn;

  const LoggedInNavigation = () => {
    return (
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
        <StyledLink onClick={logout}>Logout</StyledLink>
        <StyledLink to="/user_account">My Account</StyledLink>
      </StyledNav>
    );
  };
  const LoggedOutNavigation = () => {
    return (
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </StyledNav>
    );
  };

  return <>{isLoggedIn ? <LoggedInNavigation /> : <LoggedOutNavigation />}</>;
}
