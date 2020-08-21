import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  }
  
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn())
  

  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        
        {isLoggedIn ? 
           <>

            <Link onClick = {logout}>Logout</Link> 
            <Link to = '/user_account'>My account</Link> 
            </>:
            <> 
            <Link to="/login">Login</Link> 
            <Link to = '/signup'>Sign Up</Link>
            </>
            }
      </div>
    </nav>
  );
}


