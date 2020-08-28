import React, { useContext } from 'react'
import { appContext } from '../utilities/appContext';
import play from '../img/play.png';
import x from '../img/x.png'

export default function SavedSongs() {


    const savedSongs = useContext(appContext).savedSongs;

    const parsedSongs = JSON.parse(localStorage.getItem('savedSongs'));
    console.log(parsedSongs);
    return (
        <div className = 'saved-songs-container'>
            {parsedSongs.map(parsedSong=>{
                console.log('mapping over parsed songs', parsedSong)
                
                
                return(
                    <div className = 'song'>
                        <img className = 'play' src = {play} alt = 'play'/>
                        <div>
                            <h3 className = 'artist-name'>{parsedSong[0].artists[0].name} - <span className = 'album-type'>{parsedSong[0].album.album_type}</span></h3>
                            
                            <p className = 'popularity' >Popularity Rating: {parsedSong[0].popularity}</p>
                        </div>
                        <img className = 'delete' src={x} alt ='remove' />

                    </div>
                )
            })}
        </div>
    )
}
