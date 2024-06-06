import React from 'react'
import './Playlist.css';
import Tracklist from '../tracklist/Tracklist.jsx'

function Playlist({playListTracks, onRemove, playlistName, onNameChange}) {

  //function handleNameChange tracks the changes from the input
  function handleNameChange(event){
    onNameChange(event.target.value);
  }

  return (
    <div className="Playlist">
      <input defaultValue={playlistName} onChange={handleNameChange}/>
      {/* <!-- Add a TrackList component --> */}
      <Tracklist 
        searchResults = {playListTracks}
        onRemove = {onRemove}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
