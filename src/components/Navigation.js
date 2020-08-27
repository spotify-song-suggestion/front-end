import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

// ***** STYLES *****
const StyledLink = styled(Link) 
`color: #b3b3b3;
text-decoration: none;
@media (max-width: 600px){
  font-size: 20px;
  margin-bottom: 10px;
}
`
const StyledNav = styled.nav 
` display: flex;
justify-content: space-evenly;
max-width: 1300px;
margin: 0 auto;
@media (max-width: 600px){
  flex-direction: column;
}
`
// ***** STYLES *****


export default function Navigation() {




  const loggedIn = () => {
    if(localStorage.getItem('Logged In') === 'true') {
        return true;
    }
      return false;
  }
  
  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('token')
    localStorage.removeItem('Logged In')
  }
  
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn())
  

  return (
    <StyledNav>
      
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/search">Search</StyledLink>
        
        {isLoggedIn ? 
           <>
            
            <StyledLink onClick = {logout}>Logout</StyledLink> 
            <StyledLink to = '/user_account'>My account</StyledLink> 
            </>:
            <> 
            <StyledLink to="/login">Login</StyledLink> 
            <StyledLink to = '/signup'>Sign Up</StyledLink>
            </>
            }
      
    </StyledNav>
  );
}


