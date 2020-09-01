import React from "react";
import SavedSongs from './SavedSongs';
import UpdateInfo from './UpdateInfo'



export default function UserAccount() {

  //track state for dynamic username

  
  
  


  const parsedCurrentUser = (localStorage.getItem('currentUser'))
  console.log('current user is', JSON.parse(parsedCurrentUser))
  const newCurrentUser = JSON.parse(parsedCurrentUser)


  return (
    <div className="editinfo" >
      <div className = 'main-saved-song-container'>
        <h2>{newCurrentUser.username}'s Dashboard</h2>
        <h3>Saved Songs</h3>
        <SavedSongs/>
      </div>
        <UpdateInfo/>
    </div>
  );
}
