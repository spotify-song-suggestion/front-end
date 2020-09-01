import React, { useContext, useState } from 'react'
import { appContext } from '../utilities/appContext';
import play from '../img/play.png';
import x from '../img/x.png'
export default function SavedSongs() {
  const savedSongs = useContext(appContext).savedSongs;

  const parsedSongs = JSON.parse(localStorage.getItem("savedSongs"));
  console.log(parsedSongs);

    const savedSongs = useContext(appContext).savedSongs;
    const setSavedSongs = useContext(appContext).setSavedSongs;
    const parsedSongs = JSON.parse(localStorage.getItem('savedSongs'));
    
    console.log('the saved songs so far', parsedSongs);
    console.log(savedSongs)

   
    const [list, setList] = useState(parsedSongs)
    
    const handleRemove = (id) => {
        console.log(id)
        const newList = list.splice( id, 1)
        console.log(newList)
    }
   

   //+ (  ( parsedSongs.length+1 >= 10 )? 'scrolls_10' : null )

    return (
        


        <div className = 'saved-songs-container'>
            {(list != null ) ? <>{list.map((parsedSong, index)=>{

            console.log('mapping over parsed songs', parsedSong)
            
            
            return(
                <div className = 'song' id= {index} key = {index}  >
                    <img className = 'play' src = {play} alt = 'play'/>
                    <div className = 'middle-div'>
                        <h3 className = 'artist-name'>{parsedSong[0].artists[0].name} - <span className = 'album-type'>{parsedSong[0].album.album_type}</span></h3>
                        
                        <p className = 'popularity' >Popularity Rating: {parsedSong[0].popularity}</p>
                    </div>
                    <button onClick = {handleRemove(parsedSong[0].id)}><img className = 'delete' src={x} alt ='remove'  /></button>
                </div>
            )
        })} </>: <div className = 'no_saved_songs'>You have not added any <span>music</span>!</div>}
        </div>
    )
}
