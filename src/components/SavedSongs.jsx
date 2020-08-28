import React, { useContext } from 'react'
import { appContext } from '../utilities/appContext';

export default function SavedSongs() {


    const savedSongs = useContext(appContext).savedSongs;
    console.log(savedSongs);
    return (
        <div>
            
        </div>
    )
}
