import React from "react";
import SavedSongs from './SavedSongs';
import UpdateInfo from './UpdateInfo'
import axios from 'axios';


export default function UserAccount() {

  //track state for dynamic username

  
  
  


  const parsedCurrentUser = (localStorage.getItem('currentUser'))
  console.log('current user is', JSON.parse(parsedCurrentUser))
  const newCurrentUser = JSON.parse(parsedCurrentUser)

  const terminate = () => {
    const choice = prompt('Are you sure you want to terminate your account? type \'yes\' or \'no\'')
    
    const delUrl = `https://spotify-song-suggestor-x.herokuapp.com/api/auth/delete`;

    const authorization = { Authorization: localStorage.getItem('token')}
    
    const payload = {'username': newCurrentUser.username}

    if (choice === 'yes') {
      alert('Your account is being deleted...')

      axios
      .delete(delUrl, {headers: authorization, data: payload})


      .then(res =>{
        console.log(res.status);
      } )
      .catch(err => {
        console.log('Error deleting your account', err);
        console.log()
      })
    }else if (choice === 'no'){
      alert('Your account was not deleted.')
    }else{
      alert('Please input \'yes\' or \'no\' ')
    }
  }


  return (
    <div className="editinfo" >
      <div className = 'main-saved-song-container'>
        <h2>{newCurrentUser.username}'s Dashboard</h2>
        <h3>Saved Songs</h3>
        <SavedSongs/>
      </div>
        <div>
          <UpdateInfo/>
          <button className = 'terminate' onClick = {terminate}>Terminate Account</button>
        </div>
    </div>
  );
}
